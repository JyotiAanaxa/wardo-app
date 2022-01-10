import * as React from "react"
import { SvgCss } from 'react-native-svg';

export const xml = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="126.824" height="108.994" viewBox="0 0 126.824 108.994">
  <defs>
    <filter id="check" x="0" y="0" width="126.824" height="108.994" filterUnits="userSpaceOnUse">
      <feOffset dy="4" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="10" result="blur"/>
      <feFlood flood-opacity="0.141"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Request_Sent" data-name="Request Sent" transform="translate(-124.089 -263.158)">
    <circle id="Ellipse_1402" data-name="Ellipse 1402" cx="49" cy="49" r="49" transform="translate(139 266)" fill="#f0efff"/>
    <g transform="matrix(1, 0, 0, 1, 124.09, 263.16)" filter="url(#check)">
      <path id="check-2" data-name="check" d="M52.439,6l-33.3,33.3L4,24.165" transform="translate(35.19 29.19)" fill="none" stroke="#6a60da" stroke-linecap="round" stroke-linejoin="round" stroke-width="13"/>
    </g>
  </g>
</svg>
`;

export const RequestSentIcon = () => <SvgCss xml={xml} />;
