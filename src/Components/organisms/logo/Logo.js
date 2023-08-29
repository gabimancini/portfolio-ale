import TextWithArrow from "../../molecules/textWithArrow/textWithArrow";
import Img from "../../atoms/img/Img";
import logoImg from './../../../assets/logo_espacio.png';
import flechaLogoImg from './../../../assets/flecha_logo.png';
import './logo.css';
const Logo = () => {
    return (
        <div className="logo_container">
            <Img src={logoImg} alt="Logo" />
            <TextWithArrow src={flechaLogoImg} text="Logo" className="color-black-aplha-6 align-center"/>
        </div>
    )
}
export default Logo;