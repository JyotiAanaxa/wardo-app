import * as React from "react"
import { SvgCss } from 'react-native-svg';
import { heightPercentageToDP } from "react-native-responsive-screen";

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><defs><style>.a,.b{fill:#6a60da;}.a{opacity:0;}</style></defs><g transform="translate(0.176 0.176)"><rect class="a" width="16" height="16" transform="translate(-0.176 -0.176)"/><path class="b" d="M19.69,4.163a.652.652,0,0,0-.919.059l-1.219,1.4-.411-.463a.654.654,0,0,0-.978.867l.906,1.017a.649.649,0,0,0,.972-.007l1.7-1.956a.652.652,0,0,0-.052-.919Z" transform="translate(-5.567 -1.392)"/><path class="b" d="M8.608,8.216A2.608,2.608,0,1,0,6,5.608,2.608,2.608,0,0,0,8.608,8.216Z" transform="translate(-2.088 -1.044)"/><path class="b" d="M11.476,18.216a.652.652,0,0,0,.652-.652,4.564,4.564,0,1,0-9.128,0,.652.652,0,0,0,.652.652" transform="translate(-1.044 -4.524)"/></g></svg>
`;

export const ProfileCheckIcon = () => <SvgCss xml={xml} />;