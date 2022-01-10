import * as React from "react"
import { SvgCss } from 'react-native-svg';

export const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="14.005" height="15.561" viewBox="0 0 14.005 15.561"><defs><style>.a{fill:#6a60da;}</style></defs><g transform="translate(-21.333)"><g transform="translate(21.333)"><path class="a" d="M33.782,1.556H30.526a2.319,2.319,0,0,0-4.38,0H22.889a1.556,1.556,0,0,0-1.556,1.556V14a1.556,1.556,0,0,0,1.556,1.556H33.782A1.556,1.556,0,0,0,35.338,14V3.112A1.556,1.556,0,0,0,33.782,1.556Zm-5.446,0a.778.778,0,1,1-.778.778A.778.778,0,0,1,28.335,1.556ZM26.779,12.449,23.667,9.337l1.1-1.1,2.011,2.011L31.9,5.123l1.1,1.1Z" transform="translate(-21.333)"/></g></g></svg>
`;

export const ClosetShopIcon = () => <SvgCss xml={xml} />;