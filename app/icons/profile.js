import * as React from "react"
import { SvgCss } from 'react-native-svg';
import { heightPercentageToDP } from "react-native-responsive-screen";

const inactiveXml = `
<svg xmlns="http://www.w3.org/2000/svg" width="${heightPercentageToDP('4.5%')}" height="${heightPercentageToDP('4.5%')}" viewBox="0 0 30 30"><defs><style>.a,.b{fill:#d0d0d0;}.a{opacity:0;}</style></defs><g transform="translate(0.836 0.836)"><g transform="translate(-0.836 -0.836)"><rect class="a" width="30" height="30"/><path class="b" d="M12.693,12.385A4.693,4.693,0,1,0,8,7.693,4.693,4.693,0,0,0,12.693,12.385Z" transform="translate(2.307 1.442)"/><path class="b" d="M20.251,22.385a1.173,1.173,0,0,0,1.173-1.173A8.212,8.212,0,1,0,5,21.212a1.173,1.173,0,0,0,1.173,1.173Z" transform="translate(1.788 3.173)"/></g></g></svg>
`;

const activeXml = `
<svg xmlns="http://www.w3.org/2000/svg" width="${heightPercentageToDP('4.5%')}" height="${heightPercentageToDP('4.5%')}" viewBox="0 0 30 30"><defs><style>.a{opacity:0;}.b{fill:#382d7c;}.c{fill:#6a60da;}</style></defs><rect class="a" width="30" height="30"/><path class="b" d="M13,13A5,5,0,1,0,8,8,5,5,0,0,0,13,13Z" transform="translate(2 0.75)"/><path class="c" d="M21.25,23a1.25,1.25,0,0,0,1.25-1.25,8.75,8.75,0,1,0-17.5,0A1.25,1.25,0,0,0,6.25,23Z" transform="translate(1.25 3.25)"/></svg>
`;

export const InactiveProfileIcon = () => <SvgCss xml={inactiveXml} />;
export const ActiveProfileIcon = () => <SvgCss xml={activeXml} />;