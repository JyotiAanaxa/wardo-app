import * as React from 'react';
import {SvgCss} from 'react-native-svg';

const MagnifyingGlassIcon = ({stroke = '#d0d0d0', ...rest}) => {
  const xml = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
  >
    <defs>
      <style>
        .a,
        .b {
          fill: ${stroke};
        }
        .a {
          opacity: 0;
        }
      </style>
    </defs>
    <g transform="translate(-0.302 -0.302)">
      <g transform="translate(0.303 0.302)">
        <rect class="a" width="18" height="18" transform="translate(0)" />
        <path
          class="b"
          d="M16.678,15.581l-2.626-2.618a6.117,6.117,0,0,0,1.305-3.784,6.179,6.179,0,1,0-6.179,6.179,6.117,6.117,0,0,0,3.784-1.305l2.618,2.626a.775.775,0,1,0,1.1-1.1ZM4.545,9.179a4.634,4.634,0,1,1,4.634,4.634A4.634,4.634,0,0,1,4.545,9.179Z"
          transform="translate(-0.951 -0.951)"
        />
      </g>
    </g>
  </svg>
`;

  return <SvgCss xml={xml} {...rest} />;
};

export default MagnifyingGlassIcon;
