import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const LeafIcon = ({ props }) => {
    return (
        <Svg width={24} height={28} viewBox="0 0 19.846 23.19" {...props}>
            <G data-name="Group 1718">
                <Path
                    data-name="Path 2212"
                    d="M173.6 224.933h-5.912a7.024 7.024 0 00-7.016 7.016v5.913a1.1 1.1 0 001.1 1.1h5.912a7.024 7.024 0 007.016-7.016v-5.912a1.1 1.1 0 00-1.1-1.101z"
                    transform="rotate(-45 -9432.014 19827.964) translate(11090.231 12259.001)"
                    fill="#c5f05c"
                />
                <Path
                    data-name="Path 2214"
                    d="M138.7 305.59a1.1 1.1 0 00-1.561 0l-8.278 8.278a1.1 1.1 0 001.561 1.561l8.278-8.278a1.1 1.1 0 000-1.561z"
                    transform="rotate(-45 -9432.014 19827.964) translate(11120 12184.579)"
                    fill="#66a182"
                />
            </G>
        </Svg>
    );
}

export default LeafIcon;