import Img from "../../atoms/img/Img";
import HeroImg from "../../../assets/hero.svg";
const Hero = () => {
    return (
        <section id="hero">
        <div className="container">
        <div>
            <h2>Hola!</h2>
            <h1>Mi nombre es Alejandro Ritta</h1>
            <h1>Soy diseñador web</h1>
            </div>
            <div>
<Img src={HeroImg} alt="Hero" className="hero_img"/>
            </div>
        </div>
        </section>
    )
}
export default Hero;