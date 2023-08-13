import { useState } from "react"; 
import IconLink from "../../molecules/iconLink/IconLink";
import '../../../css/index.css';
import instagramIcon from './../../../assets/instagram_icon.png';
import linkedinIcon from './../../../assets/linkedin_icon.png';
import behanceIcon from './../../../assets/behance_icon.png';
import flechaBarraImg from './../../../assets/flecha_barra_navegacion.png';
import flechaIconsImg from './../../../assets/icons_arrow.svg';
import TextWithArrow from "../../molecules/textWithArrow/textWithArrow";
import Button from "../../atoms/button/Button";
import { Link } from "react-router-dom"; 
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <TextWithArrow src={flechaBarraImg} text="nav bar" className="n"/>

               <Button onClick={()=>setIsOpen(!isOpen)} className="hamburger" id={`${isOpen && "open"}`} />
 
            <ul>
            <Link to="/">Home</Link>
            <Link to="/about"> About me</Link>
            <Link to="/projects"> Projects</Link>
                <div>
                    <IconLink href="#" src={instagramIcon} alt='Instagram' className='icon' />
                    <IconLink href="#" src={linkedinIcon} alt='Linkedin' className='icon' />
                    <IconLink href="#" src={behanceIcon} alt='Behance' className='icon' />
                </div>
                <TextWithArrow src={flechaIconsImg} text="social icons" className="social" />
            </ul>
        </nav>
    )
}

export default Nav;