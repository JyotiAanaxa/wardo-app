import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <g id="Add_From_Gallery" data-name="Add From Gallery" transform="translate(0.199 0.559)">
    <g id="image" transform="translate(-0.199 -0.199)">
      <rect id="Rectangle_2527" data-name="Rectangle 2527" width="24" height="24" transform="translate(0 -0.359)" fill="#6a60da" opacity="0"/>
      <path id="Path_5915" data-name="Path 5915" d="M17.7,3H5.94A2.925,2.925,0,0,0,3,5.91V17.549a2.925,2.925,0,0,0,2.94,2.91H17.7a2.925,2.925,0,0,0,2.94-2.91V5.91A2.925,2.925,0,0,0,17.7,3ZM5.94,4.94H17.7a.975.975,0,0,1,.98.97v8.109l-3.136-2.648a2.736,2.736,0,0,0-3.45,0L4.96,17.258V5.91A.975.975,0,0,1,5.94,4.94ZM17.7,18.519H6.489l6.86-5.664a.771.771,0,0,1,.911,0l4.42,3.725v.97A.975.975,0,0,1,17.7,18.519Z" transform="translate(0.091 0.091)" fill="#6a60da"/>
      <circle id="Ellipse_867" data-name="Ellipse 867" cx="1.455" cy="1.455" r="1.455" transform="translate(6.536 6.971)" fill="#6a60da"/>
    </g>
  </g>
</svg>
`;

export const GalleryIcon = () => <SvgCss xml={xml} />;