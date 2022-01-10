import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ForwardArrow = ({ props }) => {
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
            <Path
                transform="rotate(-90 12 12)"
                d="M0 0H24V24H0z"
                opacity={0}
                fill="#fff"
            />
            <Path
                d="M5 13h11.86l-3.63 4.36a1 1 0 001.54 1.28l5-6a1.19 1.19 0 00.09-.15c0-.05.05-.08.07-.13a.961.961 0 000-.72c0-.05-.05-.08-.07-.13a1.19 1.19 0 00-.09-.15l-5-6a1 1 0 10-1.54 1.28L16.86 11H5a1 1 0 000 2z"
                fill="#fff"
            />
        </Svg>
    );
}

export default ForwardArrow;