import * as React from "react"
import { SvgCss } from 'react-native-svg';
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { widthIntoDP, heightIntoDP } from "../utils/app-util";

const xml = (height, width) => (`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${width}" height=${height} viewBox="0 0 302 140">
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectangle_2724" data-name="Rectangle 2724" width="302" height="140" rx="18" transform="translate(45 499)" fill="#eff8ff"/>
    </clipPath>
  </defs>
  <g id="Persoan_styling" data-name="Persoan; styling" transform="translate(-36 -499)">
    <rect id="Rectangle_2669" data-name="Rectangle 2669" width="302" height="140" rx="18" transform="translate(36 499)" fill="#eff8ff"/>
    <g id="Mask_Group_81" data-name="Mask Group 81" transform="translate(-9)" clip-path="url(#clip-path)">
      <rect id="Rectangle_2678" data-name="Rectangle 2678" width="160" height="160" rx="80" transform="translate(-17 526)" fill="#79beff"/>
      <g id="Rectangle_2728" data-name="Rectangle 2728" transform="translate(-7 536)" fill="none" stroke="#3ca1ff" stroke-width="1">
        <rect width="160" height="160" rx="80" stroke="none"/>
        <rect x="0.5" y="0.5" width="159" height="159" rx="79.5" fill="none"/>
      </g>
    </g>
  </g>
</svg>
`);

export const PersonalStylingIcon = ({ height = heightIntoDP(155), width = widthPercentageToDP('85%') }) => <SvgCss xml={xml(height, width)} />;