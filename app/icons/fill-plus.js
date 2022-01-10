import * as React from "react"
import { SvgCss } from 'react-native-svg';

export const FillPlusIcon = ({ height = 58, width = 58 }) => <SvgCss xml={`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${width}" height="${height}" viewBox="0 0 47 47">
  <defs>
    <style>
      .cls-1 {
        fill: #6a60da;
      }

      .cls-2, .cls-3 {
        fill: #fff;
      }

      .cls-2 {
        opacity: 0;
      }

      .cls-4 {
        filter: url(#Path_5755);
      }
    </style>
    <filter id="Path_5755" x="0" y="0" width="47" height="47" filterUnits="userSpaceOnUse">
      <feOffset dy="4" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feFlood flood-color="#382d7c" flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Plus_Icon" data-name="Plus Icon" transform="translate(-73 -503)">
    <g class="cls-4" transform="matrix(1, 0, 0, 1, 73, 503)">
      <path id="Path_5755-2" data-name="Path 5755" class="cls-1" d="M5.1,0h6.8A5.1,5.1,0,0,1,17,5.1v6.8A5.1,5.1,0,0,1,11.9,17H5.1A5.1,5.1,0,0,1,0,11.9V5.1A5.1,5.1,0,0,1,5.1,0Z" transform="translate(15 11)"/>
    </g>
    <g id="Layer_2" data-name="Layer 2" transform="translate(90.5 516.503)">
      <g id="plus" transform="translate(0 0)">
        <rect id="Rectangle_2652" data-name="Rectangle 2652" class="cls-2" width="12" height="12" transform="translate(12 12) rotate(180)"/>
        <path id="Path_6050" data-name="Path 6050" class="cls-3" d="M11.86,7.668H8.716V4.524a.524.524,0,0,0-1.048,0V7.668H4.524a.524.524,0,0,0,0,1.048H7.668V11.86a.524.524,0,1,0,1.048,0V8.716H11.86a.524.524,0,1,0,0-1.048Z" transform="translate(-2.192 -2.192)"/>
      </g>
    </g>
  </g>
</svg>
`} />;
