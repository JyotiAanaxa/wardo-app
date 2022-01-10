import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="33.992" height="34.001" viewBox="0 0 33.992 34.001">
  <g id="Hanger_With_Plus" data-name="Hanger With Plus" transform="translate(-304.008 -32.999)">
    <path id="hanger" d="M27.571,17.487l-7.986-4.8a9.346,9.346,0,0,0-3.661-1.264v-1.2a1.888,1.888,0,0,1,1.013-1.647,4.557,4.557,0,1,0-6.724-4.01,1.154,1.154,0,1,0,2.307,0,2.25,2.25,0,1,1,3.318,1.981,4.193,4.193,0,0,0-2.222,3.676v1.2a9.344,9.344,0,0,0-3.648,1.254l-8,4.786h0a4.051,4.051,0,0,0,2.075,7.527l21.431.025h0a4.051,4.051,0,0,0,2.088-7.522ZM25.483,22.7h0L4.05,22.677a1.744,1.744,0,0,1-.893-3.24h0l8-4.786a7.038,7.038,0,0,1,7.242.008l7.986,4.8a1.744,1.744,0,0,1-.9,3.238Zm0,0" transform="translate(304.007 32.999)" fill="#6a60da"/>
    <rect id="Rectangle_2517" data-name="Rectangle 2517" width="16" height="16" rx="5" transform="translate(322 51)" fill="#382d7c"/>
    <g id="plus" transform="translate(322.188 51.188)">
      <line id="Line_155" data-name="Line 155" y2="6" transform="translate(7.813 4.813)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4"/>
      <line id="Line_156" data-name="Line 156" x2="6" transform="translate(4.813 7.813)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4"/>
    </g>
  </g>
</svg>
`;

export const HangerIcon = () => <SvgCss xml={xml} />;