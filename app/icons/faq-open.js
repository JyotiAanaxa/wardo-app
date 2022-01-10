import * as React from "react"
import { SvgCss } from 'react-native-svg';

export const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><style>.a,.b{fill:#6a60da;}.a{opacity:0;}</style></defs><rect class="a" width="24" height="24" transform="translate(24 24) rotate(180)"/><path class="b" d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"/></svg>
`;

export const FaqOpenIcon = () => <SvgCss xml={xml} />;