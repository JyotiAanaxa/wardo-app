import * as React from 'react';
import {SvgCss} from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="30.938" height="32" viewBox="0 0 30.938 32">
  <g id="T-Shirt_With_Plus" data-name="T-Shirt With Plus" transform="translate(-323.062 -32)">
    <g id="fashion" transform="translate(324.067 33)">
      <path id="Path_5722" data-name="Path 5722" d="M28.711,23.073a.659.659,0,0,0-.343-.377l-5.481-2.53a26.505,26.505,0,0,0-3.553-.935.653.653,0,0,0-.126-.012.644.644,0,0,0-.629.506,4.311,4.311,0,0,1-8.414,0,.645.645,0,0,0-.629-.506.653.653,0,0,0-.126.012,26.607,26.607,0,0,0-3.555.935L.378,22.7a.645.645,0,0,0-.342.377.639.639,0,0,0,.034.507l2.379,4.7a.646.646,0,0,0,.764.329l2.643-.783V43.577a.651.651,0,0,0,.651.65H22.239a.65.65,0,0,0,.649-.65V27.822l2.644.783a.646.646,0,0,0,.764-.329l2.38-4.7A.652.652,0,0,0,28.711,23.073Z" transform="translate(0 -19.219)" fill="none" stroke="#6a60da" stroke-width="2"/>
    </g>
    <rect id="Rectangle_2597" data-name="Rectangle 2597" width="16" height="16" rx="5" transform="translate(338 48)" fill="#382d7c"/>
    <g id="plus" transform="translate(338.188 48.188)">
      <line id="Line_155" data-name="Line 155" y2="6" transform="translate(7.813 4.813)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4"/>
      <line id="Line_156" data-name="Line 156" x2="6" transform="translate(4.813 7.813)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4"/>
    </g>
  </g>
</svg>
`;

export const TShirtPlusIcon = () => <SvgCss xml={xml} />;
