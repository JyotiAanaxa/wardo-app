import * as React from "react"
import { SvgCss } from 'react-native-svg';

export const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
  <g id="F_Q_Arrow_icon_downward" data-name="F &amp; Q Arrow icon downward" transform="translate(0.389 19.927) rotate(-90)">
    <rect id="Rectangle_1" data-name="Rectangle 1" width="20" height="20" transform="translate(19.927 -0.389) rotate(90)" fill="#80838c" opacity="0"/>
    <path id="Path_1" data-name="Path 1" d="M12.539,15.9a.779.779,0,0,1-.607-.288L8.17,10.942a.779.779,0,0,1,0-.989L12.064,5.28a.78.78,0,1,1,1.2,1L9.782,10.451l3.364,4.174a.779.779,0,0,1-.607,1.277Z" transform="translate(-1.32 -0.707)" fill="#80838c"/>
  </g>
</svg>
`;

export const FaqDownIcon = () => <SvgCss xml={xml} />;