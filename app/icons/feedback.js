import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
  <g id="Feedback" transform="translate(-36 -548)">
    <rect id="Rectangle_1494" data-name="Rectangle 1494" width="40" height="40" rx="10" transform="translate(36 548)" fill="#fff1c5"/>
    <g id="Feedback-2" data-name="Feedback" transform="translate(-11.26 16.74)">
      <g id="Layer_2" data-name="Layer 2" transform="translate(56 540)">
        <g id="message-square">
          <rect id="Rectangle_1459" data-name="Rectangle 1459" width="22" height="22" transform="translate(0.26 0.26)" fill="#ffcb0c" opacity="0"/>
          <path id="Path_2449" data-name="Path 2449" d="M17.951,3H4.815A2.815,2.815,0,0,0,2,5.815V19.89a.938.938,0,0,0,1.417.807L7.63,18.144a.938.938,0,0,1,.516-.131h9.805A2.815,2.815,0,0,0,20.766,15.2V5.815A2.815,2.815,0,0,0,17.951,3Z" transform="translate(-0.123 -0.185)" fill="#ffcb0c"/>
        </g>
      </g>
      <g id="Layer_2-2" data-name="Layer 2" transform="translate(61.63 544.692)">
        <g id="heart" transform="translate(0 0)">
          <rect id="Rectangle_1458" data-name="Rectangle 1458" width="12" height="12" transform="translate(-0.37 -0.432)" fill="#fff" opacity="0"/>
          <path id="Path_2446" data-name="Path 2446" d="M6.312,11.332a.431.431,0,0,1-.306-.125L2.655,7.852A2.257,2.257,0,1,1,5.846,4.66l.466.466.466-.466A2.257,2.257,0,0,1,9.969,7.852L6.618,11.207a.431.431,0,0,1-.306.125Z" transform="translate(-0.682 -1.821)" fill="#fff"/>
        </g>
      </g>
    </g>
  </g>
</svg>
`;

export const FeedbackIcon = () => <SvgCss xml={xml} />;