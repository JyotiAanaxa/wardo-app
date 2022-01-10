import * as React from "react"
import { SvgCss } from 'react-native-svg';
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { heightIntoDP } from "../utils/app-util";

export const xml = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${widthPercentageToDP('83%')}" height="${heightPercentageToDP('10%')}" viewBox="0 0 292 70">
  <defs>
    <style>
      .cls-1, .cls-3, .cls-8 {
        fill: #6a60da;
      }

      .cls-10, .cls-2 {
        fill: none;
      }

      .cls-2 {
        stroke: #6a60da;
        stroke-dasharray: 7;
      }

      .cls-3 {
        font-size: 12.5px;
        font-family: AvenirLTPro-Black, Avenir LT Pro;
        font-weight: 800;
      }

      .cls-4 {
        clip-path: url(#clip-path);
      }

      .cls-5 {
        fill: #e5e0ff;
        opacity: 0.7;
      }

      .cls-6 {
        fill: #fff;
      }

      .cls-7 {
        fill: #c0b9f4;
      }

      .cls-8 {
        opacity: 0;
      }

      .cls-9 {
        stroke: none;
      }
    </style>
    <clipPath id="clip-path">
      <rect id="Rectangle_2252" data-name="Rectangle 2252" class="cls-1" width="42" height="42" rx="12" transform="translate(62 853)"/>
    </clipPath>
  </defs>
  <g id="Upload_Resume" data-name="Upload Resume" transform="translate(-42 -991)">
    <g id="Rectangle_2086" data-name="Rectangle 2086" class="cls-2" transform="translate(42 991)">
      <rect class="cls-9" width="292" height="70" rx="18"/>
      <rect class="cls-10" x="0.5" y="0.5" width="291" height="69" rx="17.5"/>
    </g>
    <text id="Upload_Resume-2" data-name="Upload Resume" class="cls-3" transform="translate(118 1031)"><tspan x="0" y="0">Upload Resume</tspan></text>
    <g id="Resume" transform="translate(-15709 -17426)">
      <rect id="Rectangle_2251" data-name="Rectangle 2251" class="cls-1" width="42" height="42" rx="12" transform="translate(15765 18431)"/>
      <g id="Mask_Group_33" data-name="Mask Group 33" class="cls-4" transform="translate(15703 17578)">
        <g id="Layer_2" transform="translate(-387.5 103)">
          <path id="Path_5265" data-name="Path 5265" class="cls-5" d="M470,766a17.032,17.032,0,0,0,6-9l34.83,11.73-14.34,22.96-13.5,4.58Z" transform="translate(-2 1)"/>
          <path id="Path_5266" data-name="Path 5266" class="cls-6" d="M454.5,791.5s8-11,11-30l41,12-18,34-30-3Z"/>
        </g>
      </g>
      <g id="Group_3433" data-name="Group 3433" transform="translate(6086.807 -3810.179) rotate(17)">
        <rect id="Rectangle_2253" data-name="Rectangle 2253" class="cls-1" width="15" height="1.8" transform="translate(15783.154 18452.896)"/>
        <rect id="Rectangle_2254" data-name="Rectangle 2254" class="cls-7" width="15" height="1.8" transform="translate(15783.154 18457.896)"/>
        <rect id="Rectangle_2255" data-name="Rectangle 2255" class="cls-7" width="10" height="1.8" transform="translate(15783.154 18462.896)"/>
      </g>
    </g>
    <g id="Layer_2-2" data-name="Layer 2" transform="translate(290 1014)">
      <g id="cloud-upload">
        <rect id="Rectangle_3330" data-name="Rectangle 3330" class="cls-8" width="24" height="24"/>
        <path id="Path_7138" data-name="Path 7138" class="cls-1" d="M12.71,11.29a1,1,0,0,0-1.4,0l-3,2.9a1,1,0,1,0,1.38,1.44L11,14.36V20a1,1,0,0,0,2,0V14.41l1.29,1.3a1,1,0,1,0,1.42-1.42Z"/>
        <path id="Path_7139" data-name="Path 7139" class="cls-1" d="M17.67,7A6,6,0,0,0,6.33,7a5,5,0,0,0-3.08,8.27A1,1,0,1,0,4.75,14,3,3,0,0,1,7,9h.1a1,1,0,0,0,1-.8,4,4,0,0,1,7.84,0,1,1,0,0,0,1,.8H17a3,3,0,0,1,2.25,5,1,1,0,1,0,1.5,1.33A5,5,0,0,0,17.67,7Z"/>
      </g>
    </g>
  </g>
</svg>
`;

export const UploadIcon = () => <SvgCss xml={xml} />;
