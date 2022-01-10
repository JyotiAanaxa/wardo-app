import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="70" height="14" viewBox="0 0 70 14">
  <g id="Star" transform="translate(-187 -261)">
    <g id="star-s-fill" transform="translate(187 261)">
      <path id="Path_5563" data-name="Path 5563" d="M0,0H14V14H0Z" fill="none"/>
      <path id="Path_5564" data-name="Path 5564" d="M7.905,10.707,4.558,12.739l.91-3.792L2.49,6.411,6.4,6.1,7.905,2.5,9.412,6.1l3.91.311L10.343,8.947l.91,3.792Z" transform="translate(-0.905 -0.909)" fill="#6a60da"/>
    </g>
    <g id="star-s-fill-2" data-name="star-s-fill" transform="translate(201 261)">
      <path id="Path_5563-2" data-name="Path 5563" d="M0,0H14V14H0Z" fill="none"/>
      <path id="Path_5564-2" data-name="Path 5564" d="M7.905,10.707,4.558,12.739l.91-3.792L2.49,6.411,6.4,6.1,7.905,2.5,9.412,6.1l3.91.311L10.343,8.947l.91,3.792Z" transform="translate(-0.905 -0.909)" fill="#6a60da"/>
    </g>
    <g id="star-s-fill-3" data-name="star-s-fill" transform="translate(215 261)">
      <path id="Path_5563-3" data-name="Path 5563" d="M0,0H14V14H0Z" fill="none"/>
      <path id="Path_5564-3" data-name="Path 5564" d="M7.905,10.707,4.558,12.739l.91-3.792L2.49,6.411,6.4,6.1,7.905,2.5,9.412,6.1l3.91.311L10.343,8.947l.91,3.792Z" transform="translate(-0.905 -0.909)" fill="#6a60da"/>
    </g>
    <g id="star-s-fill-4" data-name="star-s-fill" transform="translate(229 261)">
      <path id="Path_5563-4" data-name="Path 5563" d="M0,0H14V14H0Z" fill="none"/>
      <path id="Path_5564-4" data-name="Path 5564" d="M7.905,10.707,4.558,12.739l.91-3.792L2.49,6.411,6.4,6.1,7.905,2.5,9.412,6.1l3.91.311L10.343,8.947l.91,3.792Z" transform="translate(-0.905 -0.909)" fill="#6a60da"/>
    </g>
    <g id="star-s-fill-5" data-name="star-s-fill" transform="translate(243 261)">
      <path id="Path_5563-5" data-name="Path 5563" d="M0,0H14V14H0Z" fill="none"/>
      <path id="Path_5564-5" data-name="Path 5564" d="M7.905,10.707,4.558,12.739l.91-3.792L2.49,6.411,6.4,6.1,7.905,2.5,9.412,6.1l3.91.311L10.343,8.947l.91,3.792Z" transform="translate(-0.905 -0.909)" fill="#6a60da"/>
    </g>
  </g>
</svg>
`;

export const StarsIcon = () => <SvgCss xml={xml} />;
