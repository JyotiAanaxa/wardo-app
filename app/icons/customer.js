import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
  <g id="Customer_Questions" data-name="Customer Questions" transform="translate(-0.118 -0.118)">
    <g id="person">
      <rect id="Rectangle_3259" data-name="Rectangle 3259" width="22" height="22" transform="translate(0.118 0.118)" fill="#8b83ff" opacity="0"/>
      <path id="Path_7074" data-name="Path 7074" d="M11.706,10.412A3.706,3.706,0,1,0,8,6.706,3.706,3.706,0,0,0,11.706,10.412Zm0-5.559A1.853,1.853,0,1,1,9.853,6.706,1.853,1.853,0,0,1,11.706,4.853Z" transform="translate(-0.588 -0.22)" fill="#8b83ff"/>
      <path id="Path_7075" data-name="Path 7075" d="M11.486,13A6.486,6.486,0,0,0,5,19.486a.927.927,0,0,0,1.853,0,4.633,4.633,0,0,1,9.265,0,.927.927,0,0,0,1.853,0A6.486,6.486,0,0,0,11.486,13Z" transform="translate(-0.367 -0.955)" fill="#8b83ff"/>
    </g>
  </g>
</svg>
`;

export const CustomerIcon = () => <SvgCss xml={xml} />;