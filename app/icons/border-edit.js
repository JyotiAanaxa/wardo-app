import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 40 30">
  <g id="Edit_Button" data-name="Edit Button" transform="translate(-298 -172)">
    <g id="pencil-fill" transform="translate(308 177)">
      <path id="Path_4976" data-name="Path 4976" d="M0,0H20V20H0Z" fill="none"/>
      <path id="Path_4977" data-name="Path 4977" d="M11.227,6.211l3.525,3.526L6.525,17.963H3V14.437L11.227,6.21ZM12.4,5.036l1.763-1.763a.831.831,0,0,1,1.175,0L17.69,5.623a.831.831,0,0,1,0,1.175L15.927,8.561Z" transform="translate(-0.479 -0.484)" fill="#bec2c1"/>
    </g>
    <g id="Rectangle_2105" data-name="Rectangle 2105" transform="translate(298 172)" fill="none" stroke="#bec2c1" stroke-width="1">
      <rect width="40" height="30" rx="8" stroke="none"/>
      <rect x="0.5" y="0.5" width="39" height="29" rx="7.5" fill="none"/>
    </g>
  </g>
</svg>`;

export const BorderEditIcon = () => <SvgCss xml={xml} />;