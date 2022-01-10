import * as React from "react"
import { SvgCss } from 'react-native-svg';
import { heightPercentageToDP } from "react-native-responsive-screen";

const inactiveXml = `
<svg xmlns="http://www.w3.org/2000/svg" width="${heightPercentageToDP('3.3%')}" height="${heightPercentageToDP('3.3%')}" viewBox="0 0 22.004 22.004"><defs><style>.a{fill:#d0d0d0;}</style></defs><g transform="translate(0 0)"><path class="a" d="M21.55.454A1.538,1.538,0,0,0,20.1.041l-.007,0L2.817,4.272A3.688,3.688,0,0,0,0,7.862v2.281a1.549,1.549,0,0,0,1.481,1.546l6.5,1.106a.43.43,0,0,0,.376-.12l7.66-7.66a.688.688,0,0,1,.972.972l-7.66,7.66a.43.43,0,0,0-.12.376l1.106,6.5A1.549,1.549,0,0,0,11.862,22h2.281a3.688,3.688,0,0,0,3.59-2.817l4.229-17.28,0-.007A1.538,1.538,0,0,0,21.55.454Z" transform="translate(0 0)"/></g></svg>
`;

const activeXml = `
<svg id="Chat" xmlns="http://www.w3.org/2000/svg" width="${heightPercentageToDP('3.3%')}" height="${heightPercentageToDP('3.3%')}" viewBox="0 0 23.999 23.999">
  <path id="Path_6026" data-name="Path 6026" d="M619.141,11449.694l5.986-9.713,5.913.521-3.379,8.979-7.335,1.4Z" transform="translate(-610.141 -11435.981)" fill="#382d7c"/>
  <path id="Path_2347" data-name="Path 2347" d="M23.5.5a1.678,1.678,0,0,0-1.577-.45l-.008,0L3.073,4.659A4.022,4.022,0,0,0,0,8.575v2.487a1.689,1.689,0,0,0,1.615,1.686L8.7,13.954a.469.469,0,0,0,.41-.131l8.354-8.354A.75.75,0,0,1,18.529,6.53l-8.354,8.354a.469.469,0,0,0-.131.41l1.207,7.089A1.689,1.689,0,0,0,12.937,24h2.487a4.022,4.022,0,0,0,3.915-3.073L23.952,2.08l0-.008A1.677,1.677,0,0,0,23.5.5Z" transform="translate(0 0)" fill="#6a60da"/>
</svg>
`;

export const InactiveChatIcon = () => <SvgCss xml={inactiveXml} />;
export const ActiveChatIcon = () => <SvgCss xml={activeXml} />;