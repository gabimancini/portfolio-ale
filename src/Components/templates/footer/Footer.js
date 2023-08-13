import IconLink from '../../molecules/iconLink/IconLink';
import List from '../../molecules/list/List';
import instagramIcon from './../../../assets/instagram_icon.png';
import linkedinIcon from './../../../assets/linkedin_icon.png';
import behanceIcon from './../../../assets/behance_icon.png';
import '../../../css/index.css';

const Footer = () => {
    return (
        <footer>
        <div className='container'>
            <div className="footer_inner">
                <h2>Alejandro Ritta</h2>
                <p>
                UX Design: the perfect combination of aesthetics and functionality to create memorable user experiences.                </p>
            </div>
            <div className="footer_inner">
                <h3>Pages</h3>
                <ul>
                    <List href='#' variant='nav' text='About me' />
                    <List href='#' variant='nav' text='Projects' />
                    <List href='#' variant='nav' text='Contact me' />
                </ul>
            </div>
            <div className="footer_inner">
                <h3>Follow me</h3>
                <div>
                    <IconLink href="#" src={instagramIcon} alt='Instagram' className='icon' />
                    <IconLink href="#" src={linkedinIcon} alt='Linkedin' className='icon' />
                    <IconLink href="#" src={behanceIcon} alt='Behance' className='icon' />
                </div>
                <a href="mailto:aletomasr@gmail.com" className='email'>aletomasr@gmail.com</a>
            </div>
            </div>
            <div className='footer_bottom'>
            <div className='container d-flex justify-between'>
            <p className='developer_name'>Copyright © <span> Alejandro Ritta</span> 2023 </p>
                <p className='developer_name'>Developed By<span> Gabriela Mancini</span> </p>
            </div>
            </div>
        </footer>
    )
}
export default Footer;