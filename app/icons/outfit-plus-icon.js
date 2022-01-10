import * as React from 'react';
import {SvgCss} from 'react-native-svg';

export const OutfitPlusBtnIcon = ({color = "#fff"}) => {
  const xml = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <defs>
      <style>
        .a {
          fill: none;
          stroke: ${color};
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 4px;
        }
      </style>
    </defs>
    <g transform="translate(-2.991 -2.991)">
      <line class="a" y2="20" transform="translate(14.991 4.991)" />
      <line class="a" x2="20" transform="translate(4.991 14.991)" />
    </g>
  </svg>
  `;

  return <SvgCss xml={xml} />;
};
