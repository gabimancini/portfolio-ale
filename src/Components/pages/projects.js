import Cards from "../organisms/cards";
import Gabriela from '../../assets/frame1.svg';
import Pet from '../../assets/frame2.svg';
import Band from '../../assets/frame5.svg';
import Steak from '../../assets/frame4.svg';
import WebLink from "../organisms/webLink";
import FigmaLink from "../organisms/figmaLink";
import TalkLink from "../organisms/talkLink";

const Projects = () => {

    let projects = [
        {
            img: Gabriela,
            hrefweb: "https://gabimancini.netlify.app/",
            hreffigma: "https://www.figma.com/file/ORtyaw1VpWwkCMXhA73OSP/Gabriela-Mancini?type=design&node-id=0%3A1&mode=design&t=5mws7Jc4kSQH8t2a-1"
        },
        {
            img: Pet,
            hrefweb: "https://petroom.store/",
            hreffigma: undefined
        },
        {
            img: Band,
            hrefweb: "https://www.purplecircleband.com/",
            hreffigma: "https://www.figma.com/file/b0ak52sx6B2fc5ZSwtzi4A/Purple-Circle?node-id=25%3A9998&mode=dev"
        },
        {
            img: Steak,
            hreffigma: "https://www.figma.com/file/baJpZaZA7XhBpRvTrqksMW/Dise%C3%B1o-Baja-y-alta-Fidelidad-curso-UX?type=design&node-id=250%3A113&mode=design&t=js6511yMPjgaCC7K-1",
            hrefweb: undefined
        }

    ]

    return (
        <section id="projects">
            <div className="container">
                <div className="text-center p-y-60">
                    <h2 className="font-size-h2 color-secondary-black">Some of my projects </h2>
                    <p className="font-size-paragraph color-black-aplha-6">These projects I've worked on are just the tip of the iceberg, but I'm proud of each <br /> and every one of them.
                    </p>
                </div>
                <div className="d-flex direction-sm-col wrap direction-md-row justify-sm-center justify-md-space-around  padding-x-sm-20 padding-x-lg-35">

                    {projects.map((project, index) => (
                        <div className={`card w-1/2 container__col-sm-12 container__col-md-5 m-y-20`}>
                            <Cards key={index} src={project.img} />
                            {project.hreffigma !== undefined ? <FigmaLink href={project.hreffigma} /> : ""}
                            {project.hrefweb !== undefined ? <WebLink href={project.hrefweb} /> : ""}
                            {project.img === Steak ? <span className="font-size-span"> study case app steackhouse</span> : ""}

                        </div>
                    ))
                    }
                </div>
                <div className="container text-center m-t-60">
                    <p className="description maxw-664 m-auto text-left">Transform your vision into digital reality. Discover a realm of creativity and professionalism in the web design portfolio, where I craft captivating experiences that leave a lasting imprint on the web.
                    </p>
                    <TalkLink href="/contact"/>
                </div>

            </div>
        </section>
    )
}
export default Projects;