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
import { HashLink } from 'react-router-hash-link';
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="p-x-20 p-y-30">
            <TextWithArrow src={flechaBarraImg} text="nav bar" className="color-black-aplha-6"/>

               <Button onClick={()=>setIsOpen(!isOpen)} className="hamburger bg-hamburgerImg" id={`${isOpen && "open"}`} />
 
            <ul>
            <Link to="/">Home</Link>
            <HashLink to="/#about"> About me</HashLink>
            <Link to="/projects"> Projects</Link>
                <div>
                    <IconLink href="#" src={instagramIcon} alt='Instagram' className='icon' />
                    <IconLink href="#" src={linkedinIcon} alt='Linkedin' className='icon' />
                    <IconLink href="#" src={behanceIcon} alt='Behance' className='icon' />
                </div>
                <TextWithArrow src={flechaIconsImg} text="social icons" className="social color-black-aplha-6" />
            </ul>
        </nav>
    )
}

export default Nav;