import React, { Fragment, useEffect, useRef } from "react";

import { Link, Navigate, useNavigate } from "react-router-dom";
const WelcomePage=()=>{

    const mycomponent=useRef(null)
    const mybtn1=useRef(null)
    const mybtn2=useRef(null)
    
    const navigation = useNavigate(null)

   useEffect(()=>{
    mybtn1.current.hidden=true
    mybtn2.current.hidden=true
   },[])


    useEffect(()=>{
        
       setTimeout(() => {
        mycomponent.current.classList.add('Ails') 
        

       }, 1000);

       setInterval(() => {
           mycomponent.current.classList.remove('Ails')
           mybtn1.current.hidden=false
           mybtn2.current.hidden=false
       }, 3000 );

       

    } , [ ])
         
        const addgriftleft=()=>{

              
              mycomponent.current.classList.add('leftGrif')
           

        }

        const addgriftright=()=>{
           mycomponent.current.classList.add('rightGrif')
        }

        const clearLeft=()=>{
            mycomponent.current.classList.remove('leftGrif')
        }
        const clearRight=()=>{
            mycomponent.current.classList.remove('rightGrif')
        }

       
    return(
        <Fragment>
            

        
       <div ref={mycomponent} className="Acc ">
        <div className="container-fluid">
         <div className="row justify-content-around">

          <div className="col-1 item item1">
           <button onClick={()=>navigation("/Inscription")} ref={mybtn1} className=" btn btn-lg   text-light" onMouseOver={addgriftleft} onMouseOut={clearLeft}  >Inscription</button>
         </div>

            <div className="col-1 item item2">
            <button onClick={()=>navigation("/connexion")}  ref={mybtn2} className="btn btn-lg   text-light" onMouseOver={addgriftright} onMouseOut={clearRight}>Connexion</button>
            </div>

   </div>
   </div>
           
            </div>

            

        

        </Fragment>
    )
}
export default WelcomePage;