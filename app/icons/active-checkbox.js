import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><style>.a,.b{fill:#6a60da;}.a{opacity:0;}</style></defs><rect class="a" width="24" height="24"/><path class="b" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm4.3,7.61-4.57,6a1,1,0,0,1-1.58.01L7.71,12.51a1,1,0,0,1,1.58-1.23l1.63,2.08,3.78-5a1.006,1.006,0,1,1,1.6,1.22Z" transform="translate(0 0)"/></svg>
`;

export const ActiveCheckBoxIcon = () => <SvgCss xml={xml} />;