import * as React from 'react';
import {SvgCss} from 'react-native-svg';

const xml = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="18"
  height="18"
  viewBox="0 0 18 18"
>
  <defs>
    <style>
      .a {
        fill: none;
      }
      .b {
        fill: #6a60da;
      }
    </style>
  </defs>
  <path class="a" d="M0,0H18V18H0Z" />
  <path
    class="b"
    d="M12.721,2.736,11.308,4.149H4.413v9.893h9.893V7.148L15.72,5.734v9.015a.707.707,0,0,1-.707.707H3.707A.707.707,0,0,1,3,14.749V3.443a.707.707,0,0,1,.707-.707ZM15.356,2.1l1,1L9.86,9.6l-1,0v-1Z"
    transform="translate(-0.873 0.417)"
  />
</svg>
`;

export const OutfitChngBtnIcon = () => <SvgCss xml={xml} />;
