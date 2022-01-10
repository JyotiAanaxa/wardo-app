import * as React from 'react';
import {SvgCss} from 'react-native-svg';

const xml = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="14"
  height="14"
  viewBox="0 0 14 14"
>
  <defs>
    <style>
      .a {
        fill: #6a60da;
      }
    </style>
  </defs>
  <path
    class="a"
    d="M15.46,9,15.9,7.656a2.154,2.154,0,0,0-1.069-2.581l-1.258-.643-.643-1.258a2.153,2.153,0,0,0-2.581-1.069L9,2.54,7.656,2.105A2.154,2.154,0,0,0,5.075,3.174L4.432,4.432l-1.258.643A2.154,2.154,0,0,0,2.105,7.656L2.54,9l-.435,1.344a2.154,2.154,0,0,0,1.069,2.581l1.258.643.643,1.258a2.153,2.153,0,0,0,2.581,1.069L9,15.46l1.344.435a2.154,2.154,0,0,0,2.581-1.069l.643-1.258,1.258-.643a2.153,2.153,0,0,0,1.069-2.581ZM8.3,12.09,5.705,9.5l.99-.99L8.3,10.11l3.705-3.705L13,7.4Z"
    transform="translate(-2 -2)"
  />
</svg>
`;

const PurpleFlowerShapeCheckIcon = props => <SvgCss xml={xml} {...props} />;

export default PurpleFlowerShapeCheckIcon;
