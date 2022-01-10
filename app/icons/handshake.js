import * as React from 'react';
import {SvgCss} from 'react-native-svg';

const HandshakeIcon = props => {
  const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46">
  <g id="Handshake_" data-name="Handshake " transform="translate(-165 -433)">
    <circle id="Ellipse_1403" data-name="Ellipse 1403" cx="23" cy="23" r="23" transform="translate(165 433)" fill="#ef709d"/>
    <g id="icons8-handshake" transform="translate(176 443.998)">
      <path id="Path_7131" data-name="Path 7131" d="M13.5,9.843l-1.454.53A4,4,0,0,1,7.128,8.459L6.55,7.345A1.97,1.97,0,0,1,6.932,5H2V15H3l6.076,5.316a2.734,2.734,0,0,0,3.732-.124l4.238-4.238a2.719,2.719,0,0,0,.8-1.9Z" fill="#fff"/>
      <path id="Path_7132" data-name="Path 7132" d="M22,15V5L19,6,14.859,4.178a2.077,2.077,0,0,0-1.71.016L8.325,6.423,8.9,7.537a2,2,0,0,0,2.459.957l2.631-.959,5.4,5.234A2,2,0,0,1,20,14.2V15Z" fill="#fff"/>
    </g>
  </g>
</svg>
`;

  return <SvgCss xml={xml} {...props} />;
};

export default HandshakeIcon;
