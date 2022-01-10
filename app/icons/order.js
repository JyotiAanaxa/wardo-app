import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
  <g id="My_Orders" data-name="My Orders" transform="translate(-36 -488)">
    <rect id="Rectangle_1493" data-name="Rectangle 1493" width="40" height="40" rx="10" transform="translate(36 488)" fill="#cdfdfb"/>
    <g id="My_Orders-2" data-name="My Orders" transform="translate(45.15 497.15)">
      <g id="shopping-bag">
        <rect id="Rectangle_1455" data-name="Rectangle 1455" width="22" height="22" transform="translate(-0.15 -0.15)" fill="#06d6d8" opacity="0"/>
        <path id="Path_2443" data-name="Path 2443" d="M18.479,6.354,15.92,3.8A2.712,2.712,0,0,0,14,3H8.271a2.712,2.712,0,0,0-1.917.8L3.8,6.354A2.712,2.712,0,0,0,3,8.271v8.291a2.712,2.712,0,0,0,2.712,2.712h10.85a2.712,2.712,0,0,0,2.712-2.712V8.271a2.712,2.712,0,0,0-.8-1.917Zm-7.342,8.4a3.617,3.617,0,0,1-3.617-3.617.9.9,0,1,1,1.808,0,1.808,1.808,0,0,0,3.617,0,.9.9,0,1,1,1.808,0A3.617,3.617,0,0,1,11.137,14.754ZM6.083,6.617,7.629,5.07a.949.949,0,0,1,.642-.262H14a.949.949,0,0,1,.642.262l1.546,1.546Z" transform="translate(-0.288 -0.288)" fill="#06d6d8"/>
      </g>
    </g>
  </g>
</svg>
`;

export const OrderIcon = () => <SvgCss xml={xml} />;