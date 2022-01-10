import * as React from "react"
import { SvgCss } from 'react-native-svg';
import { widthIntoDP, heightIntoDP } from "../utils/app-util";
import { widthPercentageToDP } from "react-native-responsive-screen";

const xml = (height, width) => (`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${width}" height=${height} viewBox="0 0 302 140">
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectangle_2723" data-name="Rectangle 2723" width="302" height="140" rx="18" transform="translate(45 659)" fill="#f9eaf0"/>
    </clipPath>
  </defs>
  <g id="Makeup_Styling" data-name="Makeup Styling" transform="translate(-36 -659)">
    <rect id="Rectangle_2697" data-name="Rectangle 2697" width="302" height="140" rx="18" transform="translate(36 659)" fill="#f9eaf0"/>
    <g id="Mask_Group_80" data-name="Mask Group 80" transform="translate(-9)" clip-path="url(#clip-path)">
      <rect id="Rectangle_2699" data-name="Rectangle 2699" width="160" height="160" rx="80" transform="translate(-17 686)" fill="#ef709d"/>
      <g id="Rectangle_2727" data-name="Rectangle 2727" transform="translate(-7 696)" fill="none" stroke="#f02d72" stroke-width="1">
        <rect width="160" height="160" rx="80" stroke="none"/>
        <rect x="0.5" y="0.5" width="159" height="159" rx="79.5" fill="none"/>
      </g>
    </g>
  </g>
</svg>
`);

export const MakeUpStylingIcon = ({ height = heightIntoDP(155), width = widthPercentageToDP('85%') }) => <SvgCss xml={xml(height, width)} />;