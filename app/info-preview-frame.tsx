"use client";

import { useCallback } from "react";

type InfoPreviewFrameProps = {
  className: string;
  src: string;
  title: string;
};

const backLinkStyles = `
  .digital-vision-info-back-link {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    width: fit-content;
    margin: 0 0 clamp(18px, 2.2vw, 26px);
    color: #8edfff;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(1.28rem, 2.3vw, 2.05rem);
    font-weight: 800;
    line-height: 1;
    text-decoration: none;
    text-shadow: 0 0 18px rgba(142, 221, 255, 0.22);
    transition: color 160ms ease, transform 160ms ease;
  }

  .digital-vision-info-back-link svg {
    width: clamp(24px, 2.35vw, 32px);
    height: clamp(24px, 2.35vw, 32px);
    flex: none;
    stroke-width: 2.05;
  }

  .digital-vision-info-back-link:hover {
    color: #f8fbff;
    transform: translateX(-3px);
  }

  .digital-vision-info-back-link:focus-visible {
    outline: 2px solid rgba(142, 221, 255, 0.88);
    outline-offset: 5px;
  }

  @media (max-width: 1100px) {
    .digital-vision-info-back-link {
      justify-self: center;
      margin-inline: auto;
      font-size: clamp(1.12rem, 4.9vw, 1.55rem);
    }
  }
`;

function addBackLink(document: Document) {
  if (!document.getElementById("digital-vision-info-back-link-style")) {
    const style = document.createElement("style");
    style.id = "digital-vision-info-back-link-style";
    style.textContent = backLinkStyles;
    document.head.appendChild(style);
  }

  if (document.querySelector(".digital-vision-info-back-link")) {
    return;
  }

  const heroStatement = document.querySelector(".hero-statement");
  const heading = heroStatement?.querySelector("h1");

  if (!heroStatement || !heading) {
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

export function InfoPreviewFrame({ className, src, title }: InfoPreviewFrameProps) {
  const handleLoad = useCallback((event: React.SyntheticEvent<HTMLIFrameElement>) => {
    const previewDocument = event.currentTarget.contentDocument;

    if (previewDocument) {
      addBackLink(previewDocument);
    }
  }, []);

  return <iframe className={className} src={src} title={title} onLoad={handleLoad} />;
}
