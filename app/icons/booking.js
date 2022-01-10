import * as React from "react"
import { SvgCss } from 'react-native-svg';
import { heightPercentageToDP } from "react-native-responsive-screen";

const inactiveXml = `
<svg xmlns="http://www.w3.org/2000/svg" width="${heightPercentageToDP('3.5%')}" height="${heightPercentageToDP('3.5%')}" viewBox="0 0 24.783 24.783"><defs><style>.a{fill:#d0d0d0;}</style></defs><g transform="translate(5.311)"><path class="a" d="M103.285,0a.885.885,0,0,0-.885.885v1.77h1.77V.885A.885.885,0,0,0,103.285,0Z" transform="translate(-102.4)"/></g><g transform="translate(17.702)"><path class="a" d="M342.218,0a.885.885,0,0,0-.885.885v1.77h1.77V.885A.885.885,0,0,0,342.218,0Z" transform="translate(-341.333)"/></g><g transform="translate(0 2.655)"><path class="a" d="M22.128,51.2H19.473v3.54a.885.885,0,1,1-1.77,0V51.2H7.081v3.54a.885.885,0,1,1-1.77,0V51.2H2.655A2.655,2.655,0,0,0,0,53.855V70.673a2.655,2.655,0,0,0,2.655,2.655H22.128a2.655,2.655,0,0,0,2.655-2.655V53.855A2.655,2.655,0,0,0,22.128,51.2Zm.885,19.473a.885.885,0,0,1-.885.885H2.655a.885.885,0,0,1-.885-.885V59.166H23.013Z" transform="translate(0 -51.2)"/></g><g transform="translate(6.196 12.392)"><path class="a" d="M131.6,239.2a.885.885,0,0,0-1.252,0l-6.455,6.455-2.915-2.915a.885.885,0,1,0-1.252,1.252l3.54,3.54a.885.885,0,0,0,1.252,0l7.081-7.081A.885.885,0,0,0,131.6,239.2Z" transform="translate(-119.463 -238.938)"/></g></svg>
`;

const activeXml = `
<svg id="Booking" xmlns="http://www.w3.org/2000/svg" width="${heightPercentageToDP('3.5%')}" height="${heightPercentageToDP('3.5%')}" viewBox="0 0 24.783 24.783">
  <g id="Group_3749" data-name="Group 3749" transform="translate(5.311)">
    <g id="Group_3748" data-name="Group 3748">
      <path id="Path_5708" data-name="Path 5708" d="M103.285,0a.885.885,0,0,0-.885.885v1.77h1.77V.885A.885.885,0,0,0,103.285,0Z" transform="translate(-102.4)" fill="#382d7c"/>
    </g>
  </g>
  <g id="Group_3751" data-name="Group 3751" transform="translate(17.702)">
    <g id="Group_3750" data-name="Group 3750">
      <path id="Path_5709" data-name="Path 5709" d="M342.218,0a.885.885,0,0,0-.885.885v1.77h1.77V.885A.885.885,0,0,0,342.218,0Z" transform="translate(-341.333)" fill="#382d7c"/>
    </g>
  </g>
  <g id="Group_3753" data-name="Group 3753" transform="translate(0 2.655)">
    <g id="Group_3752" data-name="Group 3752">
      <path id="Path_5710" data-name="Path 5710" d="M22.128,51.2H19.473v3.54a.885.885,0,1,1-1.77,0V51.2H7.081v3.54a.885.885,0,1,1-1.77,0V51.2H2.655A2.655,2.655,0,0,0,0,53.855V70.673a2.655,2.655,0,0,0,2.655,2.655H22.128a2.655,2.655,0,0,0,2.655-2.655V53.855A2.655,2.655,0,0,0,22.128,51.2Zm.885,19.473a.885.885,0,0,1-.885.885H2.655a.885.885,0,0,1-.885-.885V59.166H23.013Z" transform="translate(0 -51.2)" fill="#6a60da"/>
    </g>
  </g>
  <g id="Group_3755" data-name="Group 3755" transform="translate(6.196 12.392)">
    <g id="Group_3754" data-name="Group 3754">
      <path id="Path_5711" data-name="Path 5711" d="M131.6,239.2a.885.885,0,0,0-1.252,0l-6.455,6.455-2.915-2.915a.885.885,0,1,0-1.252,1.252l3.54,3.54a.885.885,0,0,0,1.252,0l7.081-7.081A.885.885,0,0,0,131.6,239.2Z" transform="translate(-119.463 -238.938)" fill="#382d7c"/>
    </g>
  </g>
</svg>
`;



export const InactiveBookingIcon = () => <SvgCss xml={inactiveXml} />;
export const ActiveBookingIcon = () => <SvgCss xml={activeXml} />;