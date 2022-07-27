import React, { Fragment, useEffect, useState } from "react";
import { QuizMarvel } from "..";
import {BsTrophy} from "react-icons/bs" ;
import Noreply from "./Noreply";
import axios from "axios";
import Modal from "./Modal";
const QuizzOver=(props)=>{

//    console.log(props.isdisplay)

    const {LevelName ,  LevelNameIndex ,  HnadleNext , HandleNextQuizz , displaySuccesMessage , note , isWin }=props
    const [DataQuizz , setData]=useState(null)
    const [displayModal , setDisplay]=useState(false)
    const [responseApi , setResponse]=useState(null)
    const [displayContent , setDisplayContent]=useState(false)

      // On verifie la fiablitee des donnees avant de rendre la page 

      useEffect(()=>{
         //const fiftydaysAgo = localStorage.getItem("TheDate") + (15 * 86400)
         if(Date.now()-localStorage.getItem("TheDate") === 15*86400){
                    localStorage.clear()
         }

      },[])
    const HideModal=()=>{
           
          setDisplay(false)
          setResponse(null)
          setDisplayContent(false)
    }
    const showModal=(characters)=>{

           if( localStorage.getItem(`${characters}`) ){
            
            setResponse( JSON.parse(localStorage.getItem(`${characters}`) )) 
            
            setDisplayContent(true)

           }
            
    else{

            axios.get(`http://gateway.marvel.com/v1/public/characters/${characters}?ts=1&apikey=7226e413fb9e96445f9ff6b5ccc2884f&hash=7308e277229ee9fceed30058117ffcb9`)
            .then((reponse)=>{
              
             console.log(reponse.data.data.results)
             setResponse(reponse.data.data.results)
             setDisplayContent(true)
             localStorage.setItem( JSON.stringify(characters) , JSON.stringify(reponse.data.data.results) )
 
             if(  !localStorage.getItem(JSON.parse(' "TheDate" ')))  {

               localStorage.setItem( JSON.stringify("TheDate"), JSON.stringify(  Date.now() ) )

                                                       }
             
                              })


              .catch((error)=>{
              console.log(error)
 
                             })

           }
           

                           

                            console.log("fonction appelle")

                           setDisplay(true)
      
    }

    const isdisplay =(displayModal === true) && (<Modal responseApi={responseApi} displayContent={displayContent} HideModal={HideModal} />)

    

       

     const DisplayDecision = ( isWin===true ) ? 
     ( <Fragment>

        <p className="text-dar fw-bold container pt-3"> LES REPONSES AUX QUESTIONS  </p>


        <div className="answerContainer container">

        <table className="answers">

         <thead>
         <tr>
              <th >Question</th>
              <th>Reponses</th>
              <th>Infos</th>
         </tr>
        </thead>

         <tbody>

       {
       (DataQuizz !== null) &&
       (  DataQuizz.map((elt)=>{
       return(
     <Fragment>
      <tr>
     <td className="text-dark fw-bold ">{elt.question} </td>
     <td className="text-dark fw-bold ">{elt.answer} </td>
     <td className="text-light fw-bold "><button className="btnInfo" onClick={()=>showModal(elt.heroId)}>Info</button> </td>
      </tr>
     </Fragment>




            )
            }))
             }
             

             


</tbody>
</table>
</div>

       </Fragment>
                   )   
     
     
     
     
       : 
     
     
     
     
     (<Noreply/>)
    

         

   // const DisplayDecision= (isWin === true) ? (console.log("reusiite"))  : (console.log("echec"))
    


       

        

        
            

     const load=()=>{
         const fetchData=QuizMarvel[0].quizz.debutant
         setData(fetchData)
         console.log(DataQuizz)
     }

       useEffect(()=>{
            load()
       })

   
    const succesMessageIsTrue= (displaySuccesMessage) ?    ( <p className="successMsg"  style={{color:"#1ecc78" }}><BsTrophy color="green" size="3em"  /> BRAVO ,  VOUS ETES UN {LevelName[LevelNameIndex]} </p>) : ( <p className="successMsg" style={{color:"#EB1D27"}}>oups !! , VOUS AVEZ ECHOUE  </p>)
    
    const NextOrPrevQuizz =   (displaySuccesMessage)     ?    (<button onClick={ HandleNextQuizz } className={`btnResult success`}  >Niveau Suivant</button>)  : (<button onClick={ HandleNextQuizz } className="btnResult failed" >RECOMMENCER LE NIVEAU {LevelName[LevelNameIndex]} </button>)
    return(
        
        
        <Fragment>
            {
               //(note < 5) ? (setIswin(false)) : ( setIswin(true))
            }
          {/*<h2>QuiZZ over</h2> */}  
          <div className="stepsBtnContainer container ">

             {succesMessageIsTrue}

       {/*<button onClick={ HandleNextQuizz } className="btnResult success">Niveau Suivant</button>*/}   

               {NextOrPrevQuizz}
              
          </div>

          <div className="percentage container">
            <div className="progressPercent col-3">Réussite: {(props.note * 100 ) / 10 }%</div>
            <div className="progressPercent col-3">Note: {props.note}/10</div>
        </div>

                       <hr/>

                      
                     
                          {DisplayDecision}

                          {isdisplay}
                          
                     
                  

        </Fragment>
    )
}

export default QuizzOver;