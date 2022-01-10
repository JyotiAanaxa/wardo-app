import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
  <g id="Natural_Light" data-name="Natural Light" transform="translate(-0.341 -0.341)">
    <g id="sun">
      <rect id="Rectangle_2178" data-name="Rectangle 2178" width="20" height="20" transform="translate(20.341 20.341) rotate(180)" fill="#6a60da" opacity="0"/>
      <path id="Path_5130" data-name="Path 5130" d="M11.862,5.447a.862.862,0,0,0,.862-.862V2.862a.862.862,0,1,0-1.723,0V4.585A.862.862,0,0,0,11.862,5.447Z" transform="translate(-1.521 -0.277)" fill="#6a60da"/>
      <path id="Path_5131" data-name="Path 5131" d="M20.585,11H18.862a.862.862,0,1,0,0,1.723h1.723a.862.862,0,1,0,0-1.723Z" transform="translate(-2.489 -1.521)" fill="#6a60da"/>
      <path id="Path_5132" data-name="Path 5132" d="M5.447,11.862A.862.862,0,0,0,4.585,11H2.862a.862.862,0,1,0,0,1.723H4.585A.862.862,0,0,0,5.447,11.862Z" transform="translate(-0.277 -1.521)" fill="#6a60da"/>
      <path id="Path_5133" data-name="Path 5133" d="M5.984,4.962a.872.872,0,1,0-1.2,1.267l1.241,1.2a.881.881,0,0,0,1.25-1.241Z" transform="translate(-0.624 -0.653)" fill="#6a60da"/>
      <path id="Path_5134" data-name="Path 5134" d="M16.869,7.675a.862.862,0,0,0,.595-.241l1.241-1.2a.862.862,0,0,0-1.163-1.267L16.3,6.193a.877.877,0,0,0,.569,1.482Z" transform="translate(-2.219 -0.661)" fill="#6a60da"/>
      <path id="Path_5135" data-name="Path 5135" d="M11.862,18a.862.862,0,0,0-.862.862v1.723a.862.862,0,1,0,1.723,0V18.862A.862.862,0,0,0,11.862,18Z" transform="translate(-1.521 -2.489)" fill="#6a60da"/>
      <path id="Path_5136" data-name="Path 5136" d="M17.5,16.1a.862.862,0,1,0-1.2,1.241l1.241,1.224a.868.868,0,0,0,1.215-1.241Z" transform="translate(-2.217 -2.193)" fill="#6a60da"/>
      <path id="Path_5137" data-name="Path 5137" d="M6.03,16.105,4.789,17.3a.872.872,0,0,0,1.2,1.267l1.241-1.2a.862.862,0,0,0-1.2-1.241Z" transform="translate(-0.627 -2.197)" fill="#6a60da"/>
      <path id="Path_5138" data-name="Path 5138" d="M11.447,8a3.447,3.447,0,1,0,3.447,3.447A3.447,3.447,0,0,0,11.447,8Zm0,5.17a1.723,1.723,0,1,1,1.723-1.723A1.723,1.723,0,0,1,11.447,13.17Z" transform="translate(-1.106 -1.106)" fill="#6a60da"/>
    </g>
  </g>
</svg>
`;

export const NaturalLightIcon = () => <SvgCss xml={xml} />;