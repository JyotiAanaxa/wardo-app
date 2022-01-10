import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
  <g id="Invoices" transform="translate(-36 -428)">
    <rect id="Rectangle_1491" data-name="Rectangle 1491" width="40" height="40" rx="10" transform="translate(36 428)" fill="#e5e0ff"/>
    <g id="file-list-3-line" transform="translate(45 437)">
      <path id="Path_6144" data-name="Path 6144" d="M0,0H22V22H0Z" fill="none"/>
      <path id="Path_6145" data-name="Path 6145" d="M17.3,20H4.7A2.7,2.7,0,0,1,2,17.3V2.9A.9.9,0,0,1,2.9,2H15.5a.9.9,0,0,1,.9.9V13.7H20v3.6A2.7,2.7,0,0,1,17.3,20Zm-.9-4.5v1.8a.9.9,0,0,0,1.8,0V15.5Zm-1.8,2.7V3.8H3.8V17.3a.9.9,0,0,0,.9.9ZM5.6,6.5h7.2V8.3H5.6Zm0,3.6h7.2v1.8H5.6Zm0,3.6h4.5v1.8H5.6Z" fill="#6a60da"/>
    </g>
  </g>
</svg>
`;

export const InvoiceIcon = () => <SvgCss xml={xml} />;