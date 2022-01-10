import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
  <g id="Style_Preferences" data-name="Style Preferences" transform="translate(-36 -368)">
    <rect id="Rectangle_1492" data-name="Rectangle 1492" width="40" height="40" rx="10" transform="translate(36 368)" fill="#ffe6ee"/>
    <g id="Style_Preferences-2" data-name="Style Preferences" transform="translate(-8.997 377)">
      <path id="Path_2447" data-name="Path 2447" d="M200.793,4.65V6.532H199v.64a2.434,2.434,0,1,0,4.867,0v-.64h-1.793V4.1a.64.64,0,0,0-.64-.64,1.069,1.069,0,0,1-1.067-1.067,1.068,1.068,0,1,1,2.135,0,.64.64,0,0,0,1.281,0,2.349,2.349,0,1,0-4.7,0,2.352,2.352,0,0,0,1.708,2.26Z" transform="translate(-135.94)" fill="#ef709d"/>
      <path id="Path_2448" data-name="Path 2448" d="M73.946,159.557l-2.391-6.148a.64.64,0,0,0-.6-.408H69.208v.64a3.715,3.715,0,1,1-7.429,0V153H60.028a.64.64,0,0,0-.6.408l-2.391,6.148a.64.64,0,0,0,.332.815c4.295,1.952-.026,0,4.265,1.955a.64.64,0,0,1-.53,1.166c-1.589-.723-1.249-.567-1.719-.784v4.979a.64.64,0,0,0,.64.64h10.93a.64.64,0,0,0,.64-.64v-5c-.529.238-.163.072-1.764.8a.64.64,0,0,1-.53-1.166c2.846-1.294.641-.287,4.31-1.955A.64.64,0,0,0,73.946,159.557Z" transform="translate(0 -146.468)" fill="#ef709d"/>
    </g>
  </g>
</svg>`;

export const StylePreferIcon = () => <SvgCss xml={xml} />;