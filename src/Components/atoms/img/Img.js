import classnames from "classnames";
import './img.css';
const Img = ({src, alt, className})=>{
    const imgClassName = classnames({
        icon: className === 'icon',
        line: className === 'line',
        img: className === 'img'
    })
    return <img src={src} alt={alt} className={imgClassName}></img>
}

export default Img;