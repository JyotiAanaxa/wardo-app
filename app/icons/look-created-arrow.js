import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
  <g id="Look_created_Arrow" data-name="Look created Arrow" transform="translate(-143 -462)">
    <rect id="Rectangle_2662" data-name="Rectangle 2662" width="18" height="18" rx="6" transform="translate(143 462)" fill="#f0efff"/>
    <g id="arrow-ios-back" transform="translate(144.961 463.961)">
      <rect id="Rectangle_1" data-name="Rectangle 1" width="14" height="14" transform="translate(14.039 0.039) rotate(90)" fill="#6a60da" opacity="0"/>
      <path id="Path_1" data-name="Path 1" d="M8.624,12.614a.544.544,0,0,0,.424-.2l2.627-3.263a.544.544,0,0,0,0-.691L8.956,5.2a.545.545,0,1,0-.838.7l2.431,2.915L8.2,11.722a.544.544,0,0,0,.424.892Z" transform="translate(-2.486 -1.675)" fill="#6a60da"/>
    </g>
  </g>
</svg>
`;

export const LookCreatedIcon = () => <SvgCss xml={xml} />;