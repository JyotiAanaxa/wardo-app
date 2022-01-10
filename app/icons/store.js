import * as React from "react"
import { SvgCss } from 'react-native-svg';
import { heightPercentageToDP } from "react-native-responsive-screen";

const inactiveXml = `
<svg xmlns="http://www.w3.org/2000/svg" width="${heightPercentageToDP('4.5%')}" height="${heightPercentageToDP('4.5%')}" viewBox="0 0 30 30"><defs><style>.a,.c{fill:#d0d0d0;}.a{opacity:0;}.b{fill:#fff;}</style></defs><g transform="translate(0.354 0.354)"><g transform="translate(-0.354 -0.354)"><rect class="a" width="30" height="30"/><path class="b" d="M9.771,12.759,9,18.89a37.187,37.187,0,0,0,4.522,2.683c.613.077,8.276-.23,8.354-.767s.689-6.744.689-6.744-3.756-2.375-4.675-2.375S9.771,12.759,9.771,12.759Z"/><path class="c" d="M23.84,7.516,20.4,4.071A3.652,3.652,0,0,0,17.815,3H10.1A3.652,3.652,0,0,0,7.516,4.071L4.071,7.516A3.652,3.652,0,0,0,3,10.1V21.26a3.652,3.652,0,0,0,3.652,3.652H21.26a3.652,3.652,0,0,0,3.652-3.652V10.1A3.652,3.652,0,0,0,23.84,7.516ZM13.956,18.825a4.869,4.869,0,0,1-4.869-4.869,1.217,1.217,0,0,1,2.435,0,2.435,2.435,0,1,0,4.869,0,1.217,1.217,0,0,1,2.435,0A4.869,4.869,0,0,1,13.956,18.825ZM7.151,7.869,9.233,5.788a1.278,1.278,0,0,1,.864-.353h7.718a1.278,1.278,0,0,1,.864.353l2.082,2.082Z" transform="translate(1.044 1.044)"/></g></g></svg>
`;

const activeXml = `
<svg xmlns="http://www.w3.org/2000/svg" width="${heightPercentageToDP('4.5%')}" height="${heightPercentageToDP('4.5%')}" viewBox="0 0 30 30"><defs><style>.a{fill:#d0d0d0;opacity:0;}.b{fill:#382d7c;}.c{fill:#6a60da;}</style></defs><g transform="translate(0.354 0.354)"><g transform="translate(-0.354 -0.354)"><rect class="a" width="30" height="30"/><path class="b" d="M9.771,12.759,9,18.89a37.187,37.187,0,0,0,4.522,2.683c.613.077,8.276-.23,8.354-.767s.689-6.744.689-6.744-3.756-2.375-4.675-2.375S9.771,12.759,9.771,12.759Z"/><path class="c" d="M23.84,7.516,20.4,4.071A3.652,3.652,0,0,0,17.815,3H10.1A3.652,3.652,0,0,0,7.516,4.071L4.071,7.516A3.652,3.652,0,0,0,3,10.1V21.26a3.652,3.652,0,0,0,3.652,3.652H21.26a3.652,3.652,0,0,0,3.652-3.652V10.1A3.652,3.652,0,0,0,23.84,7.516ZM13.956,18.825a4.869,4.869,0,0,1-4.869-4.869,1.217,1.217,0,0,1,2.435,0,2.435,2.435,0,1,0,4.869,0,1.217,1.217,0,0,1,2.435,0A4.869,4.869,0,0,1,13.956,18.825ZM7.151,7.869,9.233,5.788a1.278,1.278,0,0,1,.864-.353h7.718a1.278,1.278,0,0,1,.864.353l2.082,2.082Z" transform="translate(1.044 1.044)"/></g></g></svg>
`;

export const InactiveStoreIcon = () => <SvgCss xml={inactiveXml} />;
export const ActiveStoreIcon = () => <SvgCss xml={activeXml} />;