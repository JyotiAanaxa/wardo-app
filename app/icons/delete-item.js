import * as React from "react"
import { SvgCss } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="68.502" height="73.065" viewBox="0 0 68.502 73.065">
  <g id="Delete_File" data-name="Delete File" transform="translate(-15.988 0)">
    <path id="Path_6056" data-name="Path 6056" d="M198.993,36.359l5.626-2.535a1.122,1.122,0,0,1,1.127.12l3.9,2.881a1.122,1.122,0,0,0,.852.2l4.567-.764a1.122,1.122,0,0,1,1.3.971l.673,5.527a1.122,1.122,0,0,1-.262.866L210.99,50.38a1.122,1.122,0,0,1-1.1.363l-4.6-1.055a1.122,1.122,0,0,0-.585.022l-6.033,1.881a1.122,1.122,0,0,1-1.028-.19l-5.3-4.174a1.122,1.122,0,0,1,.055-1.8l4.51-3.121a1.122,1.122,0,0,0,.457-.68l.993-4.485A1.122,1.122,0,0,1,198.993,36.359Z" transform="translate(-150.821 -28.912)" fill="#2ec5b6"/>
    <path id="Path_6057" data-name="Path 6057" d="M47.414,51.505,35.2,53.714a1.351,1.351,0,0,1-1.386-.614L29.2,45.706a1.351,1.351,0,0,1,.827-2.029l3.7-.9a1.351,1.351,0,0,0,.866-.664l2.4-4.376a1.351,1.351,0,0,1,1.58-.643l7.6,2.322A1.351,1.351,0,0,1,47.1,40.93l-.774,4.708a1.351,1.351,0,0,0,.188.936l1.805,2.885A1.351,1.351,0,0,1,47.414,51.505Z" transform="translate(-11.147 -31.752)" fill="#fae24a"/>
    <path id="Path_6058" data-name="Path 6058" d="M206.407,37.985l-1.435-4.205a1.118,1.118,0,0,0-.352.091l-5.626,2.535a1.122,1.122,0,0,0-.634.78l-.993,4.485a1.122,1.122,0,0,1-.457.68l-4.51,3.121a1.122,1.122,0,0,0-.056,1.8l5.3,4.174a1.122,1.122,0,0,0,1.028.19l1.118-.348,1.964-4.827a1.652,1.652,0,0,1,.269-.445l3.7-4.38A3.8,3.8,0,0,0,206.407,37.985Z" transform="translate(-150.822 -28.959)" opacity="0.1"/>
    <path id="Path_6059" data-name="Path 6059" d="M110.269,53.758l-1.805-2.885a1.351,1.351,0,0,1-.188-.936l.774-4.708a1.351,1.351,0,0,0-.938-1.511l-5.453-1.666-.5.584a3.767,3.767,0,0,0-.853,3.092L103.1,56.21a3.842,3.842,0,0,0,.188.693l6.076-1.1A1.351,1.351,0,0,0,110.269,53.758Z" transform="translate(-73.097 -36.051)" opacity="0.1"/>
    <path id="Path_6060" data-name="Path 6060" d="M120.222,14.736,126.1,7.872a1.108,1.108,0,0,1,1.556-.126l4.007,3.386a1.107,1.107,0,0,0,.837.255l6.837-.756a1.108,1.108,0,0,1,1.17.743l1.682,4.93a1.107,1.107,0,0,1-.2,1.072l-3.695,4.379a4.328,4.328,0,0,0-.7,1.16l-2.72,6.686a1.108,1.108,0,0,1-1.34.645L122.542,27a1.108,1.108,0,0,1-.778-.875l-1.793-10.483A1.108,1.108,0,0,1,120.222,14.736Z" transform="translate(-89.131 -6.416)" fill="#f2f2f2"/>
    <g id="Group_4048" data-name="Group 4048" transform="translate(24.14 7.501)" opacity="0.1">
      <path id="Path_6061" data-name="Path 6061" d="M75.284,92.171a1.071,1.071,0,0,1-1-.692l-1.02-2.7a2.35,2.35,0,0,1,.914-2.788l1.907-1.237a1.07,1.07,0,0,1,1.165,1.8L75.341,87.79a.2.2,0,0,0-.077.235l1.02,2.7a1.071,1.071,0,0,1-1,1.449Z" transform="translate(-73.113 -80.015)"/>
      <path id="Path_6062" data-name="Path 6062" d="M187.039,74.857a1.071,1.071,0,0,1-.925-1.608l1.481-2.551a1.07,1.07,0,0,1,.926-.533h3.653a1.07,1.07,0,1,1,0,2.141h-3.036l-1.171,2.018A1.07,1.07,0,0,1,187.039,74.857Z" transform="translate(-169.864 -67.654)"/>
      <path id="Path_6063" data-name="Path 6063" d="M287,88.517a1.071,1.071,0,0,1-.892-1.661l.84-1.271a2.228,2.228,0,0,1,1.863-1h2.78a1.07,1.07,0,0,1,0,2.141h-2.78a.092.092,0,0,0-.077.042l-.84,1.271A1.07,1.07,0,0,1,287,88.517Z" transform="translate(-255.561 -80.014)"/>
      <path id="Path_6064" data-name="Path 6064" d="M148.645,55.977a1.066,1.066,0,0,1-.52-.136l-2.287-1.275a1.07,1.07,0,0,1,1.042-1.87l2.287,1.275a1.07,1.07,0,0,1-.522,2.005Z" transform="translate(-134.989 -52.56)"/>
    </g>
    <path id="Path_6065" data-name="Path 6065" d="M69.476,125.95H26.714a3.228,3.228,0,0,0-3.215,3.524l4.1,44.549a6.548,6.548,0,0,0,6.52,5.948H62.073a6.548,6.548,0,0,0,6.52-5.948l4.1-44.549A3.228,3.228,0,0,0,69.476,125.95Z" transform="translate(-6.427 -107.976)" fill="#f2f2f2"/>
    <path id="Path_6066" data-name="Path 6066" d="M48.787,424.683l.5,5.442a6.548,6.548,0,0,0,6.52,5.948H83.764a6.548,6.548,0,0,0,6.52-5.948l.5-5.442Z" transform="translate(-28.118 -364.078)" fill="#d0d0d0"/>
    <g id="Group_4049" data-name="Group 4049" transform="translate(27.337 26.274)" opacity="0.1">
      <path id="Path_6068" data-name="Path 6068" d="M189.505,208.8a1.07,1.07,0,0,1-1.07-1.07V185.179a1.07,1.07,0,0,1,2.141,0v22.553A1.07,1.07,0,0,1,189.505,208.8Z" transform="translate(-175.174 -184.109)"/>
      <path id="Path_6069" data-name="Path 6069" d="M99.065,208.8A1.071,1.071,0,0,1,98,207.85L95.518,185.3a1.07,1.07,0,1,1,2.128-.234l2.484,22.553a1.07,1.07,0,0,1-.947,1.181A1.106,1.106,0,0,1,99.065,208.8Z" transform="translate(-95.511 -184.109)"/>
      <path id="Path_6070" data-name="Path 6070" d="M265.019,208.8a1.111,1.111,0,0,1-.118-.007,1.07,1.07,0,0,1-.947-1.181l2.484-22.553a1.07,1.07,0,1,1,2.128.234l-2.484,22.553A1.071,1.071,0,0,1,265.019,208.8Z" transform="translate(-239.911 -184.109)"/>
    </g>
    <path id="Path_6071" data-name="Path 6071" d="M380.215,207.466,372.3,162.552a1.806,1.806,0,0,0-2.092-1.465l-2.743.484A1.806,1.806,0,0,0,366,163.663l7.919,44.914a1.806,1.806,0,0,0,2.092,1.465l2.743-.484A1.806,1.806,0,0,0,380.215,207.466Z" transform="translate(-300.035 -138.075)" fill="#d0d0d0"/>
    <path id="Path_6073" data-name="Path 6073" d="M84.423,51.484,82.372,39.852a4.431,4.431,0,0,0-3.623-3.594l-3.427-.575L73.314,24.291a2.879,2.879,0,0,0-3.332-2.333l-2.73.481.078-.844a4.288,4.288,0,0,0-2.269-4.19l1.708-1.993a2.2,2.2,0,0,0,.512-1.691l-.673-5.527a2.193,2.193,0,0,0-2.538-1.9L59.5,7.062a.052.052,0,0,1-.039-.009l-3.9-2.881a2.194,2.194,0,0,0-2.2-.235l-1.05.473a2.16,2.16,0,0,0-2.219-1.258l-6.837.757a.036.036,0,0,1-.028-.009L39.216.513a2.184,2.184,0,0,0-3.06.247L31.991,5.624l-4.263-1.3A2.431,2.431,0,0,0,24.9,5.474L22.5,9.849a.282.282,0,0,1-.18.138l-3.7.9a2.422,2.422,0,0,0-1.482,3.636l1.656,2.65A4.293,4.293,0,0,0,16.006,21.6l.286,3.1a1.07,1.07,0,1,0,2.132-.2l-.286-3.1a2.158,2.158,0,0,1,2.149-2.356H63.049A2.158,2.158,0,0,1,65.2,21.4L61.69,59.535H57.8a1.07,1.07,0,0,0,0,2.141h3.694L61.1,65.949a5.452,5.452,0,0,1-5.455,4.976H27.689a5.452,5.452,0,0,1-5.455-4.976l-.393-4.273H52.871a1.07,1.07,0,1,0,0-2.141H21.645l-2.776-30.19a1.07,1.07,0,1,0-2.132.2l3.367,36.6a7.583,7.583,0,0,0,7.586,6.92H55.646a7.583,7.583,0,0,0,7.586-6.92l3.014-32.77,6.579,37.313a2.878,2.878,0,0,0,2.826,2.378,2.9,2.9,0,0,0,.506-.045l2.743-.484A2.88,2.88,0,0,0,81.234,69.2L79.225,57.813,82.248,56.1A4.429,4.429,0,0,0,84.423,51.484ZM21.155,16.9l-2.2-3.517a.281.281,0,0,1,.172-.422l3.7-.9a2.428,2.428,0,0,0,1.552-1.19l2.4-4.375a.282.282,0,0,1,.328-.134L30.472,7.4l-.193.225a2.17,2.17,0,0,0-.493,1.784l1.282,7.5ZM47.47,16.1l-.329.808H33.24L31.9,9.046a.037.037,0,0,1,.009-.03l1.263-1.475,0,0,4.611-5.385a.037.037,0,0,1,.053,0l4.006,3.386a2.187,2.187,0,0,0,1.646.5l6.837-.757a.039.039,0,0,1,.039.025l.306.9v0l1.376,4.031a.037.037,0,0,1-.007.036l-3.695,4.38A5.381,5.381,0,0,0,47.47,16.1Zm15.2.808H49.453a3.253,3.253,0,0,1,.528-.873l3.695-4.379a2.189,2.189,0,0,0,.4-2.108l-1.059-3.1,1.225-.552a.052.052,0,0,1,.052.006l3.9,2.881a2.2,2.2,0,0,0,1.664.4l4.567-.764a.048.048,0,0,1,.04.01.047.047,0,0,1,.02.035l.673,5.527a.051.051,0,0,1-.012.04ZM78.529,70.429l-2.743.484a.736.736,0,0,1-.852-.6L67.014,25.4a.737.737,0,0,1,.6-.852l2.743-.484a.736.736,0,0,1,.852.6l7.919,44.914A.737.737,0,0,1,78.529,70.429Zm2.664-16.191L78.83,55.576,75.717,37.92l2.678.45a2.286,2.286,0,0,1,1.869,1.854l2.051,11.632A2.286,2.286,0,0,1,81.193,54.238Z" transform="translate(0)" fill="#6a60da"/>
  </g>
</svg>
`;

export const DeleteItemIcon = () => <SvgCss xml={xml} />;