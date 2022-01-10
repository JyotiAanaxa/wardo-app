import * as React from "react"
import { SvgCss } from 'react-native-svg';

export const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><style>.a,.b{fill:#6a60da;}.a{opacity:0;}</style></defs><rect class="a" width="24" height="24"/><rect class="b" width="16" height="2" rx="1" transform="translate(4 18)"/><rect class="b" width="4" height="2" rx="1" transform="translate(4 20) rotate(-90)"/><rect class="b" width="4" height="2" rx="1" transform="translate(18 20) rotate(-90)"/><path class="b" d="M12,15a1,1,0,0,1-.58-.18L7.42,12a1,1,0,1,1,1.16-1.63L12,12.76l3.4-2.56a1,1,0,1,1,1.2,1.6l-4,3a1,1,0,0,1-.6.2Z"/><path class="b" d="M12,13a1,1,0,0,1-1-1V4a1,1,0,0,1,2,0v8A1,1,0,0,1,12,13Z"/></svg>
`;

export const DownloadIcon = () => <SvgCss xml={xml} />;
