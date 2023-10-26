import IconLink from '../../molecules/iconLink/IconLink';
import List from '../../molecules/list/List';
import instagramIcon from './../../../assets/instagram_icon.png';
import linkedinIcon from './../../../assets/linkedin_icon.png';
import behanceIcon from './../../../assets/behance_icon.png';
import '../../../css/index.css';

const Footer = () => {
    const develope = '</>';
    return (
        <footer className='m-t-70'>
            <div className='container p-x-20 p-y-40'>
                <div className="footer_inner">
                    <h2 className='color-blue font-size-h2'>Alejandro Ritta</h2>
                    <p className='color-black-aplha-5'>
                        UX Design: the perfect combination of aesthetics and functionality to create memorable user experiences.                </p>
                </div>
                <div className="footer_inner m-t-sm-20 m-t-md-0">
                    <h3 className='font-size-h3 '>Pages</h3>
                    <ul className='m-x-20 m-y-10'>
                        <List href='#' variant='nav' text='About me' className='m-y-10' />
                        <List href='#' variant='nav' text='Projects' className='m-y-10' />
                        <List href='#' variant='nav' text='Contact me' className='m-y-10' />
                    </ul>
                </div>
                <div className="footer_inner m-t-sm-20 m-t-md-0">
                    <h3 className='font-size-h3'>Follow me</h3>
                    <div className='m-x-20'>
                        <IconLink href="https://www.instagram.com/ale_tom79/" src={instagramIcon} alt='Instagram' className='icon' />
                        <IconLink href="https://www.linkedin.com/in/alejandroritta/" src={linkedinIcon} alt='Linkedin' className='icon' />
                        <IconLink href="https://www.behance.net/alejandroritta" src={behanceIcon} alt='Behance' className='icon' />
                    </div>
                    <a href="mailto:aletomasr@gmail.com" className='email font-size-paragraph'>aletomasr@gmail.com</a>
                </div>
            </div>
            <div className='footer_bottom'>
                <div className='container d-flex wrap justify-center'>
                    <p className='developer_name font-size-md-14'>Copyright © <span className='color-red'> Alejandro Ritta</span> 2023  </p>
                    <p className='developer_name font-size-md-14'> {develope} Developed By<span className='color-red'> Gabriela Mancini</span> </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;