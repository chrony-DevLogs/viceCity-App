import React from "react";
import { Link } from "react-router-dom";
import audio from "../audio/menue.mp3"
import audio2 from "../audio/audio2.mp3"

export default ()=>{
    const soundEffect = (src)=>{
        const mySound = new Audio();
        mySound.src = src
        mySound.play()
    }
    return(
        <nav>
            <ul className="navP">
                <li className="navC navC1"><Link onMouseOver={()=>{soundEffect(audio)}} onClick={()=>{soundEffect(audio2)}} className="link link1" to={"/"}>Home</Link></li>
                <li className="navC navC2"><Link onMouseOver={()=>{soundEffect(audio)}} onClick={()=>{soundEffect(audio2)}} className="link link2" to={"/easter_eggs"}>Easter eggs</Link></li>
                <li className="navC navC3"><Link onMouseOver={()=>{soundEffect(audio)}} onClick={()=>{soundEffect(audio2)}} className="link link3" to={"/cheats"}>Cheats</Link></li>
            </ul>
        </nav>
    )
}