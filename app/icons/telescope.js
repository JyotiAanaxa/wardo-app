import * as React from "react"
import { SvgCss } from 'react-native-svg';
import { heightPercentageToDP } from "react-native-responsive-screen";

const inactiveXml = `
<svg xmlns="http://www.w3.org/2000/svg" width="${heightPercentageToDP('4.2%')}" height="${heightPercentageToDP('4.2%')}" viewBox="0 0 30 30">
  <g id="Explore_Grey" data-name="Explore Grey" transform="translate(-15908 -10650)">
    <rect id="Rectangle_1379" data-name="Rectangle 1379" width="30" height="30" transform="translate(15908 10652)" fill="none"/>
    <g id="telescope" transform="translate(15905.679 10653.148)">
      <path id="Path_2402" data-name="Path 2402" d="M389.363,9.7,386.919.583a.787.787,0,0,0-.964-.556l-2.533.679a.787.787,0,0,0-.556.964l2.444,9.12a.787.787,0,0,0,.964.556l2.533-.679a.787.787,0,0,0,.556-.964Z" transform="translate(-358.706 0)" fill="#d0d0d0"/>
      <path id="Path_2403" data-name="Path 2403" d="M4.86,180.247a.787.787,0,0,0-.556.964l.611,2.28a.787.787,0,0,0,.964.556l.935-.25L5.794,180Z" transform="translate(0 -170.555)" fill="#d0d0d0"/>
      <path id="Path_2404" data-name="Path 2404" d="M64.192,143.454l-.585.157a1.311,1.311,0,0,0-.927,1.606l.882,3.293a1.311,1.311,0,0,0,1.606.927l.585-.157Z" transform="translate(-55.297 -135.93)" fill="#d0d0d0"/>
      <circle id="Ellipse_110" data-name="Ellipse 110" cx="1.967" cy="1.967" r="1.967" transform="translate(15.513 10.988)" fill="#d0d0d0"/>
      <path id="Path_2405" data-name="Path 2405" d="M123.089,47.355a1.773,1.773,0,0,0-1.254,2.172l1.39,5.188a1.773,1.773,0,0,0,2.172,1.254,3.54,3.54,0,1,1,6.839-1.833l4.114-1.1-2.308-8.613Z" transform="translate(-111.335 -42.091)" fill="#d0d0d0"/>
      <path id="Path_2406" data-name="Path 2406" d="M4.874.06.2,8.591A.651.651,0,0,0,.583,9.5a.9.9,0,0,0,.34.071.782.782,0,0,0,.7-.375L6.3.668V.663A3.9,3.9,0,0,1,4.874.06Z" transform="matrix(0.996, -0.087, 0.087, 0.996, 10.925, 15.942)" fill="#d0d0d0"/>
      <path id="Path_2407" data-name="Path 2407" d="M1.414-.018a3.9,3.9,0,0,1-1.422.6V.591l4.67,8.525a.782.782,0,0,0,.7.375.905.905,0,0,0,.34-.071.651.651,0,0,0,.382-.906Z" transform="matrix(0.996, 0.087, -0.087, 0.996, 17.764, 15.471)" fill="#d0d0d0"/>
    </g>
  </g>
</svg>

`;

const activeXml = `
<svg xmlns="http://www.w3.org/2000/svg" width="${heightPercentageToDP('4.2%')}" height="${heightPercentageToDP('4.2%')}" viewBox="0 0 30 30">
  <g id="Explore" transform="translate(-15908.021 -10651.021)">
    <rect id="Rectangle_1379" data-name="Rectangle 1379" width="32" height="32" transform="translate(15908.021 10652.041)" fill="none"/>
    <g id="telescope" transform="translate(15910.088 10653.226)">
      <path id="Path_2402" data-name="Path 2402" d="M389.807,10.364,387.2.622a.84.84,0,0,0-1.029-.594l-2.706.725a.84.84,0,0,0-.594,1.029l2.61,9.741a.84.84,0,0,0,1.029.594l2.706-.725a.84.84,0,0,0,.594-1.029Z" transform="translate(-361.63 0.001)" fill="#6a60da"/>
      <path id="Path_2403" data-name="Path 2403" d="M4.9,180.264a.84.84,0,0,0-.594,1.029l.653,2.435a.84.84,0,0,0,1.029.594l1-.268L5.9,180Z" transform="translate(-4.276 -169.911)" fill="#6a60da"/>
      <path id="Path_2404" data-name="Path 2404" d="M64.3,143.454l-.625.167a1.4,1.4,0,0,0-.99,1.715l.943,3.518a1.4,1.4,0,0,0,1.715.99l.625-.167Z" transform="translate(-59.365 -135.417)" fill="#6a60da"/>
      <circle id="Ellipse_110" data-name="Ellipse 110" cx="2.101" cy="2.101" r="2.101" transform="translate(12.002 11.738)" fill="#6a60da"/>
      <path id="Path_2405" data-name="Path 2405" d="M123.179,47.555a1.894,1.894,0,0,0-1.339,2.32l1.485,5.541a1.894,1.894,0,0,0,2.32,1.339,3.782,3.782,0,1,1,7.305-1.957l4.395-1.178-2.465-9.2Z" transform="translate(-115.191 -41.931)" fill="#382d7c"/>
      <path id="Path_2406" data-name="Path 2406" d="M5.069,0,.078,9.112a.7.7,0,0,0,.407.968.966.966,0,0,0,.364.076.835.835,0,0,0,.752-.4L6.589.65V.644A4.165,4.165,0,0,1,5.069,0Z" transform="matrix(0.996, -0.087, 0.087, 0.996, 7.244, 17.081)" fill="#6a60da"/>
      <path id="Path_2407" data-name="Path 2407" d="M1.519,0A4.164,4.164,0,0,1,0,.644V.65L4.988,9.755a.835.835,0,0,0,.752.4.967.967,0,0,0,.364-.076.7.7,0,0,0,.407-.968Z" transform="matrix(0.996, 0.087, -0.087, 0.996, 14.399, 16.507)" fill="#6a60da"/>
    </g>
  </g>
</svg>
`;

export const InactiveTeleIcon = () => <SvgCss xml={inactiveXml} />;
export const ActiveTeleIcon = () => <SvgCss xml={activeXml} />;