import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg id="White_background" data-name="White background" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
  <g id="copy">
    <rect id="Rectangle_2179" data-name="Rectangle 2179" width="20" height="20" fill="#6a60da" opacity="0"/>
    <path id="Path_5139" data-name="Path 5139" d="M16.5,19h-5A2.5,2.5,0,0,1,9,16.5v-5A2.5,2.5,0,0,1,11.5,9h5A2.5,2.5,0,0,1,19,11.5v5A2.5,2.5,0,0,1,16.5,19Zm-5-8.333a.833.833,0,0,0-.833.833v5a.833.833,0,0,0,.833.833h5a.833.833,0,0,0,.833-.833v-5a.833.833,0,0,0-.833-.833Z" transform="translate(-1.5 -1.5)" fill="#6a60da"/>
    <path id="Path_5140" data-name="Path 5140" d="M8.608,13H5.225A2.233,2.233,0,0,1,3,10.775V5.225A2.233,2.233,0,0,1,5.225,3h5.55A2.233,2.233,0,0,1,13,5.225V8.333H11.333V5.225a.558.558,0,0,0-.558-.558H5.225a.558.558,0,0,0-.558.558v5.55a.558.558,0,0,0,.558.558H8.608Z" transform="translate(-0.5 -0.5)" fill="#6a60da"/>
  </g>
</svg>
`;

export const WhiteBgIcon = () => <SvgCss xml={xml} />;