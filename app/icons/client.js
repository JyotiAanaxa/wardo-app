import * as React from "react"
import { SvgCss } from 'react-native-svg';
import { heightPercentageToDP } from "react-native-responsive-screen";

const inactiveXml = `
<svg xmlns="http://www.w3.org/2000/svg" width="${heightPercentageToDP('4.1%')}" height="${heightPercentageToDP('4.1%')}" viewBox="0 0 30 30"><defs><style>.a,.b{fill:#d0d0d0;}.a{opacity:0;}</style></defs><rect class="a" width="30" height="30"/><path class="b" d="M10,13A5,5,0,1,0,5,8,5,5,0,0,0,10,13Z" transform="translate(1.25 0.75)"/><path class="b" d="M17.75,14.5A3.75,3.75,0,1,0,14,10.75,3.75,3.75,0,0,0,17.75,14.5Z" transform="translate(3.5 1.75)"/><path class="b" d="M25.75,21.748A1.25,1.25,0,0,0,27,20.5,6.25,6.25,0,0,0,16.925,15.56,8.75,8.75,0,0,0,2,21.748,1.25,1.25,0,0,0,3.25,23h15a1.25,1.25,0,0,0,1.25-1.25" transform="translate(0.5 3.252)"/></svg>
`;

const activeXml = `
<svg xmlns="http://www.w3.org/2000/svg" width="${heightPercentageToDP('4.1%')}" height="${heightPercentageToDP('4.1%')}" viewBox="0 0 30 30"><defs><style>.a{fill:#d0d0d0;opacity:0;}.b{fill:#382d7c;}.c{fill:#6a60da;}</style></defs><rect class="a" width="30" height="30"/><path class="b" d="M10,13A5,5,0,1,0,5,8,5,5,0,0,0,10,13Z" transform="translate(1.25 0.75)"/><path class="b" d="M17.75,14.5A3.75,3.75,0,1,0,14,10.75,3.75,3.75,0,0,0,17.75,14.5Z" transform="translate(3.5 1.75)"/><path class="c" d="M25.75,21.748A1.25,1.25,0,0,0,27,20.5,6.25,6.25,0,0,0,16.925,15.56,8.75,8.75,0,0,0,2,21.748,1.25,1.25,0,0,0,3.25,23h15a1.25,1.25,0,0,0,1.25-1.25" transform="translate(0.5 3.252)"/></svg>
`;

export const InactiveClientIcon = () => <SvgCss xml={inactiveXml} />;
export const ActiveClientIcon = () => <SvgCss xml={activeXml} />;