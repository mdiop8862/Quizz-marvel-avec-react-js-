import React, { Fragment, useEffect, useState } from "react";

const LesEffect=()=>{

    const [count , setCount]=useState(0)

    const modify=()=>{
        setCount(count+1)
    }

    useEffect(()=>{
        document.title=`le compteur est a ${count}`

    } , )

    
    return(

        <Fragment>
          <button onClick={modify} className="btn btn-primary">Inctemente le button </button>

          <h1>le compteur est a : {count} </h1>
          
        </Fragment>
    )
}
export default LesEffect ;