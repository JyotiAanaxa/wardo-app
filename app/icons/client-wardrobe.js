import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="13.711" height="19.996" viewBox="0 0 13.711 19.996"><defs><style>.a{fill:#6a60da;}</style></defs><g transform="translate(1.429 1.429)"><g transform="translate(6.018 -1.429)"><g transform="translate(0)"><path class="a" d="M275.624,0h-4.488V13.938H277.4V1.776A1.778,1.778,0,0,0,275.624,0Zm-2.762,8.38a.591.591,0,0,1-1.182,0V6.74a.591.591,0,0,1,1.182,0Z" transform="translate(-271.136)"/></g></g><g transform="translate(-1.429 -1.429)"><path class="a" d="M82.235,0a1.778,1.778,0,0,0-1.776,1.776V13.938h6.265V0Zm3.944,8.38A.591.591,0,0,1,85,8.38V6.74a.591.591,0,0,1,1.182,0Z" transform="translate(-80.459)"/></g><g transform="translate(-1.429 13.691)"><path class="a" d="M80.458,387.152v1.816a1.778,1.778,0,0,0,1.776,1.776h.221v.693a.591.591,0,0,0,1.182,0v-.693h7.354v.693a.591.591,0,0,0,1.182,0v-.693h.22a1.778,1.778,0,0,0,1.776-1.776v-1.816Zm7.525,1.8h-1.34a.591.591,0,1,1,0-1.182h1.34a.591.591,0,1,1,0,1.182Z" transform="translate(-80.458 -387.152)"/></g></g></svg>
`;

export const ClientWardrobeIcon = () => <SvgCss xml={xml} />;