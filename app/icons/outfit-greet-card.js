import * as React from 'react';
import {SvgCss} from 'react-native-svg';

export const OutfitGreetCard = ({bgColor = '#FFFFFF', ...rest}) => {
  const greetCardXml = `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="275" height="333" viewBox="0 0 275 333">
    <defs>
      <filter id="Rectangle_2607" x="-48" y="-38" width="371" height="429" filterUnits="userSpaceOnUse">
        <feOffset dy="10" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="16" result="blur"/>
        <feFlood flood-opacity="0.059"/>
        <feComposite operator="in" in2="blur"/>
        <feComposite in="SourceGraphic"/>
      </filter>
      <clipPath id="clip-path">
        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Rectangle_2607)">
          <rect id="Rectangle_2607-2" data-name="Rectangle 2607" width="275" height="333" rx="30" transform="translate(50 160)" fill="#ffe485"/>
        </g>
      </clipPath>
      <filter id="Ellipse_878" x="197" y="-56" width="102" height="102" filterUnits="userSpaceOnUse">
        <feOffset dx="-3" dy="3" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="4" result="blur-2"/>
        <feFlood flood-opacity="0.039"/>
        <feComposite operator="in" in2="blur-2"/>
        <feComposite in="SourceGraphic"/>
      </filter>
    </defs>
    <g id="Morning" transform="translate(-50 -160)">
      <rect id="Rectangle_2584" data-name="Rectangle 2584" width="275" height="333" rx="30" transform="translate(50 160)" fill=${bgColor}/>
      <g id="Mask_Group_92" data-name="Mask Group 92" clip-path="url(#clip-path)">
        <circle id="Ellipse_874" data-name="Ellipse 874" cx="100" cy="100" r="100" transform="translate(24 263)" fill="#fff" opacity="0.3"/>
        <circle id="Ellipse_873" data-name="Ellipse 873" cx="75" cy="75" r="75" transform="translate(49 288)" fill="#fff" opacity="0.4"/>
        <circle id="Ellipse_872" data-name="Ellipse 872" cx="50" cy="50" r="50" transform="translate(74 313)" fill="#fff"/>
        <path id="Path_6025" data-name="Path 6025" d="M95,0A95,95,0,1,1,0,95,95,95,0,0,1,95,0Z" transform="translate(258 62)" fill="#fff" opacity="0.3"/>
        <g transform="matrix(1, 0, 0, 1, 50, 160)" filter="url(#Ellipse_878)">
          <circle id="Ellipse_878-2" data-name="Ellipse 878" cx="39" cy="39" r="39" transform="translate(212 -47)" fill="#fff" opacity="0.3"/>
        </g>
      </g>
    </g>
  </svg>
  `;

  return <SvgCss xml={greetCardXml} {...rest}/>;
};
