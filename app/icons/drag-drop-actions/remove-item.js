import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="18"
  height="18"
  viewBox="0 0 18 18"
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
  <g transform="translate(-0.231 -0.231)">
    <g transform="translate(-0.097 -0.097)">
      <rect
        class="a"
        width="18"
        height="18"
        transform="translate(18.328 18.328) rotate(180)"
      />
      <path
        class="b"
        d="M11.708,10.622l3.313-3.305a.774.774,0,1,0-1.094-1.094L10.622,9.536,7.316,6.223A.774.774,0,0,0,6.222,7.317l3.313,3.305L6.222,13.928a.774.774,0,1,0,1.094,1.094l3.305-3.313,3.305,3.313a.774.774,0,1,0,1.094-1.094Z"
        transform="translate(-1.294 -1.294)"
      />
    </g>
  </g>
</svg>
`;

export const RemoveItemIcon = () => <SvgCss xml={xml} />;
