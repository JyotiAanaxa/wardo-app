import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><defs><style>.a{fill:none;}.b{fill:#6a60da;}</style></defs><path class="a" d="M0,0H16V16H0Z"/><path class="b" d="M9.023,5.359,11.6,7.94,5.581,13.963H3V11.381L9.023,5.358Zm.86-.86,1.29-1.291a.608.608,0,0,1,.86,0l1.721,1.721a.608.608,0,0,1,0,.86l-1.291,1.29Z" transform="translate(-0.479 -0.484)"/></svg>
`;

export const FillPencilIcon = () => <SvgCss xml={xml} />;