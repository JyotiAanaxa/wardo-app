import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <g id="All_Button_Icon" data-name="All Button Icon" transform="translate(-55 -150)">
    <rect id="Rectangle_2294" data-name="Rectangle 2294" width="6" height="6" rx="1.5" transform="translate(55 150)" fill="#6a60da"/>
    <rect id="Rectangle_2299" data-name="Rectangle 2299" width="6" height="6" rx="1.5" transform="translate(55 159)" fill="#6a60da"/>
    <rect id="Rectangle_2302" data-name="Rectangle 2302" width="6" height="6" rx="1.5" transform="translate(55 168)" fill="#6a60da"/>
    <rect id="Rectangle_2295" data-name="Rectangle 2295" width="6" height="6" rx="1.5" transform="translate(64 150)" fill="#6a60da"/>
    <rect id="Rectangle_2298" data-name="Rectangle 2298" width="6" height="6" rx="1.5" transform="translate(64 159)" fill="#6a60da"/>
    <rect id="Rectangle_2301" data-name="Rectangle 2301" width="6" height="6" rx="1.5" transform="translate(64 168)" fill="#6a60da"/>
    <rect id="Rectangle_2296" data-name="Rectangle 2296" width="6" height="6" rx="1.5" transform="translate(73 150)" fill="#6a60da"/>
    <rect id="Rectangle_2297" data-name="Rectangle 2297" width="6" height="6" rx="1.5" transform="translate(73 159)" fill="#6a60da"/>
    <rect id="Rectangle_2300" data-name="Rectangle 2300" width="6" height="6" rx="1.5" transform="translate(73 168)" fill="#6a60da"/>
  </g>
</svg>
`;

export const AllIcon = () => <SvgCss xml={xml} />;
