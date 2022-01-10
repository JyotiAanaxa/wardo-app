import * as React from "react"
import { SvgCss } from 'react-native-svg';
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { heightIntoDP, widthIntoDP } from "../utils/app-util";

const xml = (height, width) => (`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="${width}" height=${height} viewBox="0 0 302 140">
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectangle_2722" data-name="Rectangle 2722" width="302" height="140" rx="18" transform="translate(45 819)" fill="#fff7e0"/>
    </clipPath>
  </defs>
  <g id="Commercial_Styling" data-name="Commercial Styling" transform="translate(-36 -819)">
    <rect id="Rectangle_2700" data-name="Rectangle 2700" width="302" height="140" rx="18" transform="translate(36 819)" fill="#ede9ff"/>
    <g id="Mask_Group_79" data-name="Mask Group 79" transform="translate(-9)" clip-path="url(#clip-path)">
      <rect id="Rectangle_2702" data-name="Rectangle 2702" width="160" height="160" rx="80" transform="translate(-17 846)" fill="#bcb2f1"/>
      <g id="Rectangle_2726" data-name="Rectangle 2726" transform="translate(-7 856)" fill="none" stroke="#6a60da" stroke-width="1">
        <rect width="160" height="160" rx="80" stroke="none"/>
        <rect x="0.5" y="0.5" width="159" height="159" rx="79.5" fill="none"/>
      </g>
    </g>
  </g>
</svg>
`);

export const CommercialStylingIcon = ({ height = heightIntoDP(155), width = widthPercentageToDP('85%') }) => <SvgCss xml={xml(height, width)} />;