"use client";

import { useEffect } from "react";

type TabTitleNudgeProps = {
  awayTitle: string;
};

export function TabTitleNudge({ awayTitle }: TabTitleNudgeProps) {
  useEffect(() => {
    const originalTitle = document.title;

    const handleVisibilityChange = () => {
      document.title = document.hidden ? awayTitle : originalTitle;
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.title = originalTitle;
    };
  }, [awayTitle]);

  return null;
}
