import { Link } from "react-router-dom";
import Img from "../../atoms/img/Img";
import HeroImg from "../../../assets/hero.svg"
import TextWithArrow from "../../molecules/textWithArrow/textWithArrow";
import FlechaTitle from '../../../assets/flech_title.svg';
const Hero = () => {
    const tabletText = "tablet";
    const tabletSize = "768px"
    const desktopText = "desktop";
    const desktopSize = "1440x1024px"
    return (
        <section id="hero">

            <div className="container d-flex direction-sm-col direction-md-row position-relative justify-space-between padding-x-lg-70 p-y-100 padding-sm-20 padding-y-lg-100">
                <div className="container__col-sm-12 container__col-lg-6">
                    <TextWithArrow src={FlechaTitle} text="title" className="color-black-aplha-6 position-absolute d-flex align-start top-40 left-200" />
                    <h3 className="color-primary-black font-size-h3">Hello!</h3>
                    <h1 className="font-size-h1 color-secondary-black">Mi name is<br /> <span className="color-blue">Alejandro Ritta.</span> <br />
                        I’m a UX Designer</h1>
                    <div className="d-flex justify-sm-center justify-lg-start p-y-30">
                       {/*<Link to="/quote" className="bg-hero_btn p-20 m-10 w-188 text-center hidden-md-down">Quote your design</Link>*/}
                        <Link to="/contact" className="bg-hero_btn p-20 m-10 w-188 text-center width-md-btn bg-md-contain padding-md-10">Contact me</Link>
                    </div>
                </div>
                <div className="container__col-sm-12 container__col-lg-5 d-flex">
                    <Img src={HeroImg} alt="Hero" className="hero_img" />
                </div>
                <div className="sticky position-absolute bg-stickyImg top-md-0">
                    {window.innerWidth >= 768 && window.innerWidth < 1440 
                        ? <p className="font-size-paragraph">
                            {tabletText}<br />{tabletSize}
                        </p>
                        : <p className="font-size-paragraph">
                            {desktopText}<br /> {desktopSize}
                        </p>}
                </div>
            </div>
        </section>
    )
}
export default Hero;