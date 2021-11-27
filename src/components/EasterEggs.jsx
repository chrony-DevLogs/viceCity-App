import React,{useState,useRef} from "react";
import { useSelector,useDispatch } from "react-redux";
import {setEggs} from "../redux/easterEggs_reducer"

const EasterEggs = ()=>{
    const eggs = useSelector((state) => state.easter.eggs)
    const easterList = ()=>{
        return eggs.map(egg =>{
            return <Post title={eggs.title} poster={eggs.poster} description={eggs.description}/>
        })
    }
    return(
        <div className="component">
            <AddEaster/>
            <div className="feald ">
                {eggs.map(x => <Post title={x.title} poster={x.poster} description={x.description}/>)}
            </div>
        </div>
    )
}

const AddEaster = ()=>{
    const [style,setStyle] = useState([null,null,{visibility: "hidden"}]);
    const dispatch = useDispatch();
    const titleRef = useRef("");
    const posterRef = useRef("");
    const descriptionRef = useRef("");

    const title = titleRef.current.value
    const poster = posterRef.current.value
    const description = descriptionRef.current.value

    const sendDispatch = ()=>{
        if(titleRef.current.value.length === 0) return
        if(posterRef.current.value.length === 0) return
        if(descriptionRef.current.value.length === 0) return

        dispatch(setEggs({title: titleRef.current.value,poster: posterRef.current.value, description: descriptionRef.current.value}))

    }
    return(
        <div className=" addeasterContainer">
            <button className="close" style={style[2]} onClick={()=>{setStyle([null,null,{visibility: "hidden"}])}}></button>
            <div className="addEaser" style={style[0]} onClick={()=>{setStyle([{width: "300px",height: "500px",borderRadius: "0px",background: "rgba(239, 197, 255, 0.76)"},{visibility: "visible",opacity: "100%"},null])}}>
                <div className="addEasterComponents" style={style[1]}>
                    <div>
                    <input ref={titleRef} placeholder="Title" type="text" />
                    <input ref={posterRef} placeholder="Photo" type="text" />
                    <textarea ref={descriptionRef} placeholder="description" name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <button onClick={()=>{setTimeout(sendDispatch,500)}}>Submit</button>
                </div>
            </div>   
        </div>

        
    )
}

const Post = ({title,poster,description})=>{
    return(
        <div className="EeasterElements">
            <h1 className="EasterItem">{title}</h1>
            <img src={poster} alt="EasterEgg img"  width={"400px"} />
            <p className="EeasterElement">{description}</p>
        </div>
    )
}

export default EasterEggs;