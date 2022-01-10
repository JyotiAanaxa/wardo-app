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
  <g transform="translate(19.55 0.45) rotate(90)">
    <g transform="translate(-0.45 -0.45)">
      <rect
        class="a"
        width="20"
        height="20"
        transform="translate(20) rotate(90)"
      />
      <path
        class="b"
        d="M.8,4.8h9.479l-2.9-3.485A.8.8,0,0,1,8.608.289l4,4.8a.951.951,0,0,1,.072.12c0,.04.04.064.056.1a.768.768,0,0,1,0,.575c0,.04-.04.064-.056.1a.951.951,0,0,1-.072.12l-4,4.8A.8.8,0,1,1,7.377,9.879l2.9-3.485H.8a.8.8,0,0,1,0-1.6Z"
        transform="translate(3.606 4.404)"
      />
    </g>
  </g>
</svg>
`;

export const BackwardIcon = () => <SvgCss xml={xml} />;
