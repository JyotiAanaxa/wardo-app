import * as React from 'react';
import { SvgCss } from 'react-native-svg';

export const RemoveBadgeItemIcon = ({ height = 23, width = 23 }) => <SvgCss xml={`
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="${width}"
  height="${height}"
  viewBox="0 0 23 23"
>
  <defs>
    <style>
      .a,
      .b {
        fill: #80838c;
      }
      .a {
        opacity: 0;
      }
    </style>
  </defs>
  <g transform="translate(-0.766 -0.297)">
    <g transform="translate(0.766 0.766)">
      <rect
        class="a"
        width="23"
        height="23"
        transform="translate(23 22.531) rotate(180)"
      />
      <path
        class="b"
        d="M13.449,12.032l4.323-4.313a1.009,1.009,0,1,0-1.427-1.427l-4.313,4.323L7.719,6.292A1.009,1.009,0,0,0,6.292,7.719l4.323,4.313L6.292,16.344a1.009,1.009,0,1,0,1.427,1.427l4.313-4.323,4.313,4.323a1.009,1.009,0,1,0,1.427-1.427Z"
        transform="translate(-0.766 -0.766)"
      />
    </g>
  </g>
</svg>
`} />;
