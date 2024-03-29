import Img from "../../atoms/img/Img";
import AboutImg from "../../../assets/about.svg";
import TextWithArrow from "../../molecules/textWithArrow/textWithArrow";
import FlechaTitle from '../../../assets/myPicture_arrow.svg';

const About = () => {
    return (
        <section id="about">
            <div className="container d-flex justify-space-between direction-sm-col direction-md-row p-y-100 ">
                <div className="container__col-lg-7 container__col-md-8 ">
                    <h2 className="color-primary-black font-size-h2 text-sm-center text-md-left m-y-10 m-b-lg-25">About ME</h2>
                    <p className="font-size-paragraph color-black-aplha-5">Hello! my name is Alejandro, I'm a UX designer. I consider myself a technology enthusiast from an early age. I took my first steps into the new era of "multimedia" around 1995 with my first PC. That was the starting point for me to enter the beautiful world of technology. I've ventured through various areas, from working at a Help Desk service to reaching a Data Center, exploring algorithms and programming to some extent. However, something was missing... something that always caught my attention: design. I began to investigate and delve into what I'm truly passionate about, which is "user experience."
                    </p>
                </div>
                <div className="container__col-sm-12 container__col-md-4 container__col-lg-5 m-md-auto m-sm-20 padding-y-md-70 text-lg-right position-relative">
                <TextWithArrow src={FlechaTitle} text="My picture" className="picture position-absolute left-m50 top-m10" />

                    <Img src={AboutImg} alt="Profile Avatar" />
                </div>
            </div>
        </section>
    )
}
export default About;