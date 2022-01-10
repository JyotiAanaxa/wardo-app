import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <g id="Cross_Icon" data-name="Cross Icon" transform="translate(-304 -734)">
    <rect id="Rectangle_1444" data-name="Rectangle 1444" width="24" height="24" rx="12" transform="translate(304 734)" fill="#fff"/>
    <g id="Layer_2" data-name="Layer 2" transform="translate(307.991 737.991)">
      <g id="close">
        <rect id="Rectangle_3448" data-name="Rectangle 3448" width="16" height="16" transform="translate(16.009 16.009) rotate(180)" fill="#1a1a1a" opacity="0"/>
        <path id="Path_7511" data-name="Path 7511" d="M10.943,10l2.87-2.863a.67.67,0,1,0-.948-.948L10,9.062,7.139,6.192a.67.67,0,0,0-.948.948L9.061,10l-2.87,2.863a.67.67,0,1,0,.948.948L10,10.944l2.863,2.87a.67.67,0,1,0,.948-.948Z" transform="translate(-1.994 -1.994)" fill="#1a1a1a"/>
      </g>
    </g>
  </g>
</svg>
`;

export const CrossIcon = () => <SvgCss xml={xml} />;
