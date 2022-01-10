import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="46" viewBox="0 0 48 46">
  <g id="Instagram_icon" data-name="Instagram icon" transform="translate(-203 -306)">
    <g id="Rectangle_2454" data-name="Rectangle 2454" transform="translate(203 306)" fill="none" stroke="#6a60da" stroke-width="1">
      <rect width="48" height="46" rx="16" stroke="none"/>
      <rect x="0.5" y="0.5" width="47" height="45" rx="15.5" fill="none"/>
    </g>
    <g id="instagram-fill" transform="translate(216 318)">
      <path id="Path_5622" data-name="Path 5622" d="M0,0H22V22H0Z" fill="none"/>
      <path id="Path_5623" data-name="Path 5623" d="M11,2c2.445,0,2.75.009,3.71.054a6.63,6.63,0,0,1,2.185.418A4.388,4.388,0,0,1,18.49,3.51,4.417,4.417,0,0,1,19.528,5.1a6.649,6.649,0,0,1,.418,2.185C19.988,8.25,20,8.555,20,11s-.009,2.75-.054,3.71a6.654,6.654,0,0,1-.419,2.185A4.595,4.595,0,0,1,16.9,19.527a6.649,6.649,0,0,1-2.185.419C13.75,19.988,13.445,20,11,20s-2.75-.009-3.71-.054A6.654,6.654,0,0,1,5.1,19.527,4.595,4.595,0,0,1,2.473,16.9a6.625,6.625,0,0,1-.419-2.185C2.012,13.75,2,13.445,2,11s.009-2.75.054-3.71A6.625,6.625,0,0,1,2.472,5.1,4.392,4.392,0,0,1,3.51,3.51,4.407,4.407,0,0,1,5.1,2.473,6.625,6.625,0,0,1,7.29,2.054C8.25,2.012,8.555,2,11,2Zm0,4.5A4.5,4.5,0,1,0,15.5,11,4.5,4.5,0,0,0,11,6.5Zm5.85-.225A1.125,1.125,0,1,0,15.725,7.4,1.125,1.125,0,0,0,16.85,6.275ZM11,8.3A2.7,2.7,0,1,1,8.3,11,2.7,2.7,0,0,1,11,8.3Z" fill="#6a60da"/>
    </g>
  </g>
</svg>
`;

export const InstagramIcon = () => <SvgCss xml={xml} />;