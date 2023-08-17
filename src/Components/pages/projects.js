import Cards from "../organisms/cards";
import Gabriela from '../../assets/gabriela.svg';
import Pet from '../../assets/pet.svg';
import {useState} from 'react';
import Devmagister from '../../assets/devmagister.svg';
import Steak from '../../assets/steak.svg';
const Projects = () => {
    const [expanded, setExpanded] = useState(false)
    
    let browser1 = "browser1"
    let projects = [
        {
            button1: "Web site",
            button2: "Figma",
            img: Gabriela,
            bg: browser1
        },
        {
            button1: "E-commerce",
            img: Pet,
            bg: "browser1"
        },
        {
            button1: "Figma",
            text: "under construction",
            img: Devmagister,
            bg: "browser1"
        },
        {
            button1: "Figma",
            text: " study case app steackhouse",
            img: Steak,
            bg: "browser1"
        }

    ]
    const onClickHandle= ()=>{
        setExpanded(!expanded)
           projects.splice(0, 2);
        console.log(window.innerWidth)
       
    }
    
    return (
        <section id="projects">
        <div className="container">
        <div className="text-center p-y-60">
            <h2 className="font-size-h2 color-secondary-black">Some of my projects </h2>
            <p className="font-size-paragraph color-black-aplha-6">These projects I've worked on are just the tip of the iceberg, but I'm proud of each <br/> and every one of them.
            </p>
            </div>
            <div className="d-flex wrap justify-space-around p-x-20">

            {expanded?projects.map((project,index)=>( 
                    
                    <Cards key={index} btnText={project.button1} text={project.text} src={project.img} className="text-left bg-browser1"/>
                )): projects.slice(0,2).map((project,index)=>( 
                    
                    <Cards key={index} btnText={project.button1} text={project.text} src={project.img} className="text-left bg-browser1"/>
                )
                )
            }
            </div>{
                window.innerWidth<780?
                <button onClick={onClickHandle}>{expanded?"show less":"show more"}</button>:""
            }
            
            </div>
        </section>
    )
}
export default Projects;