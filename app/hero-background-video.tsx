"use client";

import { useEffect, useRef } from "react";

const INTRO_SKIP_SECONDS = 1.4;
const LOOP_BUFFER_SECONDS = 0.15;

export function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const seekPastIntro = () => {
      if (video.currentTime < INTRO_SKIP_SECONDS) {
        video.currentTime = INTRO_SKIP_SECONDS;
      }
    };

    const handleLoadedMetadata = () => {
      seekPastIntro();
    };

    const handleSeeked = () => {
      video.play().catch(() => {});
    };

    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - LOOP_BUFFER_SECONDS) {
        video.currentTime = INTRO_SKIP_SECONDS;
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("seeked", handleSeeked);
    video.addEventListener("timeupdate", handleTimeUpdate);

    if (video.readyState >= 1) {
      seekPastIntro();
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("seeked", handleSeeked);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="hero-visual-video"
      muted
      playsInline
      preload="auto"
      poster="/videos/pinload-2-hero-poster.jpg"
    >
      <source src="/videos/PinLoad%202.mp4" type="video/mp4" />
    </video>
  );
}
