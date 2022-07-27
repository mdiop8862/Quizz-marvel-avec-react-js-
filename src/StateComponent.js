import React, { Fragment, useState } from "react";

import AddTodoList from "./AddTodoList";

const StateComponent=()=>{
  
    const [liste , setListe]=useState([
        {id : 1 , todo: "acheter du lait"},
        {id : 2 ,  todo : "va au marcher"},
        {id : 3 , todo : "cuisiner pour les enfants"}
    ])

    const ModifyListe=(ourliste)=>{
        setListe(
            ...liste,
            {id : 4, todo: ourliste }
        )
    }

   
   const newListe=liste.map((myliste)=>{
       return (
           <li key={myliste.id} className="list-group-item">  todo={myliste.todo} </li>
       )

   })

    return(
     
        <Fragment>
            <div className="container">


            <ul>

                      {newListe}
            </ul>

            </div>


            <AddTodoList maFonction={ModifyListe} ></AddTodoList>
            
              

             
        </Fragment>


    )
}
export default StateComponent;