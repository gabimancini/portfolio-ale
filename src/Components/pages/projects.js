import Cards from "../organisms/cards";
import Gabriela from '../../assets/frame1.svg';
import Pet from '../../assets/frame2.svg';
import Devmagister from '../../assets/frame3.svg';
import Steak from '../../assets/frame4.svg';
import WebLink from "../organisms/webLink";
import FigmaLink from "../organisms/figmaLink";

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
            hreffigma:undefined
        },
        { 
            img: Devmagister, 
            hrefweb: "https://www.devmagister.com/",
            hreffigma: "https://www.figma.com/file/98Vep8i3sGPi3CnA7zm5j8/DevMagister?type=design&node-id=702%3A266&mode=design&t=2sbJPkWKx5crb6wR-1"
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
                <div className="d-flex wrap justify-space-around p-x-35">

                    {projects.map((project, index) => (
                        <div className={`card w-1/2 container__col-sm-12 container__col-lg-5  m-y-20 `}>
                            <Cards key={index}  src={project.img}  />
                            {project.hreffigma !== undefined ?<FigmaLink href={project.hreffigma} />: ""}
                            {project.hrefweb !== undefined ?<WebLink  href={project.hrefweb} />: ""}
                            {project.img === Steak ? <span> study case app steackhouse</span>:""}
                            
                        </div>
                    ))
                    }
                </div>

            </div>
        </section>
    )
}
export default Projects;