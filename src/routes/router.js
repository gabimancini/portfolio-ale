import {Routes, Route } from "react-router-dom";
import Home from "../Components/pages/home";
import About from "../Components/pages/about";
import Projects from "../Components/pages/projects";
const Router = ()=>{
    return(
        <Routes>
            <Route exact path="/" element={<Home />} ></Route>
            <Route exact path="/about" element={<About />}> </Route>
            <Route path="/projects" element={<Projects />}/>
        </Routes>
    )
}
export default Router;