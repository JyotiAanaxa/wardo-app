import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><style>.a,.b{fill:#b0b0b0;}.a{opacity:0;}</style></defs><rect class="a" width="24" height="24"/><path class="b" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"/></svg>
`;

export const InactiveCheckBoxIcon = () => <SvgCss xml={xml} />;