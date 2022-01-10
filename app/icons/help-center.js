import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><defs><style>.a,.b{fill:#80838c;}.a{opacity:0;}</style></defs><g transform="translate(0.167 0.167)"><rect class="a" width="28" height="28" transform="translate(-0.167 -0.167)"/><path class="b" d="M13.528,2A11.758,11.758,0,0,0,2,13.954v5.337A4.611,4.611,0,1,0,6.611,14.68a4.507,4.507,0,0,0-2.306.646V13.954a9.453,9.453,0,0,1,9.222-9.649,9.453,9.453,0,0,1,9.222,9.649v1.372a4.507,4.507,0,0,0-2.306-.646,4.611,4.611,0,1,0,4.611,4.611V13.954A11.758,11.758,0,0,0,13.528,2ZM6.611,16.986a2.306,2.306,0,1,1-2.306,2.306,2.306,2.306,0,0,1,2.306-2.306ZM20.444,21.6a2.306,2.306,0,1,1,2.306-2.306A2.306,2.306,0,0,1,20.444,21.6Z" transform="translate(0.305 0.306)"/></g></svg>
`;

export const HelpCenterIcon = () => <SvgCss xml={xml} />;