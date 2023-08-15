import Img from "../../atoms/img/Img";
import HeroImg from "../../../assets/hero.svg";
import StickyImg from "../../../assets/stickyImg.svg";
const Hero = () => {
    return (
        <section id="hero">
            <div className="container d-flex wrap position-relative">
                <div className="container__col-sm-12 container__col-lg-6">
                    <h2 class="color-primary-black font-size-h2">Hello!</h2>
                    <h1 className="font-size-h1 color-secondary-black">Mi name is<br /> <span className="color-blue">Alejandro Ritta</span> <br />
                     I’m a UX Designer</h1>
                </div>
                <div className="container__col-sm-12 container__col-lg-6">
                    <Img src={HeroImg} alt="Hero" className="hero_img" />
                </div>
                <div className="sticky position-absolute bg-stickyImg"><p className="font-size-paragraph">desktop<br/>
                1440x1024px</p></div>
            </div>
        </section>
    )
}
export default Hero;