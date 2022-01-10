import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><defs><style>.a,.b{fill:#fff;}.a{opacity:0;}</style></defs><g transform="translate(0 0)"><rect class="a" width="12" height="12" transform="translate(12 12) rotate(180)"/><path class="b" d="M11.86,7.668H8.716V4.524a.524.524,0,0,0-1.048,0V7.668H4.524a.524.524,0,0,0,0,1.048H7.668V11.86a.524.524,0,1,0,1.048,0V8.716H11.86a.524.524,0,1,0,0-1.048Z" transform="translate(-2.192 -2.192)"/></g></svg>
`;

export const WhitePlusIcon = () => <SvgCss xml={xml} />;