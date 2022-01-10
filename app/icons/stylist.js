import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
  <g id="My_Stylists" data-name="My Stylists" transform="translate(-36 -428)">
    <rect id="Rectangle_1491" data-name="Rectangle 1491" width="40" height="40" rx="10" transform="translate(36 428)" fill="#e5e0ff"/>
    <g id="My_Stylists-2" data-name="My Stylists" transform="translate(44.676 436.676)">
      <g id="person-done">
        <rect id="Rectangle_1460" data-name="Rectangle 1460" width="22" height="22" transform="translate(0.324 0.324)" fill="#6a60da" opacity="0"/>
        <path id="Path_2450" data-name="Path 2450" d="M21.341,4.236a.944.944,0,0,0-1.331.085L18.246,6.35l-.595-.67a.946.946,0,0,0-1.416,1.255l1.312,1.472A.94.94,0,0,0,18.954,8.4l2.463-2.831a.944.944,0,0,0-.075-1.331Z" transform="translate(-0.901 -0.225)" fill="#6a60da"/>
        <path id="Path_2451" data-name="Path 2451" d="M9.775,10.549A3.775,3.775,0,1,0,6,6.775,3.775,3.775,0,0,0,9.775,10.549Z" transform="translate(-0.338 -0.169)" fill="#6a60da"/>
        <path id="Path_2452" data-name="Path 2452" d="M15.268,20.549a.944.944,0,0,0,.944-.944A6.606,6.606,0,0,0,3,19.606a.944.944,0,0,0,.944.944" transform="translate(-0.169 -0.732)" fill="#6a60da"/>
      </g>
    </g>
  </g>
</svg>
`;

export const StylistIcon = () => <SvgCss xml={xml} />;