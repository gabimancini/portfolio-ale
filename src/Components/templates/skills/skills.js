import Sticky from "../../molecules/sticky/sticky";

const Skills = () => {
    const Stickies = [
        {
            title: "Research",
            text: "Systematically study target users to collect and analyze data that will help inform the product design process.",
            bg: "sticky_green"
        },
        {
            title: "Product design",
            text: "Define the solution, create a roadmap, establish the architecture, and design the product.",
            bg: "sticky_blue"
        },
        {
            title: "Testing",
            text: "Establish usability, meet accessibility needs, and ensure a pleasant solution.",
            bg: "sticky_yellow"
        }
    ]
    const List = ["Figma  100%", "Justinmind  80%", "Agile methodology 90%", "Adobe XD 100%", "Lenguage 60% ", "Google Presentation 100%"]
    return (
        <section id="skills">
            <div className="container d-flex p-y-100 p-x-20 wrap justify-space-between">
                <div className="container__col-lg-6 d-flex align-center wrap direction-md-col">
                    {Stickies.map((sticky, index) => (
                        <Sticky key={index} title={sticky.title} text={sticky.text} className={`bg-${sticky.bg} sticky_skills h-200 p-10 font-size-1`} />
                    )
                    )}
                </div>
                <div className="container__col-lg-5">
                <h2 className="font-size-h2">My skills</h2>
                    <ul className="d-flex wrap">
                        {List.map((item, index)=><li key={index} className="skills_list font-size-1_5 p-10">{item}</li>)}
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Skills;