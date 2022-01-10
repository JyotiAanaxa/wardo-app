import * as React from 'react';
import {SvgCss} from 'react-native-svg';

const BarCodeIcon = ({...rest}) => {
  const xml = `
<svg id="Barcode" xmlns="http://www.w3.org/2000/svg" width="21.283" height="15" viewBox="0 0 21.283 15">
  <g id="Group_5789" data-name="Group 5789">
    <g id="Group_5788" data-name="Group 5788">
      <rect id="Rectangle_3298" data-name="Rectangle 3298" width="4.092" height="15" fill="#fff"/>
    </g>
  </g>
  <g id="Group_5791" data-name="Group 5791" transform="translate(9.746)">
    <g id="Group_5790" data-name="Group 5790">
      <rect id="Rectangle_3299" data-name="Rectangle 3299" width="4.092" height="15" fill="#fff"/>
    </g>
  </g>
  <g id="Group_5793" data-name="Group 5793" transform="translate(17.191)">
    <g id="Group_5792" data-name="Group 5792">
      <rect id="Rectangle_3300" data-name="Rectangle 3300" width="4.092" height="15" fill="#fff"/>
    </g>
  </g>
  <g id="Group_5795" data-name="Group 5795" transform="translate(5.145)">
    <g id="Group_5794" data-name="Group 5794">
      <rect id="Rectangle_3301" data-name="Rectangle 3301" width="1.247" height="15" fill="#fff"/>
    </g>
  </g>
  <g id="Group_5797" data-name="Group 5797" transform="translate(7.445)">
    <g id="Group_5796" data-name="Group 5796">
      <rect id="Rectangle_3302" data-name="Rectangle 3302" width="1.247" height="15" fill="#fff"/>
    </g>
  </g>
  <g id="Group_5799" data-name="Group 5799" transform="translate(14.891)">
    <g id="Group_5798" data-name="Group 5798">
      <rect id="Rectangle_3303" data-name="Rectangle 3303" width="1.247" height="15" fill="#fff"/>
    </g>
  </g>
</svg>
`;

  return <SvgCss xml={xml} {...rest} />;
};

export default BarCodeIcon;
