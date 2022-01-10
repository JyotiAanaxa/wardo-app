import * as React from 'react';
import { SvgCss } from 'react-native-svg';

export const VirtualIcon = ({ color }) => <SvgCss xml={`
<svg xmlns="http://www.w3.org/2000/svg" width="25.209" height="26.47" viewBox="0 0 25.209 26.47">
  <g id="Virtual" transform="translate(-2 -1)">
    <path id="Path_7140" data-name="Path 7140" d="M13.563,1A7.562,7.562,0,0,0,6,8.563c0,5.4,7.563,13.865,7.563,13.865s7.563-8.463,7.563-13.865A7.562,7.562,0,0,0,13.563,1Zm0,10.264a2.7,2.7,0,1,1,2.7-2.7A2.7,2.7,0,0,1,13.563,11.264Z" transform="translate(1.042 0)" fill="${color}"/>
    <path id="Path_7141" data-name="Path 7141" d="M23.68,15H20.67c-.611.921-1.224,1.775-1.789,2.521h3.093L23.487,21.3H5.722l1.513-3.781h3.093c-.565-.746-1.177-1.6-1.789-2.521H5.529L2,23.823H27.209Z" transform="translate(0 3.646)" fill="${color}"/>
  </g>
</svg>
`} />;

