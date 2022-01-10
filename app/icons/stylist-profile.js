import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="355" height="150" viewBox="0 0 316 137">
  <g id="Confetti_porfoilio" data-name="Confetti porfoilio" transform="translate(-30 -80)">
    <rect id="michael-dam-mEZ3PoFGs_k-unsplash" width="72" height="72" rx="16" transform="translate(182 88)" fill="#ffcb0c" opacity="0.5"/>
    <rect id="michael-dam-mEZ3PoFGs_k-unsplash-2" data-name="michael-dam-mEZ3PoFGs_k-unsplash" width="16" height="16" rx="5" transform="translate(27 201)" fill="#6a60da" opacity="0.5"/>
    <rect id="michael-dam-mEZ3PoFGs_k-unsplash-3" data-name="michael-dam-mEZ3PoFGs_k-unsplash" width="16" height="16" rx="5" transform="translate(269 80)" fill="#6a60da" opacity="0.5"/>
    <rect id="michael-dam-mEZ3PoFGs_k-unsplash-4" data-name="michael-dam-mEZ3PoFGs_k-unsplash" width="10" height="10" rx="3" transform="translate(96 115)" fill="#0984fd" opacity="0.5"/>
    <rect id="michael-dam-mEZ3PoFGs_k-unsplash-5" data-name="michael-dam-mEZ3PoFGs_k-unsplash" width="10" height="10" rx="3" transform="translate(333 185)" fill="#05d1d3" opacity="0.5"/>
    <rect id="michael-dam-mEZ3PoFGs_k-unsplash-6" data-name="michael-dam-mEZ3PoFGs_k-unsplash" width="52" height="52" rx="12" transform="translate(113 134)" fill="#06d6d8" opacity="0.5"/>
  </g>
</svg>
`;

export const StylistProfileIcon = () => <SvgCss xml={xml} />;
