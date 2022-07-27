import React, { Fragment, useEffect, useRef, useState } from "react";
import { auth } from "./Firebase/Firebase";
import {  signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Connexion from "./Connexion";
const Deconnexion=()=>{
      const [check , setCheck]=useState(false)
      const myref=useRef(null)
      const navigation=useNavigate(null)
      const HandleLogout=(prevState)=>{
     (check === true ) ? (setCheck(false)) : (setCheck(true))
             
           
        
      }
    //  console.log(myref.current)
      useEffect(()=>{
                  if(check === true){
                    signOut(auth)
                    
                    .then(() => {
                          navigation("/Connexion" , {replace : true}) 
                      })
                      
                      .catch((error) => {
                        // An error happened.
                      });
                  }
            

      },[check])
      
    return(
          
        <Fragment>
           
                 <div className="myform Deconnexion container">

                    <form>
                         <h1>{check}</h1>
                          <label className="switch">
                                   <input ref={myref} type={"checkbox"} className="myinput" checked={check} onChange={HandleLogout} />

                                  
                                   <span className="slider round"></span>
                          </label>

                          
                    </form>

                 </div>

           
        </Fragment>
    )
}
export default Deconnexion