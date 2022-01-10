import * as React from 'react';
import {SvgCss} from 'react-native-svg';

const xml = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="63.144"
  height="49"
  viewBox="0 0 63.144 49"
>
  <defs>
    <style>
      .a {
        fill: url(#a);
      }
      .b {
        fill: url(#b);
      }
      .c {
        fill: url(#c);
      }
      .d {
        opacity: 0.15;
      }
      .e {
        fill: url(#e);
      }
      .f {
        fill: url(#f);
      }
    </style>
    <linearGradient
      id="a"
      y1="1"
      x2="1"
      y2="1"
      gradientUnits="objectBoundingBox"
    >
      <stop offset="0" stop-color="#ef709d" />
      <stop offset="0.373" stop-color="#ef709d" />
      <stop offset="0.598" stop-color="#f06093" />
      <stop offset="0.783" stop-color="#f14f88" />
      <stop offset="0.945" stop-color="#f33679" />
      <stop offset="1" stop-color="#f21a67" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="0.487"
      x2="0.491"
      y2="1.217"
      gradientUnits="objectBoundingBox"
    >
      <stop offset="0" stop-color="#ef709d" />
      <stop offset="1" stop-color="#f00f5f" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="0.5"
      y1="0.796"
      x2="0.5"
      gradientUnits="objectBoundingBox"
    >
      <stop offset="0" stop-color="#ef709d" />
      <stop offset="1" stop-color="#fc0b61" />
    </linearGradient>
    <linearGradient
      id="e"
      x1="0.5"
      y1="1.667"
      x2="0.5"
      y2="0.652"
      gradientUnits="objectBoundingBox"
    >
      <stop offset="0" stop-color="#f5f6ed" />
      <stop offset="0.042" stop-color="#f6f7ee" />
      <stop offset="0.529" stop-color="#fdfdfb" />
      <stop offset="1" stop-color="#fff" />
    </linearGradient>
    <linearGradient
      id="f"
      x1="-0.139"
      y1="1.423"
      x2="0.693"
      y2="0.483"
      gradientUnits="objectBoundingBox"
    >
      <stop offset="0" stop-color="#6a2000" stop-opacity="0" />
      <stop offset="1" stop-color="#792d00" stop-opacity="0.149" />
    </linearGradient>
  </defs>
  <g transform="translate(0.033)">
    <path
      class="a"
      d="M59.175,55.12H3.9A3.935,3.935,0,0,1,.032,50.465L7.039,12h49l7.007,38.465A3.935,3.935,0,0,1,59.175,55.12Z"
      transform="translate(0 -6.12)"
    />
    <path
      class="b"
      d="M63.4,5.88a5.9,5.9,0,0,1-5.88,5.88H20.28A5.9,5.9,0,0,1,14.4,5.88h0A5.9,5.9,0,0,1,20.28,0H57.52A5.9,5.9,0,0,1,63.4,5.88Z"
      transform="translate(-7.361)"
    />
    <circle
      class="c"
      cx="1.96"
      cy="1.96"
      r="1.96"
      transform="translate(42.319 21.56)"
    />
    <path
      class="d"
      d="M50.12,67.64A13.76,13.76,0,0,1,36.4,53.92V50.98a.98.98,0,1,1,1.96,0v2.94a11.76,11.76,0,0,0,23.52,0V50.98a.98.98,0,1,1,1.96,0v2.94A13.729,13.729,0,0,1,50.12,67.64Z"
      transform="translate(-18.581 -25.5)"
    />
    <circle
      class="c"
      cx="1.96"
      cy="1.96"
      r="1.96"
      transform="translate(16.84 21.56)"
    />
    <path
      class="e"
      d="M50.12,65.64A13.76,13.76,0,0,1,36.4,51.92V48.98a.98.98,0,1,1,1.96,0v2.94a11.76,11.76,0,0,0,23.52,0V48.98a.98.98,0,1,1,1.96,0v2.94A13.729,13.729,0,0,1,50.12,65.64Z"
      transform="translate(-18.581 -24.48)"
    />
    <path
      class="f"
      d="M115.547,55.12H112.8a3.935,3.935,0,0,0,3.871-4.655l-6.174-34.1c.1-.049.147-.147.2-.2A5.85,5.85,0,0,0,112.411,12l7.007,38.465A3.935,3.935,0,0,1,115.547,55.12Z"
      transform="translate(-56.372 -6.12)"
    />
  </g>
</svg>
`;

export const OutfitShoppingIcon = () => <SvgCss xml={xml} />;
