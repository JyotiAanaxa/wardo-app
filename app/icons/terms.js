import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><defs><style>.a,.b{fill:#80838c;}.a{opacity:0;}</style></defs><g transform="translate(-0.061 -0.061)"><rect class="a" width="28" height="28" transform="translate(0.061 0.061)"/><path class="b" d="M16.2,16H9.172a1.172,1.172,0,1,0,0,2.343H16.2A1.172,1.172,0,1,0,16.2,16Z" transform="translate(1.374 2.747)"/><path class="b" d="M9.172,14.343h3.515a1.172,1.172,0,1,0,0-2.343H9.172a1.172,1.172,0,0,0,0,2.343Z" transform="translate(1.374 2.061)"/><path class="b" d="M22.443,9.417l-6.374-7.03A1.172,1.172,0,0,0,15.2,2H7A2.964,2.964,0,0,0,4,4.929V22.5a2.964,2.964,0,0,0,3,2.929H19.748a2.964,2.964,0,0,0,3-2.929V10.2a1.172,1.172,0,0,0-.3-.785Zm-6.726-3.9,3.21,3.515H16.584a.926.926,0,0,1-.867-1Zm4.031,17.576H7a.621.621,0,0,1-.656-.586V4.929A.621.621,0,0,1,7,4.343h6.374V8.034a3.269,3.269,0,0,0,3.175,3.339H20.4V22.5a.621.621,0,0,1-.656.586Z" transform="translate(0.687 0.343)"/></g></svg>
`;

export const TermsIcon = () => <SvgCss xml={xml} />;