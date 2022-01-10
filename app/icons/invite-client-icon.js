import * as React from 'react';
import {SvgCss} from 'react-native-svg';

const InviteClientIcon = ({props}) => {
  const xml = `
<svg id="Invite_Clients" data-name="Invite Clients" xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24">
  <g id="people">
    <rect id="Rectangle_3281" data-name="Rectangle 3281" width="24" height="24" fill="#fff" opacity="0"/>
    <path id="Path_7110" data-name="Path 7110" d="M9,11A4,4,0,1,0,5,7,4,4,0,0,0,9,11Z" fill="#fff"/>
    <path id="Path_7111" data-name="Path 7111" d="M17,13a3,3,0,1,0-3-3A3,3,0,0,0,17,13Z" fill="#fff"/>
    <path id="Path_7112" data-name="Path 7112" d="M21,20a1,1,0,0,0,1-1,5,5,0,0,0-8.06-3.95A7,7,0,0,0,2,20a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1" fill="#fff"/>
    <path id="Path_7116" data-name="Path 7116" d="M21,6H20V5a1,1,0,0,0-2,0V6H17a1,1,0,0,0,0,2h1V9a1,1,0,0,0,2,0V8h1a1,1,0,0,0,0-2Z" transform="translate(6)" fill="#fff"/>
  </g>
</svg>
`;

  return <SvgCss xml={xml} {...props} />;
};

export default InviteClientIcon;
