import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
  <g id="calendar" transform="translate(0.418 0.418)">
    <g id="calendar-2" data-name="calendar">
      <rect id="Rectangle_3453" data-name="Rectangle 3453" width="20" height="20" transform="translate(-0.418 -0.418)" fill="#1a1a1a" opacity="0"/>
      <path id="Path_7514" data-name="Path 7514" d="M14.978,3.6h-.8V2.8a.8.8,0,0,0-1.6,0v.8H7.791V2.8a.8.8,0,1,0-1.6,0v.8H5.4A2.4,2.4,0,0,0,3,5.993v9.582a2.4,2.4,0,0,0,2.4,2.4h9.582a2.4,2.4,0,0,0,2.4-2.4V5.993a2.4,2.4,0,0,0-2.4-2.4ZM5.4,5.194h.8v.8a.8.8,0,0,0,1.6,0v-.8h4.791v.8a.8.8,0,0,0,1.6,0v-.8h.8a.8.8,0,0,1,.8.8V9.187H4.6V5.993A.8.8,0,0,1,5.4,5.194Zm9.582,11.179H5.4a.8.8,0,0,1-.8-.8V10.784H15.776v4.791A.8.8,0,0,1,14.978,16.373Z" transform="translate(-0.604 -0.403)" fill="#1a1a1a"/>
      <circle id="Ellipse_1474" data-name="Ellipse 1474" cx="1" cy="1" r="1" transform="translate(5.582 11.782)" fill="#1a1a1a"/>
      <path id="Path_7515" data-name="Path 7515" d="M14.993,15H11.8a.8.8,0,0,0,0,1.6h3.194a.8.8,0,1,0,0-1.6Z" transform="translate(-2.216 -3.022)" fill="#1a1a1a"/>
    </g>
  </g>
</svg>
`;

export const CalenderIcon = () => <SvgCss xml={xml} />;
