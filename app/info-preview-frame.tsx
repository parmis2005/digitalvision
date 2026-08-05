"use client";

import { useCallback } from "react";

type InfoPreviewFrameProps = {
  className: string;
  hideHeroEyebrow?: boolean;
  src: string;
  title: string;
};

type InfoPreviewOptions = {
  hideHeroEyebrow?: boolean;
};

type PreviewWindow = Window & {
  __digitalVisionInfoBackFrame?: number;
  __digitalVisionInfoBackObserver?: MutationObserver;
  __digitalVisionInfoBackRetry?: number;
};

const backLinkStyles = `
  .digital-vision-info-back-link {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    width: fit-content;
    margin: 0 0 18px;
    color: rgba(155, 228, 255, 0.78);
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(0.92rem, 1.15vw, 1.08rem);
    font-weight: 700;
    line-height: 1;
    text-decoration: none;
    text-shadow: 0 0 12px rgba(142, 221, 255, 0.16);
    transition: color 160ms ease, transform 160ms ease;
  }

  .digital-vision-info-back-link svg {
    width: 18px;
    height: 18px;
    flex: none;
    stroke-width: 2.1;
  }

  .digital-vision-info-back-link:hover {
    color: #f8fbff;
    transform: translateX(-3px);
  }

  .digital-vision-info-back-link:focus-visible {
    outline: 2px solid rgba(142, 221, 255, 0.88);
    outline-offset: 5px;
  }

  .digital-vision-light-cta {
    border-color: rgba(248, 251, 255, 0.92) !important;
    background: linear-gradient(135deg, #ffffff 0%, #e6f8ff 64%, #ffdca5 100%) !important;
    color: #05091d !important;
    box-shadow:
      0 0 0 1px rgba(255, 255, 255, 0.1),
      0 18px 34px rgba(255, 199, 116, 0.14) !important;
  }

  .digital-vision-light-cta svg {
    color: currentColor !important;
    stroke: currentColor !important;
  }

  @media (max-width: 1100px) {
    .digital-vision-info-back-link {
      justify-self: center;
      margin-inline: auto;
      font-size: 0.9rem;
    }
  }
`;

function normalizeButtonText(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

function highlightProjectRequestCtas(document: Document) {
  document.querySelectorAll("a, button").forEach((element) => {
    if (normalizeButtonText(element.textContent || "") === "Projekt anfragen") {
      element.classList.add("digital-vision-light-cta");
    }
  });
}

function addBackLink(document: Document, { hideHeroEyebrow = false }: InfoPreviewOptions = {}) {
  if (!document.getElementById("digital-vision-info-back-link-style")) {
    const style = document.createElement("style");
    style.id = "digital-vision-info-back-link-style";
    style.textContent = backLinkStyles;
    document.head.appendChild(style);
  }

  highlightProjectRequestCtas(document);

  const heroStatement = document.querySelector(".hero-statement");

  if (!heroStatement) {
    return;
  }

  if (hideHeroEyebrow) {
    const eyebrow = Array.from(heroStatement.children).find((child) =>
      child.classList.contains("eyebrow"),
    );
    eyebrow?.remove();
  }

  if (document.querySelector(".digital-vision-info-back-link")) {
    return;
  }

  const heading = heroStatement.querySelector("h1");

  if (!heading) {
    return;
  }

  const link = document.createElement("a");
  link.className = "digital-vision-info-back-link";
  link.href = "/";
  link.target = "_top";
  link.setAttribute("aria-label", "Zurück zu Digital Vision");

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.setAttribute("aria-hidden", "true");

  const pathOne = document.createElementNS("http://www.w3.org/2000/svg", "path");
  pathOne.setAttribute("d", "m12 19-7-7 7-7");

  const pathTwo = document.createElementNS("http://www.w3.org/2000/svg", "path");
  pathTwo.setAttribute("d", "M19 12H5");

  svg.append(pathOne, pathTwo);

  const label = document.createElement("span");
  label.textContent = "Zurück zu Digital Vision";

  link.append(svg, label);
  heroStatement.insertBefore(link, heading);
}

function scheduleBackLinkCheck(document: Document, options: InfoPreviewOptions) {
  const previewWindow = document.defaultView as PreviewWindow | null;

  if (!previewWindow) {
    addBackLink(document, options);
    return;
  }

  if (previewWindow.__digitalVisionInfoBackFrame) {
    previewWindow.cancelAnimationFrame(previewWindow.__digitalVisionInfoBackFrame);
  }

  previewWindow.__digitalVisionInfoBackFrame = previewWindow.requestAnimationFrame(() => {
    previewWindow.__digitalVisionInfoBackFrame = undefined;
    addBackLink(document, options);
  });
}

function installBackLink(document: Document, options: InfoPreviewOptions) {
  addBackLink(document, options);

  const previewWindow = document.defaultView as PreviewWindow | null;

  if (!previewWindow) {
    return;
  }

  if (!previewWindow.__digitalVisionInfoBackObserver) {
    previewWindow.__digitalVisionInfoBackObserver = new MutationObserver(() => {
      scheduleBackLinkCheck(document, options);
    });

    previewWindow.__digitalVisionInfoBackObserver.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  if (previewWindow.__digitalVisionInfoBackRetry) {
    previewWindow.clearInterval(previewWindow.__digitalVisionInfoBackRetry);
  }

  let retryCount = 0;
  previewWindow.__digitalVisionInfoBackRetry = previewWindow.setInterval(() => {
    retryCount += 1;
    addBackLink(document, options);

    if (retryCount >= 20) {
      if (previewWindow.__digitalVisionInfoBackRetry) {
        previewWindow.clearInterval(previewWindow.__digitalVisionInfoBackRetry);
        previewWindow.__digitalVisionInfoBackRetry = undefined;
      }
    }
  }, 250);
}

export function InfoPreviewFrame({
  className,
  hideHeroEyebrow = false,
  src,
  title,
}: InfoPreviewFrameProps) {
  const handleLoad = useCallback((event: React.SyntheticEvent<HTMLIFrameElement>) => {
    const previewDocument = event.currentTarget.contentDocument;

    if (previewDocument) {
      installBackLink(previewDocument, { hideHeroEyebrow });
    }
  }, [hideHeroEyebrow]);

  return <iframe className={className} src={src} title={title} onLoad={handleLoad} />;
}
