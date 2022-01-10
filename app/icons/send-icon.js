import * as React from 'react';
import {SvgCss} from 'react-native-svg';

const SendIcon = ({color = '#fff', ...rest}) => {
  const xml = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="19.799"
  height="19.799"
  viewBox="0 0 19.799 19.799"
>
  <defs>
    <style>
      .a {
        fill: ${color};
      }
    </style>
  </defs>
  <g transform="translate(9.899 -3.466) rotate(45)">
    <path
      class="a"
      d="M13.711.289a.979.979,0,0,0-.92-.263h0L1.793,2.718A2.346,2.346,0,0,0,0,5V6.453a.986.986,0,0,0,.942.983l4.136.7a.273.273,0,0,0,.239-.076l4.874-4.874a.438.438,0,1,1,.619.619L5.936,8.683a.273.273,0,0,0-.076.239l.7,4.136A.986.986,0,0,0,7.547,14H9a2.346,2.346,0,0,0,2.284-1.793L13.973,1.213v0a.978.978,0,0,0-.263-.92Z"
      transform="translate(2.451 2.451)"
    />
  </g>
</svg>
`;

  return <SvgCss xml={xml} {...rest} />;
};

export default SendIcon;
