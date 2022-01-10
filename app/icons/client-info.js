import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="16.2" height="16.2" viewBox="0 0 16.2 16.2"><defs><style>.a{fill:#ffcb0c;}.b{fill:#fafafa;}</style></defs><path class="a" d="M14.344,0H1.856A1.858,1.858,0,0,0,0,1.856V14.344A1.858,1.858,0,0,0,1.856,16.2H14.344A1.858,1.858,0,0,0,16.2,14.344V1.856A1.858,1.858,0,0,0,14.344,0Zm0,0"/><g transform="translate(5.908 3.379)"><path class="b" d="M236.017,107.342a.674.674,0,1,1-.674-.674A.674.674,0,0,1,236.017,107.342Zm0,0" transform="translate(-233.15 -106.668)"/><path class="b" d="M190.378,198.745h-3.035a.674.674,0,1,1,0-1.349h.843v-4.047h-.506a.674.674,0,1,1,0-1.349h1.18a.675.675,0,0,1,.674.674V197.4h.843a.674.674,0,0,1,0,1.349Zm0,0" transform="translate(-186.668 -189.302)"/></g></svg>
`;

export const ClientInfoIcon = () => <SvgCss xml={xml} />;