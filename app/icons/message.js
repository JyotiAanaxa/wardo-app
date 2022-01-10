import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="14.884" height="14.884" viewBox="0 0 14.884 14.884"><defs><style>.a{fill:#fff;}</style></defs><g transform="translate(-2.451 -2.451)"><path class="a" d="M14.577.307A1.04,1.04,0,0,0,13.6.028h0L1.906,2.89A2.494,2.494,0,0,0,0,5.318V6.861A1.048,1.048,0,0,0,1,7.906l4.4.748a.291.291,0,0,0,.254-.081l5.181-5.181a.465.465,0,1,1,.658.658L6.31,9.231a.291.291,0,0,0-.081.254l.748,4.4a1.048,1.048,0,0,0,1.046,1H9.566a2.494,2.494,0,0,0,2.428-1.906L14.855,1.29v0a1.04,1.04,0,0,0-.279-.978Z" transform="translate(2.451 2.451)"/></g></svg>
`;

export const MessageIcon = () => <SvgCss xml={xml} />;