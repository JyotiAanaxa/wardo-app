import * as React from "react"
import { SvgCss } from 'react-native-svg';

export const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
  <g id="F_Q_Arrow_icon" data-name="F &amp; Q Arrow icon" transform="translate(20) rotate(90)">
    <rect id="Rectangle_1" data-name="Rectangle 1" width="20" height="20" transform="translate(0 20) rotate(-90)" fill="#80838c" opacity="0"/>
    <path id="Path_1" data-name="Path 1" d="M4.546,0a.779.779,0,0,0-.607.288L.177,4.961a.779.779,0,0,0,0,.989l3.894,4.673a.78.78,0,1,0,1.2-1L1.789,5.451,5.154,1.277A.779.779,0,0,0,4.546,0Z" transform="translate(6.746 4.415)" fill="#80838c"/>
  </g>
</svg>
`;

export const FaqUpIcon = () => <SvgCss xml={xml} />;