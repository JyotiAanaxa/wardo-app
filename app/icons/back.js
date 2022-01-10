import * as React from 'react';
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
  <g id="Back_icon" data-name="Back icon" transform="translate(0.208 0.208)">
    <rect id="Rectangle_1" data-name="Rectangle 1" width="22" height="22" transform="translate(21.792 -0.208) rotate(90)" fill="#1a1a1a" opacity="0"/>
    <path id="Path_1" data-name="Path 1" d="M12.992,16.991a.857.857,0,0,1-.668-.317L8.187,11.535a.857.857,0,0,1,0-1.088L12.47,5.308a.858.858,0,0,1,1.319,1.1L9.96,11l3.7,4.591a.857.857,0,0,1-.668,1.4Z" transform="translate(-0.633 -0.203)" fill="#1a1a1a"/>
  </g>
</svg>
`;

export default BackIcon = () => <SvgCss xml={xml} />;
