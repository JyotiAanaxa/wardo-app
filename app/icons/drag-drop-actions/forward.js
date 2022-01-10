import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  viewBox="0 0 20 20"
>
<defs>
  <style>
    .a,
    .b {
      fill: #6a60da;
    }
    .a {
      opacity: 0;
    }
  </style>
</defs>
<g transform="translate(0 20) rotate(-90)">
  <rect
    class="a"
    width="20"
    height="20"
    transform="translate(0 20) rotate(-90)"
  />
  <path
    class="b"
    d="M4.833,11.667h9.883L11.692,15.3a.834.834,0,0,0,1.283,1.067l4.167-5a.992.992,0,0,0,.075-.125c0-.042.042-.067.058-.108a.8.8,0,0,0,0-.6c0-.042-.042-.067-.058-.108a.992.992,0,0,0-.075-.125l-4.167-5a.834.834,0,1,0-1.283,1.067L14.717,10H4.833a.833.833,0,1,0,0,1.667Z"
    transform="translate(-0.667 -0.833)"
  />
</g>
</svg>
`;

export const ForwardIcon = () => <SvgCss xml={xml} />;
