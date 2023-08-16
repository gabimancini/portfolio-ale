import {Routes, Route } from "react-router-dom";
import Home from "../Components/pages/home";
import Projects from "../Components/pages/projects";
import Quote from "../Components/pages/quote";
import Contact from "../Components/pages/contact";
const Router = ()=>{
    return(
        <Routes>
            <Route exact path="/" element={<Home />} ></Route>
            <Route exact path="/projects" element={<Projects />}/>
            <Route exact path="/quote" element={<Quote />}/>
            <Route exact path="/contact" element={<Contact />}/>
        </Routes>
    )
}
export default Router;