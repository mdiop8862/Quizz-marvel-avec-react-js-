import userEvent from "@testing-library/user-event";
import React, { Fragment } from "react";
import { USERContext } from "./Contexte";
import { ColorContext } from "./Contexte";

const ContentData=()=>{
    return(
       < USERContext.Consumer>
           {
               (User )=> {
                 return(
                 <ColorContext.Consumer>
                    {
                        myStyle=>{
                            return(
                                <div>
                                <ul style={{color : myStyle.listStyle}}>
                                    <li style={{color : myStyle.color}}>Nom : {User.nom}</li>
                                    <li style={{color : myStyle.color}}>Prenom : {User.prenom}</li>
                                    <li style={{color : myStyle.color}}>Age : {User.age}</li>
                                </ul>
                            </div>
                            )
                        }
                    }
                 
                 </ColorContext.Consumer>
                 )
               }
           }
          
       
       </USERContext.Consumer>

    

   

    )
}
export default  ContentData 