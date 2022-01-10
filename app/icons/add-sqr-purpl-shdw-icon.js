import * as React from 'react';
import {SvgCss} from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="125" height="49" viewBox="0 0 125 49">
  <defs>
    <filter id="Path_5755" x="5" y="2" width="47" height="47" filterUnits="userSpaceOnUse">
      <feOffset dy="4" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feFlood flood-color="#382d7c" flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Add_URL_Button" data-name="Add URL Button" transform="translate(-125 -669)">
    <rect id="Rectangle_2739" data-name="Rectangle 2739" width="125" height="43" rx="10" transform="translate(125 669)" fill="#f0efff"/>
    <g id="Add_Icon" data-name="Add Icon" transform="translate(57 168)">
      <g transform="matrix(1, 0, 0, 1, 68, 501)" filter="url(#Path_5755)">
        <path id="Path_5755-2" data-name="Path 5755" d="M5.1,0h6.8A5.1,5.1,0,0,1,17,5.1v6.8A5.1,5.1,0,0,1,11.9,17H5.1A5.1,5.1,0,0,1,0,11.9V5.1A5.1,5.1,0,0,1,5.1,0Z" transform="translate(20 13)" fill="#6a60da"/>
      </g>
      <g id="Layer_2" data-name="Layer 2" transform="translate(90.5 516.503)">
        <g id="plus" transform="translate(0 0)">
          <rect id="Rectangle_2652" data-name="Rectangle 2652" width="12" height="12" transform="translate(12 12) rotate(180)" fill="#fff" opacity="0"/>
          <path id="Path_6050" data-name="Path 6050" d="M11.86,7.668H8.716V4.524a.524.524,0,0,0-1.048,0V7.668H4.524a.524.524,0,0,0,0,1.048H7.668V11.86a.524.524,0,1,0,1.048,0V8.716H11.86a.524.524,0,1,0,0-1.048Z" transform="translate(-2.192 -2.192)" fill="#fff"/>
        </g>
      </g>
    </g>
    <text id="Add_URL" data-name="Add URL" transform="translate(174.004 695)" fill="#6a60da" font-size="14" font-family="AvenirLTPro-Roman"><tspan x="0" y="0">Add URL</tspan></text>
  </g>
</svg>
`;

const AddSqrPrplShdwIcon = props => <SvgCss xml={xml} {...props} />;

export default AddSqrPrplShdwIcon;
