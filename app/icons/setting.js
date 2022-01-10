import * as React from 'react';
import {SvgCss} from 'react-native-svg';

export const SettingIcon = ({color = '#1a1a1a'}) => {
  const xml = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .a{fill:none;}.b{fill:${color};}
    </style>
  </defs>
  <path class="a" d="M0,0H24V24H0Z" />
  <path
    class="b"
    d="M2.132,13.63a9.942,9.942,0,0,1,0-3.26A2.52,2.52,0,0,0,4.609,8.939a2.518,2.518,0,0,0-.74-2.763A9.942,9.942,0,0,1,6.175,3.869a2.52,2.52,0,0,0,2.764.74,2.518,2.518,0,0,0,1.43-2.477,9.942,9.942,0,0,1,3.262,0,2.518,2.518,0,0,0,1.43,2.477,2.518,2.518,0,0,0,2.763-.74,9.942,9.942,0,0,1,2.307,2.306,2.52,2.52,0,0,0-.74,2.764,2.518,2.518,0,0,0,2.477,1.43,9.942,9.942,0,0,1,0,3.262,2.518,2.518,0,0,0-2.477,1.43,2.518,2.518,0,0,0,.74,2.763,9.942,9.942,0,0,1-2.306,2.307,2.52,2.52,0,0,0-2.764-.74,2.518,2.518,0,0,0-1.43,2.477,9.942,9.942,0,0,1-3.262,0,2.518,2.518,0,0,0-1.43-2.477,2.518,2.518,0,0,0-2.763.74,9.942,9.942,0,0,1-2.307-2.306,2.52,2.52,0,0,0,.74-2.764,2.518,2.518,0,0,0-2.477-1.43ZM12,15a3,3,0,1,0-3-3A3,3,0,0,0,12,15Z"
  />
</svg>
`;

  return <SvgCss xml={xml} />;
};
