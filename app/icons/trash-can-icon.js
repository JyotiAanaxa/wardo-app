import * as React from 'react';
import {SvgCss} from 'react-native-svg';

const TrashCanIcon = ({...rest}) => {
  const xml = `
  <svg id="delete" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <g id="trash">
    <rect id="Rectangle_1488" data-name="Rectangle 1488" width="24" height="24" transform="translate(-0.011)" fill="#1a1a1a" opacity="0"/>
    <path id="Path_2469" data-name="Path 2469" d="M20.375,5.868H15.54V4.253A2.34,2.34,0,0,0,13.122,2h-2.9A2.34,2.34,0,0,0,7.8,4.253V5.868H2.967a.967.967,0,0,0,0,1.934h.967V18.441a2.9,2.9,0,0,0,2.9,2.9h9.671a2.9,2.9,0,0,0,2.9-2.9V7.8h.967a.967.967,0,0,0,0-1.934ZM9.737,4.253c0-.155.2-.319.484-.319h2.9c.28,0,.484.164.484.319V5.868H9.737Zm7.737,14.188a.967.967,0,0,1-.967.967H6.836a.967.967,0,0,1-.967-.967V7.8H17.474Z" transform="translate(0.324 0.323)" fill="#1a1a1a"/>
  </g>
  </svg>
`;

  return <SvgCss xml={xml} {...rest} />;
};

export default TrashCanIcon;
