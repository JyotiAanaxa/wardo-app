import * as React from "react"
import { SvgCss } from 'react-native-svg';

export const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><defs><style>.a,.b{fill:#1a1a1a;}.a{opacity:0;}</style></defs><g transform="translate(-0.229 -0.229)"><rect class="a" width="12" height="12" transform="translate(0.229 0.229)"/><rect class="b" width="8" height="1" rx="0.5" transform="translate(2.229 9.229)"/><rect class="b" width="2" height="1" rx="0.5" transform="translate(2.229 10.229) rotate(-90)"/><rect class="b" width="2" height="1" rx="0.5" transform="translate(9.229 10.229) rotate(-90)"/><path class="b" d="M9.594,12.6a.519.519,0,0,1-.3-.093L7.217,11.038a.519.519,0,1,1,.6-.846l1.775,1.241L11.359,10.1a.519.519,0,1,1,.623.83L9.906,12.491a.519.519,0,0,1-.311.1Z" transform="translate(-3.366 -4.81)"/><path class="b" d="M11.519,8.19A.519.519,0,0,1,11,7.671V3.519a.519.519,0,0,1,1.038,0V7.671A.519.519,0,0,1,11.519,8.19Z" transform="translate(-5.291 -1.443)"/></g></svg>
`;

export const SaveIcon = () => <SvgCss xml={xml} />;