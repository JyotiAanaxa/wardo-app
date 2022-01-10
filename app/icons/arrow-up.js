import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <g id="arrow_upward" data-name="arrow upward" transform="translate(23.477 0.208) rotate(90)">
    <rect id="Rectangle_1" data-name="Rectangle 1" width="24" height="24" transform="translate(23.792 -0.523) rotate(90)" fill="#1a1a1a" opacity="0"/>
    <path id="Path_1" data-name="Path 1" d="M13.375,17.909a.922.922,0,0,1-.719-.341L8.2,12.036a.922.922,0,0,1,0-1.171l4.611-5.533a.923.923,0,1,1,1.42,1.18l-4.122,4.943L14.095,16.4a.922.922,0,0,1-.719,1.512Z" transform="translate(-0.053 0.18)" fill="#1a1a1a"/>
  </g>
</svg>
`;

export const ArrowUpIcon = () => <SvgCss xml={xml} />;