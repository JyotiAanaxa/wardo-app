import * as React from 'react';
import {SvgCss} from 'react-native-svg';

export const UndoIcon = ({color}) => {
  const xml = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
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
    <g transform="translate(0.05 0.05)">
      <g transform="translate(0.304 0.304)">
        <rect
          class="a"
          width="24"
          height="24"
          transform="translate(-0.354 -0.354)"
        />
        <path
          class="b"
          d="M3.734,13.327a.99.99,0,0,1,1.238.644,7.07,7.07,0,0,0,6.8,4.872,7.03,7.03,0,0,0,7.11-6.931,7.03,7.03,0,0,0-7.11-6.931,7.189,7.189,0,0,0-4.6,1.654l2.149-.356a.993.993,0,1,1,.317,1.961l-4.2.693H5.269a.99.99,0,0,1-.337-.059.327.327,0,0,1-.1-.059.772.772,0,0,1-.2-.109l-.089-.109c0-.05-.089-.089-.129-.149s0-.1-.05-.139A1.327,1.327,0,0,1,4.3,8.129L3.556,4.168a1.008,1.008,0,0,1,1.98-.376L5.8,5.228A9.12,9.12,0,0,1,11.774,3a9.011,9.011,0,0,1,9.09,8.912,9.011,9.011,0,0,1-9.09,8.912,9.031,9.031,0,0,1-8.733-6.258.99.99,0,0,1,.693-1.238Z"
          transform="translate(-0.306 -0.265)"
        />
      </g>
    </g>
  </svg>
  `;

  return <SvgCss xml={xml} />;
};
