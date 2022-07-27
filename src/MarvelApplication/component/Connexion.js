import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import spiderman from "../images/spiderman.png"
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase/Firebase";
import Deconnexion from "./Deconnexion"
const Connexion=()=>{


    
    const Navigate=useNavigate(null)
    const [inputContent , setContent]=useState({password :"" , email:""})
    const {password , email }=inputContent


    const handleChange=(e)=>{
        setContent({...inputContent,  [e.target.id]:e.target.value})
    }
    
     const displaybtn=(password==="" || email==="") ? ( <button className="btn btn-red " disabled>Connexion</button>) :( <button className="btn btn-red ">Connexion</button>)
     const [erreur , setErreur]=useState("")
      const handleSubmit=(e)=>{
         
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
             Navigate("/UserPage" , {replace : true})
             setContent({password :"" , email:""})
            // ...
          })

          .catch((error) => {
            
              
            setErreur(error)
             setContent({password :"" , email:""})
          })
          
      }
      
    
    const displayMessage= (erreur !== "") ? (<span  className="text-danger fs-3 text-center d-block myerror " id="myerror2" >{erreur.code}</span>) : (null) 
    return(

        <Fragment>

       
           
            <div className="Connexion ">
           
            
                <div className="row">
                        <div className="ConnexionRight text-center col-6">
                               <img src={spiderman}  />
                               </div>

                              <div className="Form col-6 " id="form2">
                                   {displayMessage}   
                              <h1 className="title text-light fw-bold">Connexion </h1>
                              <form  onSubmit={handleSubmit} >
                                <div className="container">
<div className="form-group ">

                           <input  required  id="email" name="email" autoComplete="off" type={"email"} value={email} onChange={handleChange} />
         
                           <label className="form-label text-light fw-bold" for="email"  >Email</label>
   
</div>


<div className="form-group ">

               <input    required  id="password" name="password" autoComplete="off" type={"password"} value={password} onChange={handleChange} />
         
               <label     className="form-label text-light fw-bold" for="password" >Mot de passe</label>
   
</div>
                           <div className="btn2 text-center mybtn ">
                                 {displaybtn}
                           </div>

                             <div className="hrBrize">
                                 <p className="text-blanc">Nouveaux sur Marvel Quiz ? <span onClick={()=>Navigate("/Inscription")}> Inscrivez vous maintenant </span> </p>

                                 <p className="text-blanc">Mot de passe oublie ?   <span onClick={()=>Navigate("/ForgetPassword")}>recuperez le ici</span>  </p>

                             </div>

                           </div> 
                            </form>

                        </div>
                </div>
            </div>
           


        </Fragment>
    )
}
export default Connexion ;