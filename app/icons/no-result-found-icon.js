import * as React from 'react';
import {SvgCss} from 'react-native-svg';

const NoResultFoundIcon = ({props}) => {
  const xml = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="72.999" height="109" viewBox="0 0 72.999 109">
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectangle_3241" data-name="Rectangle 3241" width="72" height="53" transform="translate(0.039 -0.295)"/>
    </clipPath>
    <clipPath id="clip-path-2">
      <rect id="Rectangle_3244" data-name="Rectangle 3244" width="64" height="97" transform="translate(-0.248 0.031)"/>
    </clipPath>
    <clipPath id="clip-path-3">
      <rect id="Rectangle_3245" data-name="Rectangle 3245" width="36" height="36" transform="translate(0.039 0.146)" fill="#1a1a1a"/>
    </clipPath>
  </defs>
  <g id="Search_Not_Found" data-name="Search Not Found" transform="translate(1271.517 -39)">
    <g id="Group_5617" data-name="Group 5617" transform="translate(-1271.556 95.294)">
      <g id="Group_5616" data-name="Group 5616" transform="translate(0)">
        <g id="Group_5615" data-name="Group 5615" clip-path="url(#clip-path)">
          <rect id="Rectangle_3238" data-name="Rectangle 3238" width="70.936" height="51.491" transform="translate(0.463 0.465)" fill="#6a60da"/>
          <path id="Path_7049" data-name="Path 7049" d="M71.4,52.42H.462A.459.459,0,0,1,0,51.956V.464A.459.459,0,0,1,.462,0H71.4a.459.459,0,0,1,.463.465V51.956A.471.471,0,0,1,71.4,52.42ZM.925,51.491H70.936V.929H.925Z" transform="translate(0 0)" fill="#1a1a1a"/>
          <rect id="Rectangle_3239" data-name="Rectangle 3239" width="62.933" height="43.537" transform="translate(4.469 4.433)" fill="#f2f2f2"/>
          <path id="Path_7050" data-name="Path 7050" d="M109.546,90.2H46.622a.459.459,0,0,1-.463-.465V46.185a.459.459,0,0,1,.463-.465h62.933a.459.459,0,0,1,.463.465V89.721A.475.475,0,0,1,109.546,90.2Zm-62.461-.929h62.008V46.649H47.085Z" transform="translate(-42.154 -41.752)" fill="#1a1a1a"/>
          <rect id="Rectangle_3240" data-name="Rectangle 3240" width="46.225" height="0.929" transform="matrix(0.999, -0.052, 0.051, 0.999, 21.215, 12.968)" fill="#6a60da"/>
          <path id="Path_7051" data-name="Path 7051" d="M98.589,67.289l7.254.79.2-1.849-43.772-4.8a4.375,4.375,0,0,0-4.108-1.886L50.228,45.72l-1.6.929,7.753,13.5a4.118,4.118,0,0,0-2.017,3.522,4.029,4.029,0,0,0,.888,2.518L42.216,89.275l1.61.92,4.524-8.01,18.2,1.877,2.369,6.012,1.721-.688-2.017-5.12L94.944,86.98,94.7,89.647l1.841.167.241-2.639,9.123.939.093-.92-9.132-.939Zm-39.932-5.91a2.3,2.3,0,1,1-2.443,2.3A2.374,2.374,0,0,1,58.657,61.378ZM48.84,81.3,56.7,67.382a4.407,4.407,0,0,0,1.952.455,4.583,4.583,0,0,0,1.4-.223L66.16,83.1Zm19.393,2L61.664,66.647a4.066,4.066,0,0,0,1.286-2.964c0-.1-.009-.2-.009-.3l33.807,3.7L95.018,86.06Z" transform="translate(-38.552 -41.752)" fill="#6a60da"/>
          <path id="Path_7052" data-name="Path 7052" d="M109.546,90.2H46.622a.459.459,0,0,1-.463-.465V46.185a.459.459,0,0,1,.463-.465h62.933a.459.459,0,0,1,.463.465V89.721A.475.475,0,0,1,109.546,90.2Zm-62.461-.929h62.008V46.649H47.085Z" transform="translate(-42.154 -41.752)" fill="#1a1a1a"/>
        </g>
      </g>
    </g>
    <g id="Group_5722" data-name="Group 5722" transform="translate(-1262.27 38.968)">
      <g id="Group_5721" data-name="Group 5721" transform="translate(0)">
        <g id="Group_5720" data-name="Group 5720" clip-path="url(#clip-path-2)">
          <path id="Path_7055" data-name="Path 7055" d="M71.59,40.124c0,21.523-31.251,64.013-31.251,64.013S9.1,60.889,9.1,40.124a31.243,31.243,0,0,1,62.486,0Z" transform="translate(-8.314 -8.141)" fill="#6a60da"/>
          <path id="Path_7056" data-name="Path 7056" d="M32.025,96.77h0a.808.808,0,0,1-.635-.325c-.077-.108-7.917-11-15.664-24.278C5.283,54.249,0,40.741,0,31.983a32.025,32.025,0,0,1,64.051,0c0,9.067-5.3,22.684-15.726,40.463-7.747,13.2-15.587,23.891-15.664,24A.766.766,0,0,1,32.025,96.77Zm0-95.223A30.483,30.483,0,0,0,1.549,31.983c0,10.553,8.444,27.248,15.525,39.395,6.445,11.063,12.953,20.44,14.967,23.287,2.014-2.8,8.521-12.038,14.951-23.009C54.073,59.6,62.5,42.923,62.5,31.983A30.493,30.493,0,0,0,32.025,1.547Z" fill="#1a1a1a"/>
          <ellipse id="Ellipse_1394" data-name="Ellipse 1394" cx="16.718" cy="16.696" rx="16.718" ry="16.696" transform="translate(15.323 15.288)" fill="#f3f6e6"/>
          <path id="Path_7057" data-name="Path 7057" d="M184.944,202.171A17.469,17.469,0,1,1,202.436,184.7,17.481,17.481,0,0,1,184.944,202.171Zm0-33.376a15.922,15.922,0,1,0,15.943,15.922A15.932,15.932,0,0,0,184.944,168.8Z" transform="translate(-152.919 -152.718)" fill="#383a48"/>
        </g>
      </g>
    </g>
    <g id="Group_5729" data-name="Group 5729" transform="translate(-1248.557 52.855)">
      <g id="Group_5728" data-name="Group 5728" transform="translate(0)">
        <g id="Group_5727" data-name="Group 5727" clip-path="url(#clip-path-3)">
          <g id="Layer_1_1_-i6" transform="translate(-0.004)">
            <g id="Group_5726" data-name="Group 5726">
              <g id="Group_5723" data-name="Group 5723" transform="translate(0.004)">
                <circle id="Ellipse_1395" data-name="Ellipse 1395" cx="17.823" cy="17.823" r="17.823" transform="translate(0.446 0.446)" fill="#f0efff"/>
                <path id="Path_7058" data-name="Path 7058" d="M18.269,36.538A18.269,18.269,0,1,1,36.538,18.269,18.287,18.287,0,0,1,18.269,36.538Zm0-35.646A17.377,17.377,0,1,0,35.646,18.269,17.391,17.391,0,0,0,18.269.892Z" fill="#1a1a1a"/>
              </g>
              <g id="Group_5724" data-name="Group 5724" transform="translate(0 9.193)">
                <path id="Path_7059" data-name="Path 7059" d="M40.787,119.69s-7.979,8.63-17.823,8.63-17.823-8.63-17.823-8.63,7.979-8.63,17.823-8.63S40.787,119.69,40.787,119.69Z" transform="translate(-4.691 -110.613)" fill="#f2f2f2"/>
                <path id="Path_7060" data-name="Path 7060" d="M18.222,124.071c-5.194,0-9.853-2.392-12.852-4.391a32.516,32.516,0,0,1-5.3-4.382.442.442,0,0,1,0-.607,32.046,32.046,0,0,1,5.3-4.382c2.99-2,7.657-4.391,12.852-4.391s9.853,2.392,12.852,4.391a32.516,32.516,0,0,1,5.3,4.382.442.442,0,0,1,0,.607,32.046,32.046,0,0,1-5.3,4.382C28.075,121.679,23.416,124.071,18.222,124.071Zm-17.2-9.077a32.851,32.851,0,0,0,4.864,3.954c2.883,1.928,7.372,4.23,12.334,4.23s9.451-2.3,12.334-4.23a33.361,33.361,0,0,0,4.864-3.954,32.852,32.852,0,0,0-4.864-3.954c-2.883-1.928-7.372-4.23-12.334-4.23s-9.451,2.3-12.334,4.23A32.851,32.851,0,0,0,1.024,114.995Z" transform="translate(0.051 -105.918)" fill="#1a1a1a"/>
              </g>
              <g id="Group_5725" data-name="Group 5725" transform="translate(12.017 12.013)">
                <circle id="Ellipse_1396" data-name="Ellipse 1396" cx="5.81" cy="5.81" r="5.81" transform="translate(0.446 0.446)" fill="#1a1a1a"/>
                <path id="Path_7061" data-name="Path 7061" d="M144.669,150.926a6.256,6.256,0,1,1,6.256-6.256A6.258,6.258,0,0,1,144.669,150.926Zm0-11.62a5.364,5.364,0,1,0,5.364,5.364A5.374,5.374,0,0,0,144.669,139.306Z" transform="translate(-138.413 -138.413)" fill="#1a1a1a"/>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </g>
</svg>
`;

  return <SvgCss xml={xml} {...props} />;
};

export default NoResultFoundIcon;
