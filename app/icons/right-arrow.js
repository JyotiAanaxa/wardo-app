import * as React from 'react';
import {SvgCss} from 'react-native-svg';

export const RightArrowIcon = ({color = '#80838c', ...rest}) => {
  const xml = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><style>.a,.b{fill:${color};}.a{opacity:0;}</style></defs><rect class="a" width="24" height="24" transform="translate(0 24) rotate(-90)"/><path class="b" d="M10.5,17a1,1,0,0,1-.71-1.71L13.1,12,9.92,8.69a1,1,0,1,1,1.42-1.41l3.86,4a1,1,0,0,1,0,1.4l-4,4A1,1,0,0,1,10.5,17Z"/></svg>
  `;

  return <SvgCss xml={xml} {...rest}/>;
};
