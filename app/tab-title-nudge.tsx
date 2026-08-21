"use client";

import { useEffect } from "react";

const AWAY_TITLE = "Deine Vision wartet...";

export function TabTitleNudge() {
  useEffect(() => {
    const originalTitle = document.title;

    const handleVisibilityChange = () => {
      document.title = document.hidden ? AWAY_TITLE : originalTitle;
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.title = originalTitle;
    };
  }, []);

  return null;
}
