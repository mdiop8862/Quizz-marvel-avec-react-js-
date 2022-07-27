import React, { Fragment, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import spiderman from "../images/spiderman.png";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./Firebase/Firebase";

const ForgetPassword=()=>{
     const [error , setError]=useState(null)

     const [succes , setSucces]=useState(null)
     
     const Navigate=useNavigate(null)
     const [mail , setmail]=useState("")
     const handleChangeMail=(e)=>{
           setmail(e.target.value)
      }

         const handleSubmit=(e)=>{
              e.preventDefault()
            sendPasswordResetEmail(auth, mail)
            .then(() => {
                    setSucces( `Consulter votre mail ${mail} pour changer de mot de passe ` )
                     setError(null)
                     setmail("")
                     setTimeout(() => {
                         Navigate("/Connexion" , {replace : true } )
                     }, 5000);
                        })
            .catch((error) => {
               setError(error.code)
               setSucces(null)
               const errorCode = error.code;
               const errorMessage = error.message;
               setmail("")
            //  console.log(error)
    // ..
  })

    

         }

         const displayerror=(error===null)      ?    (null) : ( <span className="text-danger fs-3 text-center d-block myerror " id="myerror2">{error}</span> )
         const displaysucces=(succes===null)   ? (null)    : ( <span className=" fs-5 text-center text-light bg-success d-block  mysucces " >{succes}</span> )

         useEffect(()=>{
            
         })

 

      const displaybtn=(mail==="") ? ( <button className="btn btn-red " disabled>Recuperer</button>)   : ( <button className="btn btn-red ">Recuperer</button>)
    return(
        <Fragment>
               <div className="Connexion">
                <div className="row">
                        <div className="ConnexionRight text-center col-6">
                               <img src={spiderman}  />
                               </div>

                              <div className="Form col-6 " id="form2">
                                   
                                    {displaysucces}
                                    {displayerror}
                                    
                              <h1 className="title text-light fw-bold">Mot de passe oublie ? </h1>
                              <form onSubmit={handleSubmit}  >
                                <div className="container">
<div className="form-group ">

                           <input  required  id="email" name="email" autoComplete="off" value={mail} type={"email"} onChange={handleChangeMail} />
         
                           <label className="form-label text-light fw-bold" for="email"  >Email</label>
   
</div>

        <div className="btn2 text-center mybtn ">
             {displaybtn}
        </div>

        <div className="hrBrize">
                                 <p className="text-blanc">Nouveaux sur Marvel Quiz ? <span onClick={()=>Navigate("/Inscription")}> Inscrivez vous maintenant </span> </p>

                        

                             </div>




                           

                             

                           </div> 
                            </form>

                        </div>
                </div>
            </div>
        </Fragment>
    )
}
export default ForgetPassword ;