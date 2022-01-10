import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="214.515" height="154.596" viewBox="0 0 214.515 154.596">
  <defs>
    <filter id="check" x="30.434" y="25.887" width="154.134" height="128.709" filterUnits="userSpaceOnUse">
      <feOffset dy="4" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="10" result="blur"/>
      <feFlood flood-opacity="0.141"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Confetti_tick_" data-name="Confetti &amp; tick " transform="translate(-80 -269)">
    <g transform="matrix(1, 0, 0, 1, 80, 269)" filter="url(#check)">
      <path id="check-2" data-name="check" d="M74.092,6,25.9,54.188,4,32.285" transform="translate(68.46 57.91)" fill="none" stroke="#6a60da" stroke-linecap="round" stroke-linejoin="round" stroke-width="17"/>
    </g>
    <g id="Layer_2" data-name="Layer 2" transform="translate(227 269)">
      <g id="Layer_1" data-name="Layer 1">
        <rect id="Rectangle_2931" data-name="Rectangle 2931" width="13.4" height="5.922" transform="translate(19.696 62.913) rotate(-54.902)" fill="#382d7c"/>
        <rect id="Rectangle_2932" data-name="Rectangle 2932" width="17.619" height="10.364" transform="translate(14.854 38.48) rotate(-61.713)" fill="#ef709d"/>
        <rect id="Rectangle_2933" data-name="Rectangle 2933" width="14.806" height="5.922" transform="matrix(0.8, -0.6, 0.6, 0.8, 52.117, 60.268)" fill="#ef709d"/>
        <rect id="Rectangle_2934" data-name="Rectangle 2934" width="9.92" height="5.922" transform="matrix(0.432, -0.902, 0.902, 0.432, 0, 8.945)" fill="#79beff"/>
        <rect id="Rectangle_2935" data-name="Rectangle 2935" width="6.589" height="3.923" transform="matrix(0.429, -0.903, 0.903, 0.429, 44.769, 15.587)" fill="#fae24a"/>
      </g>
    </g>
    <g id="Layer_2-2" data-name="Layer 2" transform="translate(80 269)">
      <g id="Layer_1-2" data-name="Layer 1" transform="translate(0)">
        <rect id="Rectangle_2931-2" data-name="Rectangle 2931" width="13.4" height="5.922" transform="matrix(-0.575, -0.818, 0.818, -0.575, 42.974, 66.318)" fill="#382d7c"/>
        <rect id="Rectangle_2932-2" data-name="Rectangle 2932" width="17.619" height="10.364" transform="translate(43.534 43.392) rotate(-118.287)" fill="#ef709d"/>
        <rect id="Rectangle_2933-2" data-name="Rectangle 2933" width="14.806" height="5.922" transform="matrix(-0.8, -0.6, 0.6, -0.8, 11.845, 65.006)" fill="#ef709d"/>
        <rect id="Rectangle_2934-2" data-name="Rectangle 2934" width="9.92" height="5.922" transform="translate(62.175 11.505) rotate(-115.614)" fill="#79beff"/>
        <rect id="Rectangle_2935-2" data-name="Rectangle 2935" width="6.589" height="3.923" transform="matrix(-0.429, -0.903, 0.903, -0.429, 19.202, 17.27)" fill="#fae24a"/>
      </g>
    </g>
  </g>
</svg>
`;

export const ApplicationSubmitIcon = () => <SvgCss xml={xml} />;