import * as React from "react"
import { SvgCss } from 'react-native-svg';

export const xml = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="12"
  viewBox="0 0 12 12"
>
<defs>
  <style>
    .a {
      opacity: 0;
    }
  </style>
</defs>
<g transform="translate(-0.045 -0.045)">
  <rect class="a" width="12" height="12" transform="translate(0.045 0.045)" />
  <path
    fill="#1a1a1a"
    d="M6.951,12.023a.5.5,0,0,1-.368-.161l-2.448-2.6a.5.5,0,1,1,.735-.69l2.075,2.211,4.236-4.634a.5.5,0,1,1,.746.675l-4.6,5.037a.5.5,0,0,1-.368.166Z"
    transform="translate(-1.984 -2.956)"
  />
</g>
</svg>
`;

export const DoneIcon = () => <SvgCss xml={xml} />;
