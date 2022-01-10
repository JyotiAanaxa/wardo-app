import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ActiveMaleIcon = ({ props }) => {
    return (
        <Svg width={24.862} height={24.862} viewBox="0 0 24.862 24.862" {...props}>
            <Path
                d="M16.871 0v1.776h4.96l-4.3 4.3a10.679 10.679 0 101.256 1.256l4.3-4.3v4.96h1.776V0zm-6.216 23.087a8.879 8.879 0 118.879-8.879 8.89 8.89 0 01-8.879 8.879z"
                fill="#fff"
            />
        </Svg>
    );
}

export default ActiveMaleIcon;