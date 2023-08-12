import IconLink from '../../molecules/iconLink/IconLink';
import List from '../../molecules/list/List';
import instagramIcon from './../../../assets/instagram_icon.png';
import linkedinIcon from './../../../assets/linkedin_icon.png';
import behanceIcon from './../../../assets/behance_icon.png';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer_inner">
                <h2>Alejandro Ritta</h2>
                <p>
                    Diseño UX: la combinación perfecta entre estética y funcionalidad para crear experiencias de usuario memorables.
                </p>
            </div>
            <div className="footer_inner">
                <h4>Páginas</h4>
                <ul>
                    <List href='#' variant='nav' text='Home' />
                    <List href='#' variant='nav' text='Sobre Mí' />
                    <List href='#' variant='nav' text='Proyectos' />
                </ul>
            </div>
            <div className="footer_inner">
                <h4>Seguime</h4>
                <div>
                    <IconLink href="#" src={instagramIcon} alt='Instagram' className='icon' />
                    <IconLink href="#" src={linkedinIcon} alt='Linkedin' className='icon' />
                    <IconLink href="#" src={behanceIcon} alt='Behance' className='icon' />
                </div>
            </div>
        </footer>
    )
}
export default Footer;