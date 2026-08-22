#!/usr/bin/env python3
from __future__ import annotations

import argparse
import math
import random
import shutil
import subprocess
import tempfile
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_OUT = ROOT / "public" / "videos" / "digitalvision-universe-loop.mp4"
DEFAULT_WEBM = ROOT / "public" / "videos" / "digitalvision-universe-loop.webm"
DEFAULT_POSTER = ROOT / "public" / "videos" / "digitalvision-universe-poster.png"
DEFAULT_VISUAL_OUT = ROOT / "public" / "videos" / "digitalvision-universe-visual.mp4"
DEFAULT_VISUAL_WEBM = ROOT / "public" / "videos" / "digitalvision-universe-visual.webm"
DEFAULT_VISUAL_POSTER = ROOT / "public" / "videos" / "digitalvision-universe-visual-poster.png"
DEFAULT_PREMIUM_VISUAL_OUT = ROOT / "public" / "videos" / "digitalvision-universe-visual-premium.mp4"
DEFAULT_PREMIUM_VISUAL_WEBM = ROOT / "public" / "videos" / "digitalvision-universe-visual-premium.webm"
DEFAULT_PREMIUM_VISUAL_POSTER = ROOT / "public" / "videos" / "digitalvision-universe-visual-premium-poster.png"

FONT_REGULAR = "/System/Library/Fonts/Supplemental/Arial.ttf"
FONT_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
FONT_BLACK = "/System/Library/Fonts/Supplemental/Arial Black.ttf"


def clamp(value: float, low: int = 0, high: int = 255) -> int:
    return max(low, min(high, int(value)))


def lerp(a: float, b: float, t: float) -> float:
    return a + (b - a) * t


def ease_in_out(value: float) -> float:
    return 0.5 - 0.5 * math.cos(math.tau * value)


def font(size: int, weight: str = "regular") -> ImageFont.FreeTypeFont:
    preferred = {
        "regular": FONT_REGULAR,
        "bold": FONT_BOLD,
        "black": FONT_BLACK,
    }[weight]
    try:
        return ImageFont.truetype(preferred, size=size)
    except OSError:
        return ImageFont.load_default(size=size)


def text_size(draw: ImageDraw.ImageDraw, text: str, fnt: ImageFont.ImageFont) -> tuple[int, int]:
    if not text:
        return (0, 0)
    left, top, right, bottom = draw.textbbox((0, 0), text, font=fnt)
    return right - left, bottom - top


def tracking_text_width(draw: ImageDraw.ImageDraw, text: str, fnt: ImageFont.ImageFont, tracking: int) -> int:
    if not text:
        return 0
    width = 0
    for index, char in enumerate(text):
        char_width, _ = text_size(draw, char, fnt)
        width += char_width
        if index < len(text) - 1:
            width += tracking
    return width


def draw_tracking_text(
    draw: ImageDraw.ImageDraw,
    xy: tuple[int, int],
    text: str,
    fnt: ImageFont.ImageFont,
    fill: tuple[int, int, int, int],
    tracking: int,
) -> None:
    x, y = xy
    for char in text:
        draw.text((x, y), char, font=fnt, fill=fill)
        width, _ = text_size(draw, char, fnt)
        x += width + tracking


def tracking_text_mask(
    size: tuple[int, int],
    xy: tuple[int, int],
    text: str,
    fnt: ImageFont.ImageFont,
    tracking: int,
) -> Image.Image:
    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    x, y = xy
    for char in text:
        draw.text((x, y), char, font=fnt, fill=255)
        width, _ = text_size(draw, char, fnt)
        x += width + tracking
    return mask


def draw_gradient_tracking_text(
    base: Image.Image,
    xy: tuple[int, int],
    text: str,
    fnt: ImageFont.ImageFont,
    tracking: int,
    phase: float,
) -> None:
    w, h = base.size
    mask = tracking_text_mask((w, h), xy, text, fnt, tracking)
    gradient = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    pix = gradient.load()
    measure_draw = ImageDraw.Draw(mask)
    gradient_width = max(1, tracking_text_width(measure_draw, text, fnt, tracking) + 50)
    shimmer = 0.5 + 0.5 * math.sin(math.tau * phase)
    for x in range(max(0, xy[0] - 20), min(w, xy[0] + gradient_width)):
        t = (x - xy[0]) / gradient_width
        t = max(0.0, min(1.0, t))
        pulse = 0.16 * math.sin(math.tau * (t + phase))
        r = lerp(218, 193, t) + pulse * 80
        g = lerp(248, 153, t) + shimmer * 14
        b = lerp(255, 255, t) + pulse * 55
        for y in range(max(0, xy[1] - 8), min(h, xy[1] + 90)):
            pix[x, y] = (clamp(r), clamp(g), clamp(b), 255)
    base.alpha_composite(Image.composite(gradient, Image.new("RGBA", (w, h), (0, 0, 0, 0)), mask))


def make_background(width: int, height: int) -> Image.Image:
    img = Image.new("RGBA", (width, height), (0, 0, 0, 255))
    pixels = img.load()
    for y in range(height):
        ny = y / max(1, height - 1)
        for x in range(width):
            nx = x / max(1, width - 1)
            right_glow = math.exp(-(((nx - 0.79) / 0.34) ** 2 + ((ny - 0.47) / 0.64) ** 2))
            left_blue = math.exp(-(((nx - 0.17) / 0.42) ** 2 + ((ny - 0.20) / 0.50) ** 2))
            center_haze = math.exp(-(((nx - 0.58) / 0.22) ** 2 + ((ny - 0.58) / 0.42) ** 2))
            vignette = (abs(nx - 0.5) * 1.25) ** 2 + (abs(ny - 0.52) * 1.55) ** 2
            r = 4 + 26 * right_glow + 10 * center_haze - 7 * vignette
            g = 10 + 20 * left_blue + 8 * center_haze - 6 * vignette
            b = 26 + 38 * left_blue + 28 * right_glow + 8 * center_haze - 10 * vignette
            pixels[x, y] = (clamp(r), clamp(g), clamp(b), 255)

    noise = Image.effect_noise((width, height), 11).convert("L")
    noise_layer = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    noise_layer.putalpha(noise.point(lambda p: max(0, p - 124) // 7))
    img.alpha_composite(noise_layer)
    return img


def make_premium_visual_background(width: int, height: int) -> Image.Image:
    img = Image.new("RGBA", (width, height), (0, 0, 0, 255))
    pixels = img.load()
    for y in range(height):
        ny = y / max(1, height - 1)
        for x in range(width):
            nx = x / max(1, width - 1)
            left_blue = math.exp(-(((nx - 0.13) / 0.44) ** 2 + ((ny - 0.28) / 0.52) ** 2))
            right_warm = math.exp(-(((nx - 0.82) / 0.37) ** 2 + ((ny - 0.38) / 0.60) ** 2))
            center_depth = math.exp(-(((nx - 0.58) / 0.48) ** 2 + ((ny - 0.55) / 0.58) ** 2))
            vignette = (abs(nx - 0.5) * 1.18) ** 2 + (abs(ny - 0.48) * 1.38) ** 2
            r = 3 + 17 * right_warm + 7 * center_depth - 8 * vignette
            g = 8 + 18 * left_blue + 5 * center_depth - 7 * vignette
            b = 20 + 36 * left_blue + 18 * right_warm + 9 * center_depth - 13 * vignette
            pixels[x, y] = (clamp(r), clamp(g), clamp(b), 255)

    grain = Image.effect_noise((width, height), 4).convert("L")
    grain_layer = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    grain_layer.putalpha(grain.point(lambda p: max(0, p - 132) // 16))
    img.alpha_composite(grain_layer)
    return img


def rounded_panel_layer(width: int, height: int) -> Image.Image:
    layer = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    panel = (72, 128, 938, height - 70)
    radius = 34

    glow = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    gdraw = ImageDraw.Draw(glow)
    gdraw.rounded_rectangle(panel, radius=radius, outline=(115, 186, 223, 54), width=3)
    glow = glow.filter(ImageFilter.GaussianBlur(8))
    layer.alpha_composite(glow)

    draw.rounded_rectangle(panel, radius=radius, fill=(5, 10, 29, 138), outline=(115, 166, 204, 76), width=2)
    draw.line((panel[0], 197, panel[2], 197), fill=(125, 173, 214, 45), width=1)
    draw.line((panel[0], height - 168, panel[2], height - 168), fill=(125, 173, 214, 35), width=1)

    for x in range(panel[0] + 96, panel[2], 184):
        draw.line((x, panel[1] + 12, x, panel[3] - 12), fill=(92, 140, 196, 13), width=1)
    for y in range(panel[1] + 112, panel[3], 116):
        draw.line((panel[0] + 12, y, panel[2] - 12, y), fill=(92, 140, 196, 12), width=1)

    for i, color in enumerate([(118, 196, 236, 230), (217, 166, 91, 220), (158, 94, 241, 225)]):
        x = 110 + i * 22
        draw.ellipse((x, 158, x + 11, 169), fill=color)

    draw_tracking_text(draw, (178, 154), "DIGITALER SYSTEMKERN", font(17, "black"), (214, 222, 233, 170), 3)
    draw.rounded_rectangle((768, 144, 904, 180), radius=18, outline=(132, 182, 214, 86), fill=(18, 37, 58, 106), width=2)
    draw_tracking_text(draw, (782, 156), "STARTKLAR", font(16, "black"), (207, 234, 239, 190), 2)

    draw.line((126, 360, 126, 590), fill=(137, 208, 247, 210), width=2)
    draw.line((128, 360, 128, 590), fill=(185, 91, 255, 170), width=2)

    subtitle_font = font(18, "black")
    draw.text((154, 356), "WEBDESIGN  -  SEO  -  SYSTEME", font=subtitle_font, fill=(137, 232, 255, 230))

    title_font = font(45, "black")
    draw.text((154, 405), "Klarer auftreten.", font=title_font, fill=(255, 255, 255, 244))
    draw.text((154, 455), "Besser gefunden werden.", font=title_font, fill=(255, 255, 255, 244))
    body_font = font(24, "regular")
    draw.text((154, 532), "Websites mit Struktur.", font=body_font, fill=(151, 231, 255, 232))
    draw.text((154, 564), "Sichtbar und einfach verwaltbar.", font=body_font, fill=(151, 231, 255, 232))

    draw.rounded_rectangle((118, height - 146, 398, height - 91), radius=12, fill=(236, 250, 255, 242), outline=(255, 232, 167, 210), width=2)
    button_grad = Image.new("RGBA", (280, 55), (0, 0, 0, 0))
    bp = button_grad.load()
    for x in range(280):
        t = x / 279
        for y in range(55):
            bp[x, y] = (
                clamp(238 + 24 * t),
                clamp(250 - 22 * t),
                clamp(255 - 70 * t),
                184,
            )
    layer.alpha_composite(button_grad, (118, height - 146))
    draw.text((142, height - 127), "Kostenlose Anfrage", font=font(19, "black"), fill=(10, 17, 36, 245))
    draw.line((360, height - 111, 374, height - 111), fill=(10, 17, 36, 245), width=2)
    draw.line((366, height - 119, 374, height - 111), fill=(10, 17, 36, 245), width=2)
    draw.line((366, height - 103, 374, height - 111), fill=(10, 17, 36, 245), width=2)

    draw.rounded_rectangle((414, height - 146, 606, height - 91), radius=12, fill=(12, 19, 44, 152), outline=(102, 151, 219, 82), width=2)
    draw.text((440, height - 127), "Ablauf ansehen", font=font(19, "black"), fill=(250, 251, 255, 236))

    draw_tracking_text(draw, (904, height - 28), "SCROLLEN", font(14, "black"), (119, 217, 247, 220), 7)
    return layer


def make_stars(width: int, height: int, amount: int = 96) -> list[dict[str, float]]:
    rnd = random.Random(32)
    stars = []
    for _ in range(amount):
        stars.append(
            {
                "x": rnd.uniform(0, width),
                "y": rnd.uniform(0, height),
                "r": rnd.choice([1.2, 1.5, 1.8, 2.2, 3.0, 3.8]),
                "a": rnd.uniform(70, 190),
                "phase": rnd.random(),
                "drift": rnd.uniform(3, 22),
                "speed": rnd.choice([1, 2, 3]),
                "yspeed": rnd.choice([1, 2]),
                "twinkle": rnd.choice([1, 2, 3]),
            }
        )
    return stars


def make_premium_stars(width: int, height: int, amount: int = 64) -> list[dict[str, float]]:
    rnd = random.Random(84)
    stars = []
    for _ in range(amount):
        stars.append(
            {
                "x": rnd.uniform(0, width),
                "y": rnd.uniform(0, height),
                "r": rnd.choice([0.7, 0.9, 1.1, 1.4, 1.8]),
                "a": rnd.uniform(34, 128),
                "phase": rnd.random(),
                "drift": rnd.uniform(2, 10),
                "speed": rnd.choice([1, 2]),
                "yspeed": rnd.choice([1, 2]),
                "twinkle": rnd.choice([1, 2]),
            }
        )
    return stars


def draw_stars(layer: Image.Image, stars: list[dict[str, float]], phase: float, scroll: float = 0.0) -> None:
    width, _ = layer.size
    draw = ImageDraw.Draw(layer, "RGBA")
    for star in stars:
        x = (
            star["x"]
            - scroll
            + math.sin(math.tau * (phase * star["speed"] + star["phase"])) * star["drift"]
        ) % width
        y = star["y"] + math.cos(math.tau * (phase * star["yspeed"] + star["phase"])) * star["drift"] * 0.45
        alpha = star["a"] * (0.65 + 0.35 * math.sin(math.tau * (phase * star["twinkle"] + star["phase"])))
        radius = star["r"]
        color = (132, 221, 255, clamp(alpha))
        if radius > 2.5:
            glow = radius * 4
            draw.ellipse((x - glow, y - glow, x + glow, y + glow), fill=(83, 170, 239, clamp(alpha * 0.12)))
        draw.ellipse((x - radius, y - radius, x + radius, y + radius), fill=color)


def draw_premium_stars(layer: Image.Image, stars: list[dict[str, float]], phase: float, scroll: float = 0.0) -> None:
    width, _ = layer.size
    draw = ImageDraw.Draw(layer, "RGBA")
    for star in stars:
        x = (
            star["x"]
            - scroll
            + math.sin(math.tau * (phase * star["speed"] + star["phase"])) * star["drift"]
        ) % width
        y = star["y"] + math.cos(math.tau * (phase * star["yspeed"] + star["phase"])) * star["drift"] * 0.35
        alpha = star["a"] * (0.78 + 0.22 * math.sin(math.tau * (phase * star["twinkle"] + star["phase"])))
        radius = star["r"]
        if radius > 1.3:
            glow = radius * 5.5
            draw.ellipse((x - glow, y - glow, x + glow, y + glow), fill=(116, 203, 245, clamp(alpha * 0.10)))
        draw.ellipse((x - radius, y - radius, x + radius, y + radius), fill=(135, 216, 250, clamp(alpha)))


def orbit_points(
    cx: float,
    cy: float,
    rx: float,
    ry: float,
    rotation: float,
    start: float,
    sweep: float,
    steps: int,
) -> list[tuple[float, float]]:
    points = []
    rot = math.radians(rotation)
    cosr = math.cos(rot)
    sinr = math.sin(rot)
    for i in range(steps + 1):
        angle = start + sweep * (i / steps)
        x = math.cos(angle) * rx
        y = math.sin(angle) * ry
        points.append((cx + x * cosr - y * sinr, cy + x * sinr + y * cosr))
    return points


def draw_orbit_arc(
    layer: Image.Image,
    cx: float,
    cy: float,
    rx: float,
    ry: float,
    rotation: float,
    start: float,
    sweep: float,
    color: tuple[int, int, int, int],
    width: int = 2,
) -> None:
    draw = ImageDraw.Draw(layer, "RGBA")
    points = orbit_points(cx, cy, rx, ry, rotation, start, sweep, max(40, int(abs(sweep) * 28)))
    draw.line(points, fill=(color[0], color[1], color[2], clamp(color[3] * 0.35)), width=width + 5, joint="curve")
    draw.line(points, fill=color, width=width, joint="curve")


def draw_premium_orbit_arc(
    layer: Image.Image,
    cx: float,
    cy: float,
    rx: float,
    ry: float,
    rotation: float,
    start: float,
    sweep: float,
    color: tuple[int, int, int, int],
    width: int = 2,
) -> None:
    draw = ImageDraw.Draw(layer, "RGBA")
    points = orbit_points(cx, cy, rx, ry, rotation, start, sweep, max(64, int(abs(sweep) * 42)))
    draw.line(points, fill=(color[0], color[1], color[2], clamp(color[3] * 0.18)), width=width + 4, joint="curve")
    draw.line(points, fill=color, width=width, joint="curve")


def draw_orbital_dot(
    layer: Image.Image,
    cx: float,
    cy: float,
    rx: float,
    ry: float,
    rotation: float,
    angle: float,
    radius: float,
    color: tuple[int, int, int, int],
) -> None:
    (x, y) = orbit_points(cx, cy, rx, ry, rotation, angle, 0.0, 1)[0]
    draw = ImageDraw.Draw(layer, "RGBA")
    for mult, alpha in [(4.0, 0.15), (2.1, 0.32), (1.0, 1.0)]:
        rr = radius * mult
        draw.ellipse((x - rr, y - rr, x + rr, y + rr), fill=(color[0], color[1], color[2], clamp(color[3] * alpha)))


def draw_premium_orbital_dot(
    layer: Image.Image,
    cx: float,
    cy: float,
    rx: float,
    ry: float,
    rotation: float,
    angle: float,
    radius: float,
    color: tuple[int, int, int, int],
) -> None:
    (x, y) = orbit_points(cx, cy, rx, ry, rotation, angle, 0.0, 1)[0]
    draw = ImageDraw.Draw(layer, "RGBA")
    for mult, alpha in [(5.2, 0.08), (2.4, 0.20), (1.0, 0.92)]:
        rr = radius * mult
        draw.ellipse((x - rr, y - rr, x + rr, y + rr), fill=(color[0], color[1], color[2], clamp(color[3] * alpha)))


def draw_premium_body(layer: Image.Image, cx: float, cy: float, radius: float, phase: float) -> None:
    draw = ImageDraw.Draw(layer, "RGBA")
    pulse = 0.5 + 0.5 * math.sin(math.tau * phase)
    for i in range(72, 0, -1):
        t = i / 72
        rr = radius * (0.45 + 3.2 * t)
        alpha = (1 - t) ** 2 * (30 + 10 * pulse)
        draw.ellipse((cx - rr, cy - rr, cx + rr, cy + rr), fill=(255, 188, 98, clamp(alpha)))

    body_size = int(radius * 2.35)
    body = Image.new("RGBA", (body_size, body_size), (0, 0, 0, 0))
    pc = body_size / 2
    bp = body.load()
    light_x = pc - radius * 0.30
    light_y = pc - radius * 0.16
    for y in range(body_size):
        for x in range(body_size):
            dx = x - pc
            dy = y - pc
            dist = math.sqrt(dx * dx + dy * dy)
            if dist <= radius:
                rim = dist / radius
                light = 1 - min(1, math.sqrt((x - light_x) ** 2 + (y - light_y) ** 2) / (radius * 1.18))
                shadow = max(0.0, dx / radius)
                r = 42 + 205 * light + 30 * (1 - rim)
                g = 42 + 145 * light + 18 * (1 - rim)
                b = 58 + 44 * light + 28 * rim - 24 * shadow
                a = 255
                bp[x, y] = (clamp(r), clamp(g), clamp(b), a)

    body = body.filter(ImageFilter.GaussianBlur(0.35))
    layer.alpha_composite(body, (int(cx - pc), int(cy - pc)))
    draw.ellipse(
        (cx - radius, cy - radius, cx + radius, cy + radius),
        outline=(22, 32, 60, 152),
        width=max(1, int(radius / 18)),
    )


def draw_planet(layer: Image.Image, cx: int, cy: int, radius: int, phase: float) -> None:
    draw = ImageDraw.Draw(layer, "RGBA")
    pulse = 0.5 + 0.5 * math.sin(math.tau * phase)
    for i in range(90, 0, -1):
        t = i / 90
        rr = radius * (1.0 + 3.3 * t)
        alpha = (1 - t) ** 2 * (34 + 18 * pulse)
        draw.ellipse((cx - rr, cy - rr, cx + rr, cy + rr), fill=(255, 187, 90, clamp(alpha)))

    size = radius * 2 + 18
    planet = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    pdraw = ImageDraw.Draw(planet, "RGBA")
    pcx = pcy = size // 2
    lightx = pcx - radius * 0.42
    lighty = pcy - radius * 0.12
    for y in range(size):
        for x in range(size):
            dx = x - pcx
            dy = y - pcy
            dist = math.sqrt(dx * dx + dy * dy)
            if dist <= radius:
                light = 1 - min(1, math.sqrt((x - lightx) ** 2 + (y - lighty) ** 2) / (radius * 1.18))
                rim = dist / radius
                shadow = max(0.0, (dx / radius) * 0.62)
                r = 82 + light * 210 - shadow * 55
                g = 50 + light * 170 - shadow * 30
                b = 82 + light * 45 + rim * 18
                a = 255
                planet.putpixel((x, y), (clamp(r), clamp(g), clamp(b), a))

    pdraw.ellipse((pcx - radius, pcy - radius, pcx + radius, pcy + radius), outline=(25, 35, 68, 170), width=4)
    pdraw.arc((pcx - radius + 13, pcy - radius + 9, pcx + radius - 7, pcy + radius - 4), 205, 36, fill=(255, 214, 143, 76), width=2)
    layer.alpha_composite(planet, (cx - pcx, cy - pcy))

    for i in range(30, 0, -1):
        t = i / 30
        rr = radius * (0.1 + 0.78 * t)
        alpha = (1 - t) * 200
        draw.ellipse((cx - radius * 0.45 - rr, cy - radius * 0.08 - rr, cx - radius * 0.45 + rr, cy - radius * 0.08 + rr), fill=(255, 245, 200, clamp(alpha)))


def draw_cosmic_system(
    layer: Image.Image,
    width: int,
    height: int,
    phase: float,
    center_x: float | None = None,
    center_y: float | None = None,
    scale: float = 1.0,
) -> None:
    cx = width * 0.777 if center_x is None else center_x
    cy = height * 0.515 if center_y is None else center_y
    rotation = -7 + math.sin(math.tau * phase) * 1.2

    orbital_specs = [
        (390 * scale, 216 * scale, rotation + 1, 0.02, 4.55, (123, 203, 235, 152), max(2, round(2 * scale))),
        (455 * scale, 270 * scale, rotation - 3, 0.64, 4.82, (220, 135, 67, 130), max(2, round(2 * scale))),
        (530 * scale, 324 * scale, rotation + 6, 1.14, 5.28, (235, 183, 80, 156), max(2, round(2 * scale))),
        (315 * scale, 172 * scale, rotation + 10, 5.05, 1.55, (115, 210, 252, 145), max(2, round(3 * scale))),
        (370 * scale, 252 * scale, rotation - 8, 4.42, 1.9, (122, 151, 205, 80), max(2, round(3 * scale))),
        (284 * scale, 139 * scale, rotation + 15, 3.95, 1.34, (102, 113, 152, 66), max(2, round(2 * scale))),
    ]

    for idx, (rx, ry, rot, start, sweep, color, line_w) in enumerate(orbital_specs):
        spin = phase * math.tau * (1 if idx % 2 == 0 else -1)
        draw_orbit_arc(layer, cx, cy, rx, ry, rot, start + spin, sweep, color, line_w)

    dot_specs = [
        (390 * scale, 216 * scale, rotation + 1, 0.27, 8 * scale, (139, 223, 255, 230)),
        (455 * scale, 270 * scale, rotation - 3, 0.68, 5 * scale, (147, 218, 255, 205)),
        (530 * scale, 324 * scale, rotation + 6, 0.12, 6 * scale, (255, 215, 126, 218)),
        (315 * scale, 172 * scale, rotation + 10, 0.92, 7 * scale, (129, 218, 255, 220)),
        (370 * scale, 252 * scale, rotation - 8, 0.42, 4 * scale, (90, 177, 225, 180)),
        (455 * scale, 270 * scale, rotation - 3, 0.05, 4 * scale, (210, 102, 72, 180)),
    ]
    for idx, (rx, ry, rot, offset, radius, color) in enumerate(dot_specs):
        cycles = [1, -1, 2, -2, 3, -3][idx]
        angle = math.tau * (offset + phase * cycles)
        draw_orbital_dot(layer, cx, cy, rx, ry, rot, angle, radius, color)

    plasma = Image.new("RGBA", layer.size, (0, 0, 0, 0))
    pdraw = ImageDraw.Draw(plasma, "RGBA")
    pulse = 0.5 + 0.5 * math.sin(math.tau * (phase + 0.08))
    for i in range(54, 0, -1):
        t = i / 54
        rx = 270 * scale * t
        ry = 170 * scale * t
        alpha = (1 - t) ** 2 * (22 + 12 * pulse)
        pdraw.ellipse((cx - rx, cy - ry, cx + rx, cy + ry), fill=(183, 76, 122, clamp(alpha)))
    layer.alpha_composite(plasma)

    planet_x = int(cx - 250 * scale + math.sin(math.tau * phase) * 7 * scale)
    planet_y = int(cy - 8 * scale + math.cos(math.tau * phase) * 5 * scale)
    draw_planet(layer, planet_x, planet_y, max(36, round(72 * scale)), phase)


def draw_premium_orbit_system(
    layer: Image.Image,
    width: int,
    height: int,
    phase: float,
    center_x: float,
    center_y: float,
    scale: float = 1.0,
) -> None:
    rotation = -8 + math.sin(math.tau * phase) * 0.9
    glow = Image.new("RGBA", layer.size, (0, 0, 0, 0))
    gdraw = ImageDraw.Draw(glow, "RGBA")
    for i in range(42, 0, -1):
        t = i / 42
        rx = 392 * scale * t
        ry = 225 * scale * t
        alpha = (1 - t) ** 2 * 15
        gdraw.ellipse((center_x - rx, center_y - ry, center_x + rx, center_y + ry), fill=(112, 53, 102, clamp(alpha)))
    layer.alpha_composite(glow.filter(ImageFilter.GaussianBlur(12)))

    specs = [
        (415, 238, rotation + 1, 0.28, 5.06, (118, 196, 226, 124), 2),
        (487, 292, rotation - 2, 0.85, 4.78, (205, 113, 69, 102), 2),
        (552, 342, rotation + 4, 1.36, 4.90, (232, 179, 89, 128), 2),
        (340, 184, rotation + 8, 5.06, 1.62, (112, 193, 225, 112), 2),
        (382, 255, rotation - 7, 4.44, 1.72, (96, 105, 142, 80), 2),
        (278, 142, rotation + 13, 3.92, 1.20, (88, 91, 124, 72), 1),
    ]
    for idx, (rx, ry, rot, start, sweep, color, line_width) in enumerate(specs):
        spin = math.sin(math.tau * phase) * (0.16 if idx % 2 == 0 else -0.12)
        draw_premium_orbit_arc(
            layer,
            center_x,
            center_y,
            rx * scale,
            ry * scale,
            rot,
            start + spin,
            sweep,
            color,
            max(1, round(line_width * scale)),
        )

    dot_specs = [
        (415, 238, rotation + 1, 0.18, 4.8, (131, 217, 247, 190), 0.38),
        (487, 292, rotation - 2, 0.54, 3.4, (121, 198, 232, 146), -0.32),
        (552, 342, rotation + 4, 0.86, 4.8, (244, 194, 102, 172), 0.30),
        (340, 184, rotation + 8, 0.70, 3.8, (137, 218, 245, 178), -0.36),
    ]
    for index, (rx, ry, rot, offset, radius, color, speed) in enumerate(dot_specs):
        angle = math.tau * offset + math.sin(math.tau * phase + index * 0.7) * speed
        draw_premium_orbital_dot(layer, center_x, center_y, rx * scale, ry * scale, rot, angle, radius * scale, color)

    body_x = center_x - 272 * scale + math.sin(math.tau * phase) * 4 * scale
    body_y = center_y - 10 * scale + math.cos(math.tau * phase) * 3 * scale
    draw_premium_body(layer, body_x, body_y, 68 * scale, phase)


def draw_scan_and_shimmer(layer: Image.Image, width: int, height: int, phase: float) -> None:
    draw = ImageDraw.Draw(layer, "RGBA")
    sweep_x = int(84 + 840 * ease_in_out(phase))
    draw.rounded_rectangle((72, 128, 938, height - 70), radius=34, outline=(140, 224, 255, 24), width=1)
    draw.line((sweep_x, 199, sweep_x, height - 172), fill=(119, 215, 255, 25), width=2)

    title_font = font(58, "black")
    draw_gradient_tracking_text(layer, (122, 267), "DIGITAL VISION", title_font, 12, phase)

    for i in range(8):
        y = 210 + i * 72 + math.sin(math.tau * (phase + i * 0.13)) * 3
        alpha = 10 + 12 * (0.5 + 0.5 * math.sin(math.tau * (phase * 1.4 + i * 0.17)))
        draw.line((86, y, 920, y), fill=(107, 190, 236, clamp(alpha)), width=1)


def render_frame(static: Image.Image, panel: Image.Image, stars: list[dict[str, float]], frame: int, total: int) -> Image.Image:
    phase = frame / total
    img = static.copy()
    motion = Image.new("RGBA", static.size, (0, 0, 0, 0))
    width, height = static.size

    draw_stars(motion, stars, phase)
    draw_cosmic_system(motion, width, height, phase)
    img.alpha_composite(motion)

    img.alpha_composite(panel)
    shimmer = Image.new("RGBA", static.size, (0, 0, 0, 0))
    draw_scan_and_shimmer(shimmer, width, height, phase)
    img.alpha_composite(shimmer)
    return img.convert("RGB")


def render_visual_frame(static: Image.Image, stars: list[dict[str, float]], frame: int, total: int) -> Image.Image:
    phase = frame / total
    width, height = static.size
    img = static.copy()
    motion = Image.new("RGBA", static.size, (0, 0, 0, 0))
    scroll = phase * width

    draw_premium_stars(motion, stars, phase, scroll=scroll * 0.16)

    center_y = height * 0.52 + math.sin(math.tau * phase) * 8
    start_center = width * 0.79
    for offset in (0, width):
        draw_premium_orbit_system(
            motion,
            width,
            height,
            phase,
            center_x=start_center - scroll + offset,
            center_y=center_y,
            scale=1.02,
        )

    img.alpha_composite(motion)
    return img.convert("RGB")


def encode_video_from_frames(
    frame_dir: Path,
    fps: int,
    frames: int,
    mp4: Path,
    webm: Path | None,
    video_filter: str | None = None,
) -> None:
    mp4.parent.mkdir(parents=True, exist_ok=True)
    base_cmd = [
        "ffmpeg",
        "-y",
        "-hide_banner",
        "-loglevel",
        "warning",
        "-framerate",
        str(fps),
        "-i",
        str(frame_dir / "frame_%04d.png"),
        "-frames:v",
        str(frames),
        "-an",
    ]
    if video_filter:
        base_cmd.extend(["-vf", video_filter])
    base_cmd.extend(
        [
        "-c:v",
        "libx264",
        "-preset",
        "slow",
        "-crf",
        "13",
        "-pix_fmt",
        "yuv420p",
        "-movflags",
        "+faststart",
        str(mp4),
        ]
    )
    subprocess.run(base_cmd, check=True)

    if webm:
        webm.parent.mkdir(parents=True, exist_ok=True)
        webm_cmd = [
            "ffmpeg",
            "-y",
            "-hide_banner",
            "-loglevel",
            "warning",
            "-framerate",
            str(fps),
            "-i",
            str(frame_dir / "frame_%04d.png"),
            "-frames:v",
            str(frames),
            "-an",
        ]
        if video_filter:
            webm_cmd.extend(["-vf", video_filter])
        webm_cmd.extend(
            [
            "-c:v",
            "libvpx-vp9",
            "-b:v",
            "0",
            "-crf",
            "22",
            "-pix_fmt",
            "yuv420p",
            str(webm),
            ]
        )
        subprocess.run(webm_cmd, check=True)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Render the Digital Vision universe motion loop.")
    parser.add_argument("--width", type=int, default=1920)
    parser.add_argument("--height", type=int, default=836)
    parser.add_argument("--visual-width", type=int, default=1920)
    parser.add_argument("--visual-height", type=int, default=1080)
    parser.add_argument("--fps", type=int, default=30)
    parser.add_argument("--duration", type=float, default=10.0)
    parser.add_argument("--mp4", type=Path, default=DEFAULT_OUT)
    parser.add_argument("--webm", type=Path, default=DEFAULT_WEBM)
    parser.add_argument("--poster", type=Path, default=DEFAULT_POSTER)
    parser.add_argument("--visual-mp4", type=Path, default=DEFAULT_VISUAL_OUT)
    parser.add_argument("--visual-webm", type=Path, default=DEFAULT_VISUAL_WEBM)
    parser.add_argument("--visual-poster", type=Path, default=DEFAULT_VISUAL_POSTER)
    parser.add_argument("--skip-full", action="store_true")
    parser.add_argument("--keep-frames", action="store_true")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    if args.width % 2 or args.height % 2 or args.visual_width % 2 or args.visual_height % 2:
        raise SystemExit("Width and height must be even for yuv420p video output.")
    if not shutil.which("ffmpeg"):
        raise SystemExit("ffmpeg is required to encode the video.")

    total_frames = int(args.fps * args.duration)
    static = make_background(args.width, args.height)
    panel = rounded_panel_layer(args.width, args.height)
    stars = make_stars(args.width, args.height, amount=118)
    visual_static = make_premium_visual_background(args.visual_width, args.visual_height)
    visual_stars = make_premium_stars(args.visual_width, args.visual_height, amount=72)

    frame_root = ROOT / ".render-frames" if args.keep_frames else None
    temp_ctx = tempfile.TemporaryDirectory(prefix="digitalvision-universe-") if frame_root is None else None
    frame_dir = Path(temp_ctx.name) if temp_ctx else frame_root
    assert frame_dir is not None
    frame_dir.mkdir(parents=True, exist_ok=True)
    full_frame_dir = frame_dir / "full"
    visual_frame_dir = frame_dir / "visual"
    full_frame_dir.mkdir(parents=True, exist_ok=True)
    visual_frame_dir.mkdir(parents=True, exist_ok=True)

    poster_frame = None
    visual_poster_frame = None
    for index in range(total_frames):
        if not args.skip_full:
            frame = render_frame(static, panel, stars, index, total_frames)
            frame.save(full_frame_dir / f"frame_{index:04d}.png", optimize=False)
            if index == 0:
                poster_frame = frame.copy()
        visual_frame = render_visual_frame(visual_static, visual_stars, index, total_frames)
        visual_frame.save(visual_frame_dir / f"frame_{index:04d}.png", optimize=False)
        if index == 0:
            visual_poster_frame = visual_frame.copy()
        if index % max(1, args.fps) == 0:
            print(f"rendered {index:04d}/{total_frames}", flush=True)

    if not args.skip_full:
        args.poster.parent.mkdir(parents=True, exist_ok=True)
        assert poster_frame is not None
        poster_frame.save(args.poster)
    assert visual_poster_frame is not None
    args.visual_poster.parent.mkdir(parents=True, exist_ok=True)
    visual_poster_frame.save(args.visual_poster)

    if not args.skip_full:
        encode_video_from_frames(full_frame_dir, args.fps, total_frames, args.mp4, args.webm)
    encode_video_from_frames(
        visual_frame_dir,
        args.fps,
        total_frames,
        args.visual_mp4,
        args.visual_webm,
    )
    if not args.skip_full:
        print(f"wrote {args.mp4}")
        print(f"wrote {args.webm}")
        print(f"wrote {args.poster}")
    print(f"wrote {args.visual_mp4}")
    print(f"wrote {args.visual_webm}")
    print(f"wrote {args.visual_poster}")

    if temp_ctx is not None:
        temp_ctx.cleanup()


if __name__ == "__main__":
    main()
