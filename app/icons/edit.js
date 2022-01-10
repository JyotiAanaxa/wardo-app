import * as React from "react"
import { SvgCss } from 'react-native-svg';

export const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><defs><style>.a,.b{fill:#1a1a1a;}.a{opacity:0;}</style></defs><g transform="translate(-0.382 -0.382)"><g transform="translate(0.382 0.382)"><rect class="a" width="18" height="18"/><path class="b" d="M15.99,6.613,13.857,4.48a1.557,1.557,0,0,0-2.071-.055L4.778,11.433a1.557,1.557,0,0,0-.444.942L4,15.622a.777.777,0,0,0,.779.849h.07l3.247-.3a1.557,1.557,0,0,0,.942-.444l7.008-7.008a1.5,1.5,0,0,0-.055-2.11Zm-2.647,2.6L11.256,7.127,12.774,5.57,14.9,7.7Z" transform="translate(-1.228 -1.242)"/></g></g></svg>
`;

export const EditIcon = () => <SvgCss xml={xml} />;