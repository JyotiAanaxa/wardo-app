import * as React from 'react';
import {SvgCss} from 'react-native-svg';

const DeleteBgRoundedIcon = props => {
  const xml = `
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
    <g id="Delete_Icon" data-name="Delete Icon" transform="translate(-145 -218)">
      <rect id="Rectangle_1444" data-name="Rectangle 1444" width="26" height="26" rx="13" transform="translate(145 218)" fill="#f2f2f2"/>
      <g id="Layer_2" data-name="Layer 2" transform="translate(149.702 222.702)">
        <g id="trash">
          <rect id="Rectangle_1488" data-name="Rectangle 1488" width="16" height="16" transform="translate(0.298 0.298)" fill="#1a1a1a" opacity="0"/>
          <path id="Path_2469" data-name="Path 2469" d="M15.138,4.766H11.681V3.611A1.673,1.673,0,0,0,9.952,2H7.878A1.673,1.673,0,0,0,6.149,3.611V4.766H2.691a.691.691,0,1,0,0,1.383h.691v7.606a2.074,2.074,0,0,0,2.074,2.074h6.915a2.074,2.074,0,0,0,2.074-2.074V6.148h.691a.691.691,0,0,0,0-1.383ZM7.532,3.611c0-.111.145-.228.346-.228H9.952c.2,0,.346.118.346.228V4.766H7.532Zm5.532,10.144a.691.691,0,0,1-.691.691H5.457a.691.691,0,0,1-.691-.691V6.148h8.3Z" transform="translate(-0.617 -0.617)" fill="#1a1a1a"/>
        </g>
      </g>
    </g>
  </svg>
`;

  return (
    <SvgCss
      xml={xml}
      width="100%"
      height="100%"
      maxWidth={40}
      maxHeight={40}
      {...props}
    />
  );
};

export default DeleteBgRoundedIcon;
