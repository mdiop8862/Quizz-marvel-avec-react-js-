import React, { Fragment, useEffect, useState } from "react";
import Deconnexion from "./Deconnexion";
import Quizz from "./Quizz";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/Firebase";
import { useNavigate } from "react-router-dom";

const UserPage=()=>{

       const navigate=useNavigate(null)

        const [SessionUser , setSession]=useState(null)

        const displaySession=(SessionUser ===null ) ?    
        
        
        (<div className=" loading   ">
          
          <div className="LoadingContainer ">
              

          </div>

        </div>) 
        
        
        
        :   
        
        
        
        (  <div className="UserPage">

         <Deconnexion></Deconnexion>

         <Quizz></Quizz>

         </div>  )

         useEffect(()=>{
            onAuthStateChanged(auth, (user) => {
                if (user) {
                   
                  const uid = user.uid;
                   setSession(user)
                  // ...
                } else {
                 navigate("/")
                }
              });
         })

    return(
        <Fragment>
               
               {displaySession}

        </Fragment>
    )

}
export default UserPage ;