import Svg, { Path } from "react-native-svg";

const Like = (props) => {
    return (
        <Svg width={props.width} height={props.height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M20 14H15C15 15.6569 13.6569 17 12 17C10.3431 17 9 15.6569 9 14H4M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z"
            stroke={props.color} strokeWidth="2" strokeLinejoin="round"/>
        </Svg>
    )
}
export default Like