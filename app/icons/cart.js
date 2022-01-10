import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
  <g id="Cart" transform="translate(-0.34 -0.34)">
    <g id="shopping-cart">
      <rect id="Rectangle_3258" data-name="Rectangle 3258" width="22" height="22" transform="translate(0.34 0.34)" fill="#8b83ff" opacity="0"/>
      <path id="Path_7073" data-name="Path 7073" d="M20.03,6.78a1.89,1.89,0,0,0-1.606-.945H6.328L5.78,3.7A.945.945,0,0,0,4.835,3H2.945a.945.945,0,0,0,0,1.89H4.117l2.608,9.7a.945.945,0,0,0,.945.7h8.5a.945.945,0,0,0,.841-.52l3.1-6.2A1.89,1.89,0,0,0,20.03,6.78Zm-4.441,6.615h-7.2l-1.54-5.67H18.424Z" transform="translate(-0.11 -0.165)" fill="#8b83ff"/>
      <circle id="Ellipse_1397" data-name="Ellipse 1397" cx="1.5" cy="1.5" r="1.5" transform="translate(5.34 17.34)" fill="#8b83ff"/>
      <circle id="Ellipse_1398" data-name="Ellipse 1398" cx="1.5" cy="1.5" r="1.5" transform="translate(15.34 17.34)" fill="#8b83ff"/>
    </g>
  </g>
</svg>
`;

export const CartIcon = () => <SvgCss xml={xml} />;