import React, { Fragment } from "react";
import { useRef } from "react";

const TheRef=()=>{

    const myinput=useRef(null)
    const myh1=useRef(null)
    

    const handleClick=()=>{
        
    
    myinput.current.focus();
        
    }

    const changecolor=()=>{
       
         myh1.current.style.color="red";
         console.log("salut")
    }
    
    return(
        <Fragment>

            <div className="mt-3" >
                <button onClick={handleClick} >Search</button>
                <input ref={myinput} type={"text"} id="name" className="" placeholder="name" />

                <input ref={myinput}   type={"text"} id="name" className="" placeholder="fname"/>
                <input   type={"text"} id="name" className="" placeholder="age" />
            </div>


              <h1 onMouseUp={changecolor} ref={myh1}>  Salut tout le monde  </h1>
         
            
        </Fragment>
    )


}
export default TheRef;