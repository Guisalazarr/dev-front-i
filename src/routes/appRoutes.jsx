import React from "react";
import { Route, BrowserRouter, Routes} from "react-router-dom";
import Home from "../pages/Home"
import About from "../pages/About";
import Register from "../pages/Register";
import ListBooks from "../pages/ListBooks";


const AppRoutes = () => {
   return(
       <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/about" element = {<About />} />
            <Route path="/register" element = {<Register />} />
            <Route path="/listBooks" element = {<ListBooks />} />
        </Routes>
       </BrowserRouter>
   )
}

export default AppRoutes;