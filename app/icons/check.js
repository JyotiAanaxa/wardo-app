import * as React from "react"
import Svg, { Defs, G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Check(props) {
  return (
    <Svg
      width={126.824}
      height={108.994}
      viewBox="0 0 126.824 108.994"
      {...props}
    >
      <Defs></Defs>
      <G filter="url(#prefix__a)">
        <Path
          d="M87.629 35.19l-33.3 33.3L39.19 53.355"
          fill="none"
          stroke="#6a60da"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={13}
        />
      </G>
    </Svg>
  )
}

export default Check
