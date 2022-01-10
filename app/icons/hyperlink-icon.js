import * as React from 'react';
import {SvgCss} from 'react-native-svg';

const HyperLinkIcon = ({color = '#6a60da', ...rest}) => {
  const xml = `
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="23"
  height="23"
  viewBox="0 0 23 23"
>
  <defs>
    <style>
      .a,
      .b {
        fill: ${color};
      }
      .a {
        opacity: 0;
      }
    </style>
  </defs>
  <g transform="translate(-0.309 0.134)">
    <g transform="translate(0.309 0.309)">
      <rect class="a" width="23" height="23" transform="translate(0 -0.442)" />
      <path
        class="b"
        d="M8,11.966a.966.966,0,0,0,.966.966h5.8a.966.966,0,0,0,0-1.933h-5.8A.966.966,0,0,0,8,11.966Z"
        transform="translate(-0.586 -0.687)"
      />
      <path
        class="b"
        d="M8.73,15.663H7a3.991,3.991,0,0,1-4.068-3.508A3.865,3.865,0,0,1,6.8,7.933H8.73A.966.966,0,1,0,8.73,6H7a5.943,5.943,0,0,0-5.952,5.034A5.8,5.8,0,0,0,6.8,17.6H8.73a.966.966,0,1,0,0-1.933Z"
        transform="translate(-0.35 -0.519)"
      />
      <path
        class="b"
        d="M22.7,11.063A5.952,5.952,0,0,0,16.667,6H15.208C14.425,6,14,6.435,14,6.966a.966.966,0,0,0,.966.966H16.7a3.991,3.991,0,0,1,4.068,3.508A3.865,3.865,0,0,1,16.9,15.663H14.966a.966.966,0,0,0,0,1.933H16.9a5.8,5.8,0,0,0,5.8-6.532Z"
        transform="translate(-0.789 -0.519)"
      />
    </g>
  </g>
</svg>
`;

  return <SvgCss xml={xml} {...rest} />;
};

export default HyperLinkIcon;
