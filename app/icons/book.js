import * as React from 'react';
import {SvgCss} from 'react-native-svg';

const xml = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
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
  <g transform="translate(0.053 0.053)">
    <g transform="translate(0.166 0.166)">
      <rect
        class="a"
        width="24"
        height="24"
        transform="translate(-0.219 -0.219)"
      />
      <path
        class="b"
        d="M18.971,3H6.994A2.994,2.994,0,0,0,4,5.994V17.971a2.994,2.994,0,0,0,2.994,2.994H18.971a1,1,0,0,0,1-1V4A1,1,0,0,0,18.971,3ZM6.994,5H17.973v9.981H6.994a2.994,2.994,0,0,0-1,.18V5.994A1,1,0,0,1,6.994,5Zm0,13.973a1,1,0,1,1,0-2H17.973v2Z"
        transform="translate(-0.203 -0.201)"
      />
    </g>
  </g>
</svg>
`;

export const BookIcon = () => <SvgCss xml={xml} />;
