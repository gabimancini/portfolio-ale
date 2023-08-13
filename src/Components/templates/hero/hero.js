import Img from "../../atoms/img/Img";
import HeroImg from "../../../assets/hero.svg";
import StickyImg from "../../../assets/stickyImg.svg";
const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero_text">
                    <h2>Hello!</h2>
                    <h1>Mi name is<br /> <span>Alejandro Ritta</span></h1><br />
                    <h1> I’m a UX Designer</h1>
                </div>
                <div className="hero_img">
                    <Img src={HeroImg} alt="Hero" className="hero_img" />
                </div>
                <div className="sticky"><p>desktop<br/>
                1440x1024px</p></div>
            </div>
        </section>
    )
}
export default Hero;