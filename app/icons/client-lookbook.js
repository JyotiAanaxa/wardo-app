import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><defs><style>.a{fill:none;}.b{fill:#30d5c8;}</style></defs><path class="a" d="M0,0H22V22H0Z"/><path class="b" d="M18.111,20h-12A3.131,3.131,0,0,1,3,16.85V4.7A2.683,2.683,0,0,1,5.667,2H18.111A.894.894,0,0,1,19,2.9V19.1A.894.894,0,0,1,18.111,20Zm-.889-1.8V15.5H6.111a1.35,1.35,0,0,0,0,2.7Z"/></svg>
`;

export const ClientLookbookIcon = () => <SvgCss xml={xml} />;