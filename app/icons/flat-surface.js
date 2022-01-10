import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
  <g id="Flat_Surface" data-name="Flat Surface" transform="translate(-0.04 -0.04)">
    <g id="square" transform="translate(0.04 0.04)">
      <rect id="Rectangle_2180" data-name="Rectangle 2180" width="20" height="20" fill="#6a60da" opacity="0"/>
      <path id="Path_5141" data-name="Path 5141" d="M15.545,18.055H5.509A2.509,2.509,0,0,1,3,15.545V5.509A2.509,2.509,0,0,1,5.509,3H15.545a2.509,2.509,0,0,1,2.509,2.509V15.545A2.509,2.509,0,0,1,15.545,18.055ZM5.509,4.673a.836.836,0,0,0-.836.836V15.545a.836.836,0,0,0,.836.836H15.545a.836.836,0,0,0,.836-.836V5.509a.836.836,0,0,0-.836-.836Z" transform="translate(-0.527 -0.527)" fill="#6a60da"/>
    </g>
  </g>
</svg>
`;

export const FlatSurfaceIcon = () => <SvgCss xml={xml} />;