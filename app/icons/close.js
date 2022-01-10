import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><style>.a,.b{fill:#1a1a1a;}.a{opacity:0;}</style></defs><rect class="a" width="24" height="24" transform="translate(24 24) rotate(180)"/><path class="b" d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,1,0,1.42,1.42L12,13.41l4.29,4.3a1,1,0,1,0,1.42-1.42Z"/></svg>
`;

export const CloseIcon = () => <SvgCss xml={xml} />;