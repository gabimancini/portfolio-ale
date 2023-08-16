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
    return (
        <section id="skills">
            <div className="container d-flex">
                <div className="container__col-lg-6 d-flex">
                    {Stickies.map((sticky, index) => (
                        <Sticky key={index} title={sticky.title} text={sticky.text} className={`bg-${sticky.bg} w-200 h-200 p-20`} />
                    )
                    )}
                </div>
                <div className="container__col-lg-6">
                <h2 className="font-size-h2">My skills</h2>
                    <ul>
                        <li>Probando</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Skills;