import * as React from 'react';
import { SvgCss } from 'react-native-svg';

export const DeliveryIcon = ({ color }) => <SvgCss xml={`
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><style>.a,.b{fill:${color};}.a{opacity:0;}</style></defs><g transform="translate(-0.405 -0.406)"><g transform="translate(0.72 0.72)"><rect class="a" width="30" height="30" transform="translate(29.686 29.687) rotate(180)"/><path class="b" d="M15.235,2A13.235,13.235,0,1,0,28.469,15.235,13.235,13.235,0,0,0,15.235,2Zm5.294,14.558H15.235a1.323,1.323,0,0,1-1.323-1.323V9.941a1.323,1.323,0,1,1,2.647,0v3.97h3.97a1.323,1.323,0,0,1,0,2.647Z" transform="translate(-0.548 -0.548)"/></g></g></svg>
`} />;

