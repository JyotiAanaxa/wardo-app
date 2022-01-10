import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
  <g id="My_Subscription" data-name="My Subscription" transform="translate(-36 -368)">
    <rect id="Rectangle_1492" data-name="Rectangle 1492" width="40" height="40" rx="10" transform="translate(36 368)" fill="#ffe6ee"/>
    <g id="Layer_2" data-name="Layer 2" transform="translate(45.14 377.14)">
      <g id="shopping-cart">
        <rect id="Rectangle_2792" data-name="Rectangle 2792" width="22" height="22" transform="translate(-0.14 -0.14)" fill="#ef709d" opacity="0"/>
        <path id="Path_6146" data-name="Path 6146" d="M19.268,6.62a1.81,1.81,0,0,0-1.539-.905H6.145L5.62,3.67A.905.905,0,0,0,4.715,3H2.905a.905.905,0,0,0,0,1.81H4.027l2.5,9.286a.905.905,0,0,0,.905.67h8.145a.905.905,0,0,0,.805-.5l2.968-5.937a1.81,1.81,0,0,0-.081-1.711Zm-4.254,6.335h-6.9L6.643,7.525H17.729Z" transform="translate(-0.19 -0.285)" fill="#ef709d"/>
        <circle id="Ellipse_982" data-name="Ellipse 982" cx="1.5" cy="1.5" r="1.5" transform="translate(5.86 15.86)" fill="#ef709d"/>
        <circle id="Ellipse_983" data-name="Ellipse 983" cx="1.5" cy="1.5" r="1.5" transform="translate(13.86 15.86)" fill="#ef709d"/>
      </g>
    </g>
  </g>
</svg>
`;

export const MySubscriptionIcon = () => <SvgCss xml={xml} />;