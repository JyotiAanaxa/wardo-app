import * as React from "react"
import { SvgCss } from 'react-native-svg';
import { heightPercentageToDP } from "react-native-responsive-screen";

const inactiveXml = `
<svg xmlns="http://www.w3.org/2000/svg" width="${heightPercentageToDP('4.3%')}" height="${heightPercentageToDP('4.3%')}" viewBox="0 0 30 30">
  <g id="Outfits" transform="translate(-15588 -11837)">
    <rect id="Rectangle_1380" data-name="Rectangle 1380" width="30" height="30" transform="translate(15588 11837)" fill="none"/>
    <g id="Group_1889" data-name="Group 1889" transform="translate(60 -156)">
      <g id="clothes" transform="translate(15531 11995)">
        <path id="Path_2408" data-name="Path 2408" d="M118.1,206.939h8.983l-.02-2.939h-8.942Z" transform="translate(-114.489 -192.979)" fill="#d0d0d0"/>
        <path id="Path_2409" data-name="Path 2409" d="M118.516,149l-.019,2.755h8.934L127.412,149Z" transform="translate(-114.885 -141.347)" fill="#d0d0d0"/>
        <path id="Path_2410" data-name="Path 2410" d="M160.3,25.85A2.094,2.094,0,0,0,162.334,24H158.27A2.094,2.094,0,0,0,160.3,25.85Z" transform="translate(-152.199 -24)" fill="#d0d0d0"/>
        <path id="Path_2411" data-name="Path 2411" d="M62.253,28.858a.307.307,0,0,1,.337-.075.3.3,0,0,1,.192.283l-.014,1.975h8.888l-.013-1.975a.3.3,0,0,1,.2-.284.306.306,0,0,1,.34.091l1.394,1.665L75.3,29.157,71.157,24h-1.3a2.656,2.656,0,0,1-5.3,0h-1.3l-4.154,4.966,1.565,1.56Z" transform="translate(-59.109 -24)" fill="#d0d0d0"/>
        <path id="Path_2412" data-name="Path 2412" d="M339.221,157.492l.182,5.692h4.389V142h-5.509l-1.613,4.584,1.352,4.115A24.2,24.2,0,0,1,339.221,157.492Zm-.388-14.067a.324.324,0,0,1,.31-.323h3.135a.308.308,0,0,1,.29.323v2.791a.3.3,0,0,1-.13.256l-1.558,1.032a.311.311,0,0,1-.34,0l-1.567-1.032a.308.308,0,0,1-.14-.256Z" transform="translate(-319.675 -136.367)" fill="#d0d0d0"/>
        <path id="Path_2413" data-name="Path 2413" d="M364,109h5.449v1.408H364Z" transform="translate(-345.332 -105.388)" fill="#d0d0d0"/>
        <path id="Path_2414" data-name="Path 2414" d="M384.51,172.337V170H382v2.337l1.255.831Z" transform="translate(-362.23 -162.653)" fill="#d0d0d0"/>
      </g>
      <g id="sandals" transform="translate(15533.572 12011.428)">
        <g id="Group_1887" data-name="Group 1887" transform="translate(5.831 2.809)">
          <path id="Path_2419" data-name="Path 2419" d="M270,145.11h5.183v.863H270Z" transform="translate(-270 -145.11)" fill="#d0d0d0"/>
          <path id="Path_2420" data-name="Path 2420" d="M270,215.047h5.183v.756H270Z" transform="translate(-270 -213.537)" fill="#d0d0d0"/>
        </g>
        <path id="Path_2421" data-name="Path 2421" d="M293.14,17.207a2.7,2.7,0,0,0-2.67-2.16,1.726,1.726,0,0,0-1.721,1.944l.014.216Z" transform="translate(-282.513 -15.047)" fill="#d0d0d0"/>
        <path id="Path_2422" data-name="Path 2422" d="M300.086,280.047l.191,2.936a1.837,1.837,0,0,0,3.665,0l.2-2.938Z" transform="translate(-293.605 -274.324)" fill="#d0d0d0"/>
        <g id="Group_1888" data-name="Group 1888" transform="translate(0 2.809)">
          <path id="Path_2423" data-name="Path 2423" d="M0,145.11H5.183v.863H0Z" transform="translate(0 -145.11)" fill="#d0d0d0"/>
          <path id="Path_2424" data-name="Path 2424" d="M0,215.047H5.183v.756H0Z" transform="translate(0 -213.537)" fill="#d0d0d0"/>
        </g>
        <path id="Path_2425" data-name="Path 2425" d="M17.944,17.207a2.7,2.7,0,0,1,2.67-2.16,1.726,1.726,0,0,1,1.721,1.944l-.014.216Z" transform="translate(-17.556 -15.047)" fill="#d0d0d0"/>
        <path id="Path_2426" data-name="Path 2426" d="M26.382,280.047l-.191,2.936a1.837,1.837,0,0,1-3.665,0l-.2-2.938Z" transform="translate(-21.849 -274.324)" fill="#d0d0d0"/>
      </g>
    </g>
  </g>
</svg>
`;

const activeXml = `
<svg xmlns="http://www.w3.org/2000/svg" width="${heightPercentageToDP('4.3%')}" height="${heightPercentageToDP('4.3%')}" viewBox="0 0 30 30">
  <g id="Outfits_Colored" data-name="Outfits Colored" transform="translate(-15588 -11837)">
    <rect id="Rectangle_1380" data-name="Rectangle 1380" width="30" height="30" transform="translate(15588 11837)" fill="none"/>
    <g id="Group_1889" data-name="Group 1889" transform="translate(60 -156)">
      <g id="clothes" transform="translate(15531 11995)">
        <path id="Path_2408" data-name="Path 2408" d="M118.1,206.939h8.983l-.02-2.939h-8.942Z" transform="translate(-114.489 -192.979)" fill="#6a60da"/>
        <path id="Path_2409" data-name="Path 2409" d="M118.516,149l-.019,2.755h8.934L127.412,149Z" transform="translate(-114.885 -141.347)" fill="#382d7c"/>
        <path id="Path_2410" data-name="Path 2410" d="M160.3,25.85A2.094,2.094,0,0,0,162.334,24H158.27A2.094,2.094,0,0,0,160.3,25.85Z" transform="translate(-152.199 -24)" fill="#6a60da"/>
        <path id="Path_2411" data-name="Path 2411" d="M62.253,28.858a.307.307,0,0,1,.337-.075.3.3,0,0,1,.192.283l-.014,1.975h8.888l-.013-1.975a.3.3,0,0,1,.2-.284.306.306,0,0,1,.34.091l1.394,1.665L75.3,29.157,71.157,24h-1.3a2.656,2.656,0,0,1-5.3,0h-1.3l-4.154,4.966,1.565,1.56Z" transform="translate(-59.109 -24)" fill="#6a60da"/>
        <path id="Path_2412" data-name="Path 2412" d="M339.221,157.492l.182,5.692h4.389V142h-5.509l-1.613,4.584,1.352,4.115A24.2,24.2,0,0,1,339.221,157.492Zm-.388-14.067a.324.324,0,0,1,.31-.323h3.135a.308.308,0,0,1,.29.323v2.791a.3.3,0,0,1-.13.256l-1.558,1.032a.311.311,0,0,1-.34,0l-1.567-1.032a.308.308,0,0,1-.14-.256Z" transform="translate(-319.675 -136.367)" fill="#6a60da"/>
        <path id="Path_2413" data-name="Path 2413" d="M364,109h5.449v1.408H364Z" transform="translate(-345.332 -105.388)" fill="#6a60da"/>
        <path id="Path_2414" data-name="Path 2414" d="M384.51,172.337V170H382v2.337l1.255.831Z" transform="translate(-362.23 -162.653)" fill="#382d7c"/>
      </g>
      <g id="sandals" transform="translate(15533.572 12011.428)">
        <g id="Group_1887" data-name="Group 1887" transform="translate(5.831 2.809)">
          <path id="Path_2419" data-name="Path 2419" d="M270,145.11h5.183v.863H270Z" transform="translate(-270 -145.11)" fill="#382d7c"/>
          <path id="Path_2420" data-name="Path 2420" d="M270,215.047h5.183v.756H270Z" transform="translate(-270 -213.537)" fill="#382d7c"/>
        </g>
        <path id="Path_2421" data-name="Path 2421" d="M293.14,17.207a2.7,2.7,0,0,0-2.67-2.16,1.726,1.726,0,0,0-1.721,1.944l.014.216Z" transform="translate(-282.513 -15.047)" fill="#6a60da"/>
        <path id="Path_2422" data-name="Path 2422" d="M300.086,280.047l.191,2.936a1.837,1.837,0,0,0,3.665,0l.2-2.938Z" transform="translate(-293.605 -274.324)" fill="#6a60da"/>
        <g id="Group_1888" data-name="Group 1888" transform="translate(0 2.809)">
          <path id="Path_2423" data-name="Path 2423" d="M0,145.11H5.183v.863H0Z" transform="translate(0 -145.11)" fill="#382d7c"/>
          <path id="Path_2424" data-name="Path 2424" d="M0,215.047H5.183v.756H0Z" transform="translate(0 -213.537)" fill="#382d7c"/>
        </g>
        <path id="Path_2425" data-name="Path 2425" d="M17.944,17.207a2.7,2.7,0,0,1,2.67-2.16,1.726,1.726,0,0,1,1.721,1.944l-.014.216Z" transform="translate(-17.556 -15.047)" fill="#6a60da"/>
        <path id="Path_2426" data-name="Path 2426" d="M26.382,280.047l-.191,2.936a1.837,1.837,0,0,1-3.665,0l-.2-2.938Z" transform="translate(-21.849 -274.324)" fill="#6a60da"/>
      </g>
    </g>
  </g>
</svg>
`;



export const InactiveOutfitsIcon = () => <SvgCss xml={inactiveXml} />;
export const ActiveOutfitsIcon = () => <SvgCss xml={activeXml} />;