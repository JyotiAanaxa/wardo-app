import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="16.008" height="10.756" viewBox="0 0 16.008 10.756"><defs><style>.a{fill:#6a60da;}</style></defs><path class="a" d="M23.008,9v4.032a1.6,1.6,0,0,1-.6,1.25L16,19.405a1.6,1.6,0,0,1-2,0L7.6,14.283a1.6,1.6,0,0,1-.6-1.25V9l8,6.4Z" transform="translate(-7 -9)"/></svg>
`;

export const StylistDownIcon = () => <SvgCss xml={xml} />;
