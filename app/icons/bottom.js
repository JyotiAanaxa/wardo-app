import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><defs><style>.a{fill:#6a60da;}</style></defs><path class="a" d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22ZM15,7H12.481a1,1,0,0,0-.781.375l-3.2,4a1,1,0,0,0,0,1.249l3.2,4a1,1,0,0,0,.781.376H15l-4-5Z" transform="translate(-2 22) rotate(-90)"/></svg>`;
export const BottomIcon = () => <SvgCss xml={xml} />;