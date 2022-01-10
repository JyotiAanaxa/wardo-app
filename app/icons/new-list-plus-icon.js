import * as React from 'react';
import {SvgCss} from 'react-native-svg';

const xml = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="50"
  height="50"
  viewBox="0 0 50 50"
>
  <defs>
    <style>
      .a,
      .b {
        fill: #6a60da;
      }
      .a {
        opacity: 0;
      }
    </style>
  </defs>
  <g transform="translate(-0.391 -0.391)">
    <g transform="translate(0.344 0.344)">
      <rect
        class="a"
        width="50"
        height="50"
        transform="translate(50.047 50.047) rotate(180)"
      />
      <path
        class="b"
        d="M35.847,18.862H23.108V6.123a2.123,2.123,0,1,0-4.246,0V18.862H6.123a2.123,2.123,0,1,0,0,4.246H18.862V35.847a2.123,2.123,0,0,0,4.246,0V23.108H35.847a2.123,2.123,0,0,0,0-4.246Z"
        transform="translate(4.062 4.062)"
      />
    </g>
  </g>
</svg>
`;

const NewListPlusIcon = () => <SvgCss xml={xml} />;

export default NewListPlusIcon;
