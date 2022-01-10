import * as React from 'react';
import {SvgCss} from 'react-native-svg';

const FilterIcon = ({props}) => {
  const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <g id="Filter_Icon" data-name="Filter Icon" transform="translate(-0.257 -0.257)">
    <g id="options-2" transform="translate(0.229 0.229)">
      <rect id="Rectangle_3153" data-name="Rectangle 3153" width="24" height="24" transform="translate(24.028 0.028) rotate(90)" fill="#6a60da" opacity="0"/>
      <path id="Path_6929" data-name="Path 6929" d="M19.394,9a3.07,3.07,0,0,0-2.885,2.046H3.023a1.023,1.023,0,1,0,0,2.046H16.509A3.07,3.07,0,1,0,19.394,9Z" transform="translate(-0.204 -0.041)" fill="#6a60da"/>
      <path id="Path_6930" data-name="Path 6930" d="M3.023,7.092H4.231a3.07,3.07,0,0,0,5.771,0H21.44a1.023,1.023,0,1,0,0-2.046H10a3.07,3.07,0,0,0-5.771,0H3.023a1.023,1.023,0,1,0,0,2.046Z" transform="translate(-0.204 -0.18)" fill="#6a60da"/>
      <path id="Path_6931" data-name="Path 6931" d="M21.44,17.046H14.094a3.07,3.07,0,0,0-5.771,0h-5.3a1.023,1.023,0,0,0,0,2.046h5.3a3.07,3.07,0,0,0,5.771,0H21.44a1.023,1.023,0,1,0,0-2.046Z" transform="translate(-0.204 0.098)" fill="#6a60da"/>
    </g>
  </g>
</svg>
`;

  return <SvgCss xml={xml} {...props} />;
};

export default FilterIcon;
