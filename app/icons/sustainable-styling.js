import * as React from "react"
import { SvgCss } from 'react-native-svg';
import { heightIntoDP, widthIntoDP } from "../utils/app-util";
import { widthPercentageToDP } from "react-native-responsive-screen";

const xml = (height, width) => (
  `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${width}" height=${height} viewBox="0 0 302 140">
      <defs>
        <clipPath id="clip-path">
          <rect id="Rectangle_2721" data-name="Rectangle 2721" width="302" height="140" rx="18" transform="translate(45 979)" fill="azure"/>
        </clipPath>
      </defs>
      <g id="Sustainable_Styling" data-name="Sustainable Styling" transform="translate(-36 -979)">
        <rect id="Rectangle_2703" data-name="Rectangle 2703" width="302" height="140" rx="18" transform="translate(36 979)" fill="azure"/>
        <g id="Mask_Group_78" data-name="Mask Group 78" transform="translate(-9)" clip-path="url(#clip-path)">
          <rect id="Rectangle_2705" data-name="Rectangle 2705" width="160" height="160" rx="80" transform="translate(-17 1006)" fill="#35c0c4"/>
          <g id="Rectangle_2725" data-name="Rectangle 2725" transform="translate(-7 1016)" fill="none" stroke="#289296" stroke-width="1">
            <rect width="160" height="160" rx="80" stroke="none"/>
            <rect x="0.5" y="0.5" width="159" height="159" rx="79.5" fill="none"/>
          </g>
        </g>
      </g>
    </svg>
    `);

export const SustainableStylingIcon = ({ height = heightIntoDP(155), width = widthPercentageToDP('85%') }) => <SvgCss xml={xml(height, width)} />;