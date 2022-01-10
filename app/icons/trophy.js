import * as React from "react"
import { SvgCss } from 'react-native-svg';
import { heightPercentageToDP } from "react-native-responsive-screen";

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><defs><style>.a{fill:none;}.b{fill:#6a60da;}</style></defs><path class="a" d="M0,0H16V16H0Z"/><path class="b" d="M9,12.293v1.375h3.333V15h-8V13.668H7.667V12.293A5.334,5.334,0,0,1,3,7V3H13.667V7A5.334,5.334,0,0,1,9,12.293ZM1,4.333H2.333V7H1Zm13.334,0h1.333V7H14.334Z" transform="translate(-0.334 -1.001)"/></svg>
`;

export const TrophyIcon = () => <SvgCss xml={xml} />;