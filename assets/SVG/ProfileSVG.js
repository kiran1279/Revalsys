import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ProfileSVG = ({ size = 60, color = "#292D32" }) => (
    <Svg
        width={size}
        height={size}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            // opacity={0.4}
            d="M30.3017 31.95C30.1267 31.925 29.9017 31.925 29.7017 31.95C25.3017 31.8 21.8018 28.2 21.8018 23.775C21.8018 19.25 25.4517 15.575 30.0017 15.575C34.5267 15.575 38.2017 19.25 38.2017 23.775C38.1767 28.2 34.7017 31.8 30.3017 31.95Z"
            stroke={color}
            strokeWidth={3.75}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            // opacity={0.34}
            d="M46.8495 48.4503C42.3995 52.5253 36.4995 55.0003 29.9995 55.0003C23.4994 55.0003 17.5994 52.5253 13.1494 48.4503C13.3994 46.1003 14.8994 43.8003 17.5744 42.0003C24.4244 37.4503 35.6245 37.4503 42.4245 42.0003C45.0995 43.8003 46.5995 46.1003 46.8495 48.4503Z"
            stroke={color}
            strokeWidth={3.75}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M30 55C43.807 55 55 43.807 55 30C55 16.1929 43.807 5 30 5C16.1929 5 5 16.1929 5 30C5 43.807 16.1929 55 30 55Z"
            stroke={color}
            strokeWidth={3.75}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default ProfileSVG;
