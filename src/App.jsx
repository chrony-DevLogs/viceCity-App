import React from "react";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import EasterEggs from "./components/EasterEggs";
import Cheats from "./components/Cheats";
import img from "./imgs/viceCity.png"

import "./App.css"
const App = () =>{
    return(
        <div className="root">
            <Nav/>
            <div className="componentBody">
                <Route exact path={"/"} component={Home}/>
                <Route path={"/easter_eggs"} component={EasterEggs}/>
                <Route path={"/cheats"} component={Cheats}/>
                <img className="logo" src={img} alt="" height="150px"/>
            </div>

        </div>
    )
}
export default App;