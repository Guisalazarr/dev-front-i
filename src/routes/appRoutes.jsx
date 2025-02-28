import React from "react";
import { Route, BrowserRouter, Routes} from "react-router-dom";
import Home from "../pages/Home"
import About from "../pages/About";
import Register from "../pages/Register";
import ListBooks from "../pages/ListBooks";
import DefaultLayout from "../config/defaultLayout";


const AppRoutes = () => {
   return(
       <BrowserRouter>
        <Routes>
            <Route path="/" element = {<DefaultLayout component={<Home />}/>} />
            <Route path="/about" element = {<DefaultLayout component={<About />}/>}/>
            <Route path="/register" element = {<DefaultLayout component={<Register />}/>}/>
            <Route path="/listBooks" element = {<DefaultLayout component={<ListBooks />}/>}/>
        </Routes>
       </BrowserRouter>
   )
}

export default AppRoutes;