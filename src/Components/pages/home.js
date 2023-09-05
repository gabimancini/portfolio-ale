import Hero from "../templates/hero/hero";
import Skills from "../templates/skills/skills";
import About from "../templates/about.js/about";
import Contact from "../templates/contact/contact";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Contact />
        </>
    )
}
export default Home;