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
  <g transform="translate(-0.4 -0.4)">
    <rect
      class="a"
      width="20"
      height="20"
      transform="translate(20.4 20.4) rotate(180)"
    />
    <path
      class="b"
      d="M5.611,18.067h10.4l-1.127,1.118a.87.87,0,1,0,1.231,1.231l2.6-2.6a.867.867,0,0,0,0-1.231l-2.6-2.6a.87.87,0,1,0-1.231,1.231l1.127,1.118H5.611a1.352,1.352,0,0,1-1.378-1.326V12.867a.867.867,0,1,0-1.733,0v2.141a3.085,3.085,0,0,0,3.111,3.059Z"
      transform="translate(-0.333 -1.6)"
    />
    <path
      class="b"
      d="M5.351,8.681A.87.87,0,1,0,6.581,7.451L5.455,6.333h10.4a1.352,1.352,0,0,1,1.378,1.326V9.8a.867.867,0,0,0,1.733,0V7.659A3.085,3.085,0,0,0,15.855,4.6H5.455L6.581,3.481A.87.87,0,1,0,5.351,2.251l-2.6,2.6a.867.867,0,0,0,0,1.231Z"
      transform="translate(-0.332 -0.266)"
    />
  </g>
</svg>
`;

export const FlipItemIcon = () => <SvgCss xml={xml} />;
