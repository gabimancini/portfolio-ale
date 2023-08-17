import Img from "../atoms/img/Img";
const Cards = ({btnText,text,src,alt,className})=>{
    return(
        <div className={`card w-1/2 container__col-sm-12 container__col-lg-5 bg-browser1 p-y-40 p-x-5`}>
        <Img src={src} alt={alt} className={className} />
        <div>
             <button>{btnText}</button>
             <span>{text}</span>
             </div>
        </div>
    )
}
export default Cards;