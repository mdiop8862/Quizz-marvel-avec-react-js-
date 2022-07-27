import React, { Fragment, useEffect, useRef, useState } from "react";
import {  createUserWithEmailAndPassword , sendEmailVerification} from "firebase/auth";
import { auth } from "./Firebase/Firebase";
import { useNavigate } from "react-router-dom";


const Inscription=()=>{

     const navigate=useNavigate()
     
    const [myvalues , setvalue]=useState({pseudo:"" , email : "" , password : "" , Cpassword:""})
     
    const [myError , setError]=useState("")

   
    const isError= (myError ==="") ?  (null) : (<span className="text-danger fs-3 text-center d-block myerror">{myError.code}</span>) ;
   const handleChange=(e)=>{

      setvalue({...myvalues , [e.target.id] : e.target.value})
      
       
   }

    const {pseudo , email , password , Cpassword : confirme_password}=myvalues

    sendEmailVerification(auth.currentUser)
    .then(() => {
      // Email verification sent!
      // ...
    });
    
    
      const handleSubmit=(e)=>{
         e.preventDefault()     
         createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
         // Signed in 
        const user = userCredential.user;
        setvalue({pseudo:"" , email : "" , password : "" , Cpassword:""})
         navigate("/Connexion")
        
       // ...
  })
  .catch((error) => {
     setError(error)
      setvalue({pseudo:"" , email : "" , password : "" , Cpassword:""})
    // ..
    
  });

  
        
      }

        const btn = (pseudo ===" " || email === " "|| password ===" " , password!==confirme_password )  ? ( <button className="btn btn-secondary " disabled >Inscription</button>) : ( <button className="btn btn-secondary " >Inscription</button>)
        

                                  
    return(
    <Fragment>

                 
      <div className="Inscription d-flex row justify-content-end">
            
          <div className="leftSign col-6">
                
          </div>
          <div className="Form col-6">
            
               {isError}   
          <h1 className="title text-light fw-bold">Inscription </h1>
           
            <form  onSubmit={handleSubmit}>
              <div className="container">
              
              <div className="form-group ">
               
                  
                      <input   type="text" autoComplete="off" required  name="pseudo" id="pseudo" value={myvalues.pseudo} onChange={handleChange} />
                
                      <label className="form-label text-light fw-bold" for="pseudo" >Pseudo</label>
                
                
              </div>


             
              <div className="form-group">
               
                  
                       <input  type="email" name="email" id="email" required  value={myvalues.email} onChange={handleChange} autoComplete="off" />
                
                       <label className="form-label text-light fw-bold" for="email">Email</label>
              
              </div>

              <div className="form-group">
               
                      <input  type="password"  name="password" id="password" required value={myvalues.password} onChange={handleChange} autoComplete="off" />
                  
                      <label className="form-label text-light fw-bold" for="password"  >Mot de passe</label>
              </div>

              <div className="form-group">
               
                      <input  type={"password"}  name="Cpassword" id="Cpassword" required value={myvalues.Cpassword} onChange={handleChange} autoComplete="off" />
                
                     <label className="form-label text-light fw-bold" for="Cpassword"  >Confirmer mot de passe</label>
              
              </div>

  
              </div>

        
               <div className="text-center mybtn">

                   {btn}

               </div>
            </form>

          </div>

      </div>


      
      
    </Fragment>
    )
    }
    export default Inscription;