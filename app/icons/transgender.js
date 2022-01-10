import * as React from "react";
import Svg, { Path } from "react-native-svg";

const TransGenderIcon = ({ props }) => {
    return (
        <Svg width={26.003} height={27.503} viewBox="0 0 26.003 27.503" {...props}>
            <Path
                d="M39.513.447L34.114 0l-.133 1.606 2.987.247-5.024 5.023a7.911 7.911 0 00-9.972 0l-1.511-1.512 1.422-1.422L20.744 2.8l-1.423 1.425-2.394-2.394 2.713-.225L19.507 0l-5.126.424-.424 5.126 1.606.133.225-2.713 2.394 2.394-1.423 1.423 1.14 1.14L19.321 6.5l1.51 1.51a7.91 7.91 0 005.321 12.87v2.832H23.94v1.612h2.212V27.5h1.612v-2.172h2.212v-1.611h-2.212v-2.833a7.91 7.91 0 005.321-12.87l5.022-5.022.247 2.987 1.606-.133zm-8.1 17.022a6.3 6.3 0 110-8.905 6.256 6.256 0 01-.002 8.905z"
                transform="translate(-13.957)"
                fill="#a3a3a3"
            />
        </Svg>
    );
}

export default TransGenderIcon;