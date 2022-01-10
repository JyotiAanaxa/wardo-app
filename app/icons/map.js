import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><defs><style>.a,.b{fill:#6a60da;}.a{opacity:0;}</style></defs><g transform="translate(-0.14 -0.14)"><g transform="translate(-0.138 -0.138)"><rect class="a" width="16" height="16" transform="translate(0.278 0.278)"/><circle class="b" cx="1.019" cy="1.019" r="1.019" transform="translate(7.259 5.561)"/><path class="b" d="M9.434,2A5.434,5.434,0,0,0,4,7.38c0,3.722,4.789,7.865,4.992,8.042a.679.679,0,0,0,.883,0c.238-.177,4.992-4.32,4.992-8.042A5.434,5.434,0,0,0,9.434,2Zm0,7.472a2.377,2.377,0,1,1,2.377-2.377A2.377,2.377,0,0,1,9.434,9.472Z" transform="translate(-1.156 -0.515)"/></g></g></svg>
`;

export const MapIcon = () => <SvgCss xml={xml} />;