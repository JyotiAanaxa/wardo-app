import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="46" viewBox="0 0 48 46">
  <g id="Call" transform="translate(-231 -287)">
    <g id="Rectangle_2454" data-name="Rectangle 2454" transform="translate(231 287)" fill="#fff" stroke="#6a60da" stroke-width="1">
      <rect width="48" height="46" rx="16" stroke="none"/>
      <rect x="0.5" y="0.5" width="47" height="45" rx="15.5" fill="none"/>
    </g>
    <g id="Layer_2" data-name="Layer 2" transform="translate(244.065 299.065)">
      <g id="phone">
        <rect id="Rectangle_2922" data-name="Rectangle 2922" width="22" height="22" transform="translate(-0.065 -0.065)" fill="#6a60da" opacity="0"/>
        <path id="Path_6213" data-name="Path 6213" d="M16.033,20.224A14.051,14.051,0,0,1,2,6.192,4.192,4.192,0,0,1,6.192,2a3.59,3.59,0,0,1,.7.064,3.453,3.453,0,0,1,.656.164.911.911,0,0,1,.592.683L9.39,8.378a.911.911,0,0,1-.237.838c-.118.128-.128.137-1.248.72a9.03,9.03,0,0,0,4.438,4.456c.592-1.13.6-1.139.729-1.257a.911.911,0,0,1,.838-.237l5.467,1.248a.911.911,0,0,1,.656.592,3.955,3.955,0,0,1,.173.665,4.346,4.346,0,0,1,.055.693A4.192,4.192,0,0,1,16.033,20.224Z" transform="translate(-0.178 -0.178)" fill="#6a60da"/>
      </g>
    </g>
  </g>
</svg>
`;

export const CallIcon = () => <SvgCss xml={xml} />;