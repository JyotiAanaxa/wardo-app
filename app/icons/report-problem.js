import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><style>.a,.b{fill:#80838c;}.a{opacity:0;}</style></defs><rect class="a" width="24" height="24" transform="translate(24) rotate(90)"/><path class="b" d="M22.56,16.3,14.89,3.58a3.43,3.43,0,0,0-5.78,0L1.44,16.3a3,3,0,0,0-.05,3A3.37,3.37,0,0,0,4.33,21H19.67a3.37,3.37,0,0,0,2.94-1.66,3,3,0,0,0-.05-3.04Zm-1.7,2.05a1.31,1.31,0,0,1-1.19.65H4.33a1.31,1.31,0,0,1-1.19-.65,1,1,0,0,1,0-1L10.82,4.62a1.48,1.48,0,0,1,2.36,0l7.67,12.72a1,1,0,0,1,.01,1.01Z"/><circle class="b" cx="1" cy="1" r="1" transform="translate(11 15)"/><path class="b" d="M12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"/></svg>
`;

export const ReportProblemIcon = () => <SvgCss xml={xml} />;