import * as React from 'react';
import {SvgCss} from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50" viewBox="0 0 50 50">
  <defs>
    <filter id="Path_5755" x="0" y="0" width="50" height="50" filterUnits="userSpaceOnUse">
      <feOffset dy="4" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feFlood flood-color="#382d7c" flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Checkbox_purple_with_shadow" data-name="Checkbox purple with shadow" transform="translate(-18468 -21485)">
    <g transform="matrix(1, 0, 0, 1, 18468, 21485)" filter="url(#Path_5755)">
      <path id="Path_5755-2" data-name="Path 5755" d="M6,0h8a6,6,0,0,1,6,6v8a6,6,0,0,1-6,6H6a6,6,0,0,1-6-6V6A6,6,0,0,1,6,0Z" transform="translate(15 11)" fill="#382d7c"/>
    </g>
    <g id="Layer_2" data-name="Layer 2" transform="translate(18485.896 21498.896)">
      <g id="checkmark">
        <rect id="Rectangle_1294" data-name="Rectangle 1294" width="14" height="14" transform="translate(0.104 0.104)" fill="#fff" opacity="0"/>
        <path id="Path_2219" data-name="Path 2219" d="M7.565,13.283a.608.608,0,0,1-.444-.195L4.164,9.943a.609.609,0,1,1,.888-.833l2.506,2.671,5.116-5.6a.608.608,0,1,1,.9.815l-5.56,6.084a.608.608,0,0,1-.444.2Z" transform="translate(-1.764 -2.53)" fill="#fff"/>
      </g>
    </g>
  </g>
</svg>
`;

export const CheckboxPurpleShadowIcon = props => (
  <SvgCss xml={xml} {...props} />
);
