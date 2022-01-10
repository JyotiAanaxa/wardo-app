import * as React from "react"
import { SvgCss } from 'react-native-svg';

export const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
  <g id="Retake" transform="translate(-0.271 0.207)">
    <g id="refresh" transform="translate(0.271 -0.207)">
      <rect id="Rectangle_2417" data-name="Rectangle 2417" width="20" height="20" fill="#6a60da" opacity="0"/>
      <path id="Path_5561" data-name="Path 5561" d="M17.435,11.7a.834.834,0,0,0-1.043.542,5.958,5.958,0,0,1-5.732,4.105A5.924,5.924,0,0,1,4.669,10.5,5.924,5.924,0,0,1,10.66,4.664a6.058,6.058,0,0,1,3.88,1.393l-1.811-.3a.837.837,0,1,0-.267,1.652L16,7.993h.142a.834.834,0,0,0,.284-.05.275.275,0,0,0,.083-.05.651.651,0,0,0,.167-.092l.075-.092c0-.042.075-.075.108-.125s0-.083.042-.117a1.118,1.118,0,0,0,.058-.15l.626-3.338a.849.849,0,0,0-1.669-.317l-.225,1.21A7.685,7.685,0,0,0,10.66,3,7.593,7.593,0,0,0,3,10.5a7.593,7.593,0,0,0,7.66,7.51,7.61,7.61,0,0,0,7.359-5.273.834.834,0,0,0-.584-1.043Z" transform="translate(-0.761 -0.253)" fill="#6a60da"/>
    </g>
  </g>
</svg>
`;

export const RetakeIcon = () => <SvgCss xml={xml} />;