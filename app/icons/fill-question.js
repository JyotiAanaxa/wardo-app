import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"><defs><style>.a{fill:#6a60da;}</style></defs><path class="a" d="M8.5,0A8.5,8.5,0,1,0,17,8.5,8.5,8.5,0,0,0,8.5,0ZM8.482,14.081a1.14,1.14,0,1,1,1.14-1.14A1.141,1.141,0,0,1,8.482,14.081Zm1.786-5.6a1.834,1.834,0,0,0-.818,1.5v.546a.25.25,0,0,1-.25.25H7.843a.25.25,0,0,1-.25-.25V9.986A3.518,3.518,0,0,1,8.955,7.193,1.824,1.824,0,0,0,9.768,5.7c0-.23,0-.928-1.246-.928-1.168,0-1.215.644-1.235.919l-.041.559a.25.25,0,0,1-.274.231L5.619,6.349a.25.25,0,0,1-.224-.268l.04-.531a2.841,2.841,0,0,1,3.1-2.632,3.292,3.292,0,0,1,2.243.748,2.661,2.661,0,0,1,.846,2.049A3.486,3.486,0,0,1,10.268,8.483Z"/></svg>
`;

export const FillQuestionIcon = () => <SvgCss xml={xml} />;