import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
  <g id="Delete_icon" data-name="Delete icon" transform="translate(-298 -30)">
    <g id="Layer_2" data-name="Layer 2" transform="translate(306.305 38.292)">
      <g id="trash" transform="translate(-0.293 -0.292)">
        <rect id="Rectangle_1488" data-name="Rectangle 1488" width="24" height="24" transform="translate(-0.011)" fill="#1a1a1a" opacity="0"/>
        <path id="Path_2469" data-name="Path 2469" d="M20.375,5.868H15.54V4.253A2.34,2.34,0,0,0,13.122,2h-2.9A2.34,2.34,0,0,0,7.8,4.253V5.868H2.967a.967.967,0,0,0,0,1.934h.967V18.441a2.9,2.9,0,0,0,2.9,2.9h9.671a2.9,2.9,0,0,0,2.9-2.9V7.8h.967a.967.967,0,0,0,0-1.934ZM9.737,4.253c0-.155.2-.319.484-.319h2.9c.28,0,.484.164.484.319V5.868H9.737Zm7.737,14.188a.967.967,0,0,1-.967.967H6.836a.967.967,0,0,1-.967-.967V7.8H17.474Z" transform="translate(0.324 0.323)" fill="#1a1a1a"/>
      </g>
    </g>
    <g id="Rectangle_2104" data-name="Rectangle 2104" transform="translate(298 30)" fill="none" stroke="#d0d0d0" stroke-width="1">
      <rect width="40" height="40" rx="12" stroke="none"/>
      <rect x="0.5" y="0.5" width="39" height="39" rx="11.5" fill="none"/>
    </g>
  </g>
</svg>
`;

export const DeleteSqrOutlineIcon = () => <SvgCss xml={xml} />;
