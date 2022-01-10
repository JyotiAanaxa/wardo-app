import * as React from 'react';
import {SvgCss} from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><defs><style>.a,.b{fill:#6a60da;}.a{opacity:0;}</style></defs><g transform="translate(0.137 0.137)"><rect class="a" width="16" height="16" transform="translate(15.863 15.863) rotate(180)"/><path class="b" d="M8.553,2a6.553,6.553,0,1,0,6.553,6.553A6.553,6.553,0,0,0,8.553,2Zm2.621,7.208H8.553A.655.655,0,0,1,7.9,8.553V5.932a.655.655,0,1,1,1.311,0V7.9h1.966a.655.655,0,1,1,0,1.311Z" transform="translate(-0.689 -0.689)"/></g></svg>
`;

export const TimeIcon = props => <SvgCss xml={xml} {...props} />;
