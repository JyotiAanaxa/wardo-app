import * as React from "react"
import { SvgCss } from 'react-native-svg';

export const xml = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="42" height="42" viewBox="0 0 42 42">
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectangle_2252" data-name="Rectangle 2252" width="42" height="42" rx="12" transform="translate(62 853)" fill="#6a60da"/>
    </clipPath>
  </defs>
  <g id="Resume_icon" data-name="Resume icon" transform="translate(-15765 -18431)">
    <rect id="Rectangle_2251" data-name="Rectangle 2251" width="42" height="42" rx="12" transform="translate(15765 18431)" fill="#6a60da"/>
    <g id="Mask_Group_33" data-name="Mask Group 33" transform="translate(15703 17578)" clip-path="url(#clip-path)">
      <g id="Layer_2" transform="translate(-387.5 103)">
        <path id="Path_5265" data-name="Path 5265" d="M470,766a17.032,17.032,0,0,0,6-9l34.83,11.73-14.34,22.96-13.5,4.58Z" transform="translate(-2 1)" fill="#e5e0ff" opacity="0.7"/>
        <path id="Path_5266" data-name="Path 5266" d="M454.5,791.5s8-11,11-30l41,12-18,34-30-3Z" fill="#fff"/>
      </g>
    </g>
    <g id="Group_3433" data-name="Group 3433" transform="translate(6086.807 -3810.179) rotate(17)">
      <rect id="Rectangle_2253" data-name="Rectangle 2253" width="15" height="1.8" transform="translate(15783.154 18452.896)" fill="#6a60da"/>
      <rect id="Rectangle_2254" data-name="Rectangle 2254" width="15" height="1.8" transform="translate(15783.154 18457.896)" fill="#c0b9f4"/>
      <rect id="Rectangle_2255" data-name="Rectangle 2255" width="10" height="1.8" transform="translate(15783.154 18462.896)" fill="#c0b9f4"/>
    </g>
  </g>
</svg>
`;

export const ResumeIcon = () => <SvgCss xml={xml} />;
