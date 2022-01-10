import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><defs><style>.a,.b{fill:#80838c;}.a{opacity:0;}</style></defs><g transform="translate(-0.271 -0.271)"><rect class="a" width="28" height="28" transform="translate(0.271 0.271)"/><path class="b" d="M13.7,25.582a2.379,2.379,0,0,1-1.189-.3l-.357-.2A18.042,18.042,0,0,1,3,9.384V9.218A2.379,2.379,0,0,1,4.189,7.137l8.325-4.686a2.379,2.379,0,0,1,2.379,0l8.325,4.686a2.379,2.379,0,0,1,1.189,2.081v.167a18.042,18.042,0,0,1-9.181,15.7l-.357.2A2.379,2.379,0,0,1,13.7,25.582Zm0-21.05L5.379,9.218v.167A15.639,15.639,0,0,0,13.347,23l.357.2.357-.2A15.639,15.639,0,0,0,22.029,9.384V9.218Z" transform="translate(0.568 0.404)"/></g></svg>
`;

export const PolicyIcon = () => <SvgCss xml={xml} />;