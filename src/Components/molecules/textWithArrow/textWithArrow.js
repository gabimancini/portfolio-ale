import Img from "../../atoms/img/Img";
import '../../../css/index.css';
const TextWithArrow = ({src,text,className})=> {
    return(
        <>
        <div className={`textWithArrow_container ${className}`}>
            <Img src={src} className="line" />
            <span>{text}</span>
        </div>
        </>
    )
}
export default TextWithArrow;