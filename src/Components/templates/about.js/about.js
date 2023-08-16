import Img from "../../atoms/img/Img";
import AboutImg from "../../../assets/about.svg"
const About = () => {
    return (
        <section id="about">
            <div className="container d-flex justify-between wrap">
                <div className="container__col-lg-7">
                    <h2 className="color-primary-black font-size-h2">About ME</h2>
                    <p className="font-size-paragraph color-black-aplha-6">Hello! my name is Alejandro, I'm a UX designer. I consider myself a technology enthusiast from an early age. I took my first steps into the new era of "multimedia" around 1995 with my first PC. That was the starting point for me to enter the beautiful world of technology. I've ventured through various areas, from working at a Help Desk service to reaching a Data Center, exploring algorithms and programming to some extent. However, something was missing... something that always caught my attention: design. I began to investigate and delve into what I'm truly passionate about, which is "user experience."
                    </p>
                </div>
                <div className="container__col-lg-3">
                    <Img src={AboutImg} alt="Profile Avatar" />
                </div>
            </div>
        </section>
    )
}
export default About;