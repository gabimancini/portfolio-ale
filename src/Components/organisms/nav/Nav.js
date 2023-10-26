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
    const [isClicked, setIsClicked] = useState(false)

    return (
        <nav className=" " >
            <TextWithArrow src={flechaBarraImg} text="nav bar" className="color-black-aplha-6 align-end top-40 left-m120 position-absolute"/>

               <Button onClick={()=>setIsOpen(!isOpen)} className="hamburger bg-hamburgerImg" id={`${isOpen && "open"}`} />
 
            <ul onClick={()=>setIsOpen(!isOpen)} id={`${isOpen && "open"}`} >
            <Link to="/">Home</Link>
            <HashLink to="/#about"> About me</HashLink>
            <Link to="/projects"> Projects</Link>
            <a href="Alejandro_Ritta_CV_resume.pdf" download> Download CV</a>
                <div className="d-flex direction-column align-center">
                <h3 className="hidden-md-up">Follow me</h3>
                <div className="text-center"> 
                    <IconLink href="https://www.instagram.com/ale_tom79/"  src={instagramIcon} alt='Instagram' className='icon' />
                    <IconLink href="https://www.linkedin.com/in/alejandroritta/" src={linkedinIcon} alt='Linkedin' className='icon' />
                    <IconLink href="https://www.behance.net/alejandroritta" src={behanceIcon} alt='Behance' className='icon' />
                    </div>
                    <a href="mailto: aletomasr@gmail.com" className="hidden-lg-up">aletomasr@gmail.com</a>
                    </div>
            </ul>
            <TextWithArrow src={flechaIconsImg} text="social icons" className="social color-black-aplha-6 position-absolute top-50 right-140 align-end" />

        </nav>
    )
}

export default Nav;