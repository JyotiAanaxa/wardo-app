import * as React from "react"
import Svg, { Defs, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

function Layer(props) {
  return (
    <Svg width={67.515} height={66.318} viewBox="0 0 67.515 66.318" {...props}>
      <Defs></Defs>
      <Path
        fill="#fae24a"
        d="M19.696 62.913l7.705-10.963 4.845 3.405-7.705 10.963z"
      />
      <Path
        fill="#ef709d"
        d="M14.854 38.48l8.35-15.515 9.126 4.911-8.35 15.515z"
      />
      <Path
        className="prefix__c"
        d="M52.117 60.268l11.845-8.884 3.553 4.738-11.845 8.884zM0 8.945L4.285-.003l5.342 2.558-4.285 8.948zM44.769 15.587l2.827-5.95 3.542 1.683-2.827 5.95z"
      />
    </Svg>
  )
}

export default Layer
