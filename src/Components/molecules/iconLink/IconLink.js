import Img from "../../atoms/img/Img";
import Links from "../../atoms/link/Links";
const IconLink = ({href, src, alt, className})=> {
    return (
        <Links href={href} target="_blank" rel="noreferrer" ><Img src={src} alt={alt} className={className} /></Links>
    )
}

export default IconLink;