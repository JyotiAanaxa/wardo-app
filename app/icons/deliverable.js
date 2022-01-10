import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
  <g id="Deliverables" transform="translate(-0.154 -0.154)">
    <g id="done-all">
      <rect id="Rectangle_3260" data-name="Rectangle 3260" width="22" height="22" transform="translate(0.154 0.154)" fill="#8b83ff" opacity="0"/>
      <path id="Path_7076" data-name="Path 7076" d="M15.659,6.195a.93.93,0,0,0-1.311.158L7.841,14.719,4.653,10.833A.93.93,0,1,0,3.2,12L7.079,16.81a.977.977,0,0,0,1.5-.009l7.278-9.3a.93.93,0,0,0-.2-1.311Z" transform="translate(-0.21 -0.422)" fill="#8b83ff"/>
      <path id="Path_7077" data-name="Path 7077" d="M20.9,6.195a.93.93,0,0,0-1.311.158l-6.507,8.366-.567-.7L11.34,15.527,12.362,16.8a.928.928,0,0,0,1.45-.009l7.278-9.3a.93.93,0,0,0-.2-1.3Z" transform="translate(-0.799 -0.422)" fill="#8b83ff"/>
      <path id="Path_7078" data-name="Path 7078" d="M8.66,12.9l1.2-1.506-.186-.223A.925.925,0,1,0,8.2,12.3Z" transform="translate(-0.564 -0.76)" fill="#8b83ff"/>
    </g>
  </g>
</svg>
`;

export const DeliverableIcon = () => <SvgCss xml={xml} />;