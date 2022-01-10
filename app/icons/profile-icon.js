import * as React from 'react';
import {SvgCss} from 'react-native-svg';

export const ProfileIcon = ({rectagleStroke = '#b0b0b0', ...rest}) => {
  const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
  <g id="Profile_Icon" data-name="Profile Icon" transform="translate(-36 -30)">
    <g id="Rectangle_2192" data-name="Rectangle 2192" transform="translate(36 30)" fill="none" stroke=${rectagleStroke} stroke-width="1">
      <rect width="40" height="40" rx="12" stroke="none"/>
      <rect x="0.5" y="0.5" width="39" height="39" rx="11.5" fill="none"/>
    </g>
    <path id="user" d="M20,19.484l-.5-2a2.9,2.9,0,0,0-1.9-2.066L13.925,14.2c-.894-.373-1.3-1.813-1.392-2.359a3.465,3.465,0,0,0,1.225-2.253.679.679,0,0,1,.1-.429.417.417,0,0,0,.286-.25,6.229,6.229,0,0,0,.447-1.821.4.4,0,0,0-.013-.1,1.072,1.072,0,0,0-.4-.607V4.167a2.439,2.439,0,0,0-.842-2.213C13.251,1.308,12.558,0,10.008,0A4.345,4.345,0,0,0,5.841,4.167V6.376a1.072,1.072,0,0,0-.4.607.4.4,0,0,0-.013.1,6.229,6.229,0,0,0,.447,1.822.354.354,0,0,0,.25.239c.047.023.134.144.134.439a3.464,3.464,0,0,0,1.232,2.257c-.088.546-.494,1.985-1.363,2.348l-3.7,1.228a2.9,2.9,0,0,0-1.9,2.064l-.5,2a.417.417,0,0,0,.4.519H19.592a.417.417,0,0,0,.4-.518Z" transform="translate(45.992 40)" fill="#d0d0d0"/>
  </g>
</svg>
`;

  return <SvgCss xml={xml} {...rest} />;
};
