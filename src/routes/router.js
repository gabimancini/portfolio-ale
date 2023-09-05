import {Routes, Route } from "react-router-dom";
import Home from "../Components/pages/home";
import Projects from "../Components/pages/projects";
import Quote from "../Components/pages/quote";
const Router = ()=>{
    return(
        <Routes>
            <Route exact path="/" element={<Home />} ></Route>
            <Route exact path="/projects" element={<Projects />}/>
            <Route exact path="/quote" element={<Quote />}/>
        </Routes>
    )
}
export default Router;