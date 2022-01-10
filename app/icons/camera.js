import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 18.541 15.498">
  <g id="Take_A_Photo" data-name="Take A Photo" transform="translate(-0.1 -2.1)">
    <path id="Path_5571" data-name="Path 5571" d="M17.741,15.175A1.522,1.522,0,0,1,16.219,16.7H2.522A1.522,1.522,0,0,1,1,15.175V6.8A1.522,1.522,0,0,1,2.522,5.283H5.566L7.088,3h4.566l1.522,2.283h3.044A1.522,1.522,0,0,1,17.741,6.8Z" transform="translate(0 0)" fill="none" stroke="#6a60da" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/>
    <circle id="Ellipse_827" data-name="Ellipse 827" cx="3.349" cy="3.349" r="3.349" transform="translate(5.992 7.362)" fill="none" stroke="#6a60da" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/>
  </g>
</svg>
`;

export const CameraIcon = () => <SvgCss xml={xml} />;