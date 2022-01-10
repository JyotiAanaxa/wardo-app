import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><defs><style>.a,.b{fill:#80838c;}.a{opacity:0;}</style></defs><g transform="translate(-0.104 -0.104)"><g transform="translate(0.001 0.001)"><rect class="a" width="28" height="28" transform="translate(0.104 0.103)"/><path class="b" d="M12.175,15.1a1.175,1.175,0,0,0,1.175-1.175V2.175a1.175,1.175,0,1,0-2.351,0V13.928A1.175,1.175,0,0,0,12.175,15.1Z" transform="translate(1.927 0.174)"/><path class="b" d="M19.148,3.13a1.177,1.177,0,1,0-1.081,2.092,9.4,9.4,0,1,1-8.627,0A1.177,1.177,0,1,0,8.359,3.13a11.753,11.753,0,1,0,10.789,0Z" transform="translate(0.349 0.525)"/></g></g></svg>
`;

export const LogoutIcon = () => <SvgCss xml={xml} />;