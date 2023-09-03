import Img from "../atoms/img/Img";
const Cards = ({text,src,alt,className, href})=>{
    return(
        <div>
        <Img src={src} alt={alt} className={className} />
        
              <span>{text}</span>
              
        </div>
    )
}
export default Cards;