import React, { Fragment } from "react";

const Administrateur=(props)=>{
  
    setTimeout(() => {
        props.history.push("/")
        
    }, 2000);
    
    return(
        <Fragment>
        <p>vous serz rediriger dans 5s</p> 
        </Fragment>
    )
}
export default Administrateur;