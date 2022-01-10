import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><defs><style>.a,.b{fill:#80838c;}.a{opacity:0;}</style></defs><g transform="translate(0.1 0.1)"><rect class="a" width="28" height="28" transform="translate(-0.1 -0.1)"/><path class="b" d="M12.633,12.267A4.633,4.633,0,1,0,8,7.633,4.633,4.633,0,0,0,12.633,12.267Zm0-6.95a2.317,2.317,0,1,1-2.317,2.317A2.317,2.317,0,0,1,12.633,5.317Z" transform="translate(1.267 0.475)"/><path class="b" d="M13.109,13A8.109,8.109,0,0,0,5,21.109a1.158,1.158,0,1,0,2.317,0,5.792,5.792,0,1,1,11.584,0,1.158,1.158,0,1,0,2.317,0A8.109,8.109,0,0,0,13.109,13Z" transform="translate(0.792 2.059)"/></g></svg>
`;

export const AccountIcon = () => <SvgCss xml={xml} />;