import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><defs><style>.a,.b{fill:#ef709d;}.a{opacity:0;}</style></defs><g transform="translate(0.203 0.203)"><rect class="a" width="22" height="22" transform="translate(-0.203 -0.203)"/><path class="b" d="M18.4,6.338,15.857,3.792A2.7,2.7,0,0,0,13.95,3h-5.7a2.7,2.7,0,0,0-1.907.792L3.792,6.338A2.7,2.7,0,0,0,3,8.245V16.5a2.7,2.7,0,0,0,2.7,2.7H16.5a2.7,2.7,0,0,0,2.7-2.7V8.245A2.7,2.7,0,0,0,18.4,6.338ZM11.1,14.7a3.6,3.6,0,0,1-3.6-3.6.9.9,0,1,1,1.8,0,1.8,1.8,0,0,0,3.6,0,.9.9,0,1,1,1.8,0A3.6,3.6,0,0,1,11.1,14.7ZM6.068,6.6,7.607,5.06A.945.945,0,0,1,8.245,4.8h5.7a.945.945,0,0,1,.639.261L16.127,6.6Z" transform="translate(-0.301 -0.301)"/></g></svg>
`;

export const ClientShoppingListIcon = () => <SvgCss xml={xml} />;