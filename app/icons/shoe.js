import * as React from "react"
import { SvgCss } from 'react-native-svg';

export const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="41.979" height="36.981" viewBox="0 0 41.979 36.981">
<defs>
  <style>
    .cls-1 {
      fill: #fedb63;
    }

    .cls-2 {
      fill: none;
      stroke: #6a60da;
      stroke-width: 1.3px;
    }
  </style>
</defs>
<g id="Shoe" transform="translate(-206.672 -40.019)">
  <ellipse id="Ellipse_78" data-name="Ellipse 78" class="cls-1" cx="12.844" cy="12.844" rx="12.844" ry="12.844" transform="translate(206.672 58.836) rotate(-45)"/>
  <g id="shoe-2" data-name="shoe" transform="matrix(0.966, 0.259, -0.259, 0.966, 218.766, 40.82)">
    <path id="Path_2239" data-name="Path 2239" class="cls-2" d="M373.486,218.924h0c-.331.093-3.693.958-3.918,9.971a.876.876,0,0,1-.875.856h-.354a.874.874,0,0,1-.875-.863,85.913,85.913,0,0,0-2.316-14.623,5.732,5.732,0,0,0,2.954,3.044c.921.736,3.97.812,5.017,1.537C373.226,218.871,373.486,218.924,373.486,218.924Z" transform="translate(-364.872 -203.675)"/>
    <path id="Path_2243" data-name="Path 2243" class="cls-2" d="M4,34.327a1.739,1.739,0,0,1,2.841.3C8.614,37.862,14.771,47.679,22.824,47a7.608,7.608,0,0,1,3.2.389C30,49.026,30.4,51.97,29.9,54.027c-.222,1.212-.578,5.57-2.794,5.68H17.631c-2.64-.536-2.471-4.25-3-5.356A12.3,12.3,0,0,0,5.8,48.138C-.344,47.217-2.606,41.942,4,34.327Z" transform="translate(0 -33.724)"/>
  </g>
</g>
</svg>
`;

export default () => <SvgCss xml={xml} />;