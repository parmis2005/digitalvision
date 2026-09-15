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

    // Some mobile browsers ignore the `muted` JSX attribute on hydration,
    // which silently blocks autoplay, so set it on the element directly.
    video.muted = true;

    let introSkipped = false;

    const skipIntroOnce = () => {
      if (introSkipped) {
        return;
      }
      introSkipped = true;
      if (video.currentTime < INTRO_SKIP_SECONDS) {
        video.currentTime = INTRO_SKIP_SECONDS;
      }
    };

    const attemptPlay = () => {
      video.play().catch(() => {});
    };

    const handleLoadedMetadata = () => {
      skipIntroOnce();
      attemptPlay();
    };

    const handleCanPlay = () => {
      attemptPlay();
    };

    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - LOOP_BUFFER_SECONDS) {
        video.currentTime = INTRO_SKIP_SECONDS;
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("timeupdate", handleTimeUpdate);

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="hero-visual-video"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/videos/pinload-2-hero-poster.jpg"
    >
      <source src="/videos/PinLoad%202.mp4" type="video/mp4" />
    </video>
  );
}
