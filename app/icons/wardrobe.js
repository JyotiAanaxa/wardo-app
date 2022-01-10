import * as React from "react"
import { SvgCss } from 'react-native-svg';
import { heightPercentageToDP } from "react-native-responsive-screen";


const inactiveXml = `
<svg xmlns="http://www.w3.org/2000/svg" width="${heightPercentageToDP('3.8%')}" height="${heightPercentageToDP('3.8%')}" viewBox="0 0 17.253 25.15"><defs><style>.a{fill:#d0d0d0;}</style></defs><g transform="translate(9.366)"><g transform="translate(0)"><path class="a" d="M276.781,0h-5.645V17.531h7.879V2.234A2.237,2.237,0,0,0,276.781,0Zm-3.473,10.54a.743.743,0,0,1-1.487,0V8.478a.743.743,0,0,1,1.487,0Z" transform="translate(-271.136)"/></g></g><g transform="translate(0)"><path class="a" d="M82.693,0a2.237,2.237,0,0,0-2.234,2.234v15.3h7.88V0Zm4.96,10.54a.743.743,0,0,1-1.487,0V8.478a.743.743,0,0,1,1.487,0Z" transform="translate(-80.459)"/></g><g transform="translate(0 19.017)"><path class="a" d="M80.458,387.152v2.284a2.237,2.237,0,0,0,2.234,2.234h.277v.872a.743.743,0,0,0,1.487,0v-.872h9.25v.872a.743.743,0,0,0,1.487,0v-.872h.277a2.237,2.237,0,0,0,2.234-2.234v-2.284Zm9.465,2.259H88.238a.743.743,0,0,1,0-1.487h1.685a.743.743,0,0,1,0,1.487Z" transform="translate(-80.458 -387.152)"/></g></svg>
`;

const activeXml = `
<svg id="Wardrobe" xmlns="http://www.w3.org/2000/svg" width="${heightPercentageToDP('3.8%')}" height="${heightPercentageToDP('3.8%')}" viewBox="0 0 17.253 25.152">
  <g id="Group_1791" data-name="Group 1791" transform="translate(9.366)">
    <g id="Group_1790" data-name="Group 1790" transform="translate(0)">
      <path id="Path_2318" data-name="Path 2318" d="M276.781,0h-5.645V17.531h7.879V2.234A2.237,2.237,0,0,0,276.781,0Zm-3.473,10.54a.743.743,0,0,1-1.487,0V8.478a.743.743,0,0,1,1.487,0Z" transform="translate(-271.136)" fill="#382d7c"/>
    </g>
  </g>
  <g id="Group_1793" data-name="Group 1793" transform="translate(0)">
    <g id="Group_1792" data-name="Group 1792">
      <path id="Path_2319" data-name="Path 2319" d="M82.693,0a2.237,2.237,0,0,0-2.234,2.234v15.3h7.88V0Zm4.96,10.54a.743.743,0,0,1-1.487,0V8.478a.743.743,0,0,1,1.487,0Z" transform="translate(-80.459)" fill="#6a60da"/>
    </g>
  </g>
  <g id="Group_1795" data-name="Group 1795" transform="translate(0 19.017)">
    <g id="Group_1794" data-name="Group 1794">
      <path id="Path_2320" data-name="Path 2320" d="M80.458,387.152v2.284a2.237,2.237,0,0,0,2.234,2.234h.277v.872a.743.743,0,0,0,1.487,0v-.872h9.25v.872a.743.743,0,0,0,1.487,0v-.872h.277a2.237,2.237,0,0,0,2.234-2.234v-2.284Zm9.465,2.259H88.238a.743.743,0,0,1,0-1.487h1.685a.743.743,0,1,1,0,1.487Z" transform="translate(-80.458 -387.152)" fill="#6a60da"/>
    </g>
  </g>
</svg>
`;

export const InactiveWardrobeIcon = () => <SvgCss xml={inactiveXml} />;
export const ActiveWardrobeIcon = () => <SvgCss xml={activeXml} />;