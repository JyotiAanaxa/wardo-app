import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="156" height="49" viewBox="0 0 156 49">
  <defs>
    <style>
      .cls-1 {
        fill: #f0efff;
      }

      .cls-2, .cls-3 {
        fill: #6a60da;
      }

      .cls-2 {
        font-size: 14px;
        font-family: AvenirLTPro-Roman, Avenir LT Pro;
      }

      .cls-4, .cls-5 {
        fill: #fff;
      }

      .cls-4 {
        opacity: 0;
      }

      .cls-6 {
        filter: url(#Path_5755);
      }
    </style>
    <filter id="Path_5755" x="0" y="2" width="47" height="47" filterUnits="userSpaceOnUse">
      <feOffset dy="4" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feFlood flood-color="#382d7c" flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="View_Templates" data-name="View Templates" transform="translate(-109 -551)">
    <rect id="Rectangle_2739" data-name="Rectangle 2739" class="cls-1" width="155" height="43" rx="10" transform="translate(110 551)"/>
    <text id="View_Templates-2" data-name="View Templates" class="cls-2" transform="translate(153.004 577)"><tspan x="0" y="0">View Templates</tspan></text>
    <g class="cls-6" transform="matrix(1, 0, 0, 1, 109, 551)">
      <path id="Path_5755-2" data-name="Path 5755" class="cls-3" d="M5.1,0h6.8A5.1,5.1,0,0,1,17,5.1v6.8A5.1,5.1,0,0,1,11.9,17H5.1A5.1,5.1,0,0,1,0,11.9V5.1A5.1,5.1,0,0,1,5.1,0Z" transform="translate(15 13)"/>
    </g>
    <g id="arrow-ios-back" transform="translate(126.99 578.326) rotate(-90)">
      <rect id="Rectangle_1" data-name="Rectangle 1" class="cls-4" width="12" height="12" transform="translate(11.826 -0.491) rotate(90)"/>
      <path id="Path_1" data-name="Path 1" class="cls-5" d="M10.7,11.482a.463.463,0,0,1-.361-.171L8.1,8.532a.463.463,0,0,1,0-.588l2.315-2.778a.464.464,0,1,1,.713.593L9.056,8.241l2,2.482a.463.463,0,0,1-.361.759Z" transform="translate(-4.103 -2.653)"/>
    </g>
  </g>
</svg>
`;

export const ViewTemplateIcon = () => <SvgCss xml={xml} />;