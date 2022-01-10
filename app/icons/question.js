import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
  <g id="Question_mark" data-name="Question mark" transform="translate(-0.318 -0.318)">
    <g id="question-mark">
      <rect id="Rectangle_3261" data-name="Rectangle 3261" width="22" height="22" transform="translate(22.318 22.318) rotate(180)" fill="#8b83ff" opacity="0"/>
      <path id="Path_7079" data-name="Path 7079" d="M16.432,8.716A4.716,4.716,0,1,0,7,8.716a.943.943,0,0,0,1.886,0,2.83,2.83,0,1,1,2.83,2.83.943.943,0,0,0-.943.943v1.886a.943.943,0,0,0,1.886,0V13.338A4.716,4.716,0,0,0,16.432,8.716Z" transform="translate(-0.398 -0.227)" fill="#8b83ff"/>
      <circle id="Ellipse_1399" data-name="Ellipse 1399" cx="1" cy="1" r="1" transform="translate(10.318 17.318)" fill="#8b83ff"/>
    </g>
  </g>
</svg>
`;

export const QuestionIcon = () => <SvgCss xml={xml} />;