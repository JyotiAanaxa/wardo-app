import * as React from 'react';
import {SvgCss} from 'react-native-svg';

const MyStoreIcon = ({color = '#6a60da', ...rest}) => {
  const xml = `
  <svg id="Add_From_Store" data-name="Add From Store" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path id="Path_7127" data-name="Path 7127" d="M0,0H24V24H0Z" fill="none"/>
    <path id="Path_7128" data-name="Path 7128" d="M21,13v7a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V13H2V11L3,6H21l1,5v2ZM5,13v6H19V13Zm-.96-2H19.96l-.6-3H4.64ZM6,14h8v3H6ZM3,3H21V5H3Z" fill="#6a60da"/>
  </svg>
`;

  return <SvgCss xml={xml} {...rest} />;
};

export default MyStoreIcon;
