import { Link } from "react-router-dom";
import Img from "../../atoms/img/Img";
import HeroImg from "../../../assets/hero.svg"
import TextWithArrow from "../../molecules/textWithArrow/textWithArrow";
import FlechaTitle from '../../../assets/flech_title.svg';
const Hero = () => {
    return (
        <section id="hero">

            <div className="container d-flex wrap position-relative justify-space-between p-x-20 p-y-100">
                <div className="container__col-sm-12 container__col-lg-6">
                <TextWithArrow src={FlechaTitle} text="title" className="color-black-aplha-6 position-absolute d-flex align-center"/>
                    <h2 className="color-primary-black font-size-h2">Hello!</h2>
                    <h1 className="font-size-h1 color-secondary-black">Mi name is<br /> <span className="color-blue">Alejandro Ritta.</span> <br />
                     I’m a UX Designer</h1>
                     <div className="d-flex">
                     <Link to="/quote" className="bg-hero_btn p-20 m-10 w-188 text-center">Quote your design</Link>
                     <Link to="/contact" className="bg-hero_btn p-20 m-10 w-188 text-center">Contact me</Link>
                     </div>
                </div>
                <div className="container__col-sm-12 container__col-lg-5 d-flex">
                    <Img src={HeroImg} alt="Hero" className="hero_img" />
                </div>
                <div className="sticky position-absolute bg-stickyImg"><p className="font-size-paragraph">desktop<br/>
                1440x1024px</p></div>
            </div>
        </section>
    )
}
export default Hero;