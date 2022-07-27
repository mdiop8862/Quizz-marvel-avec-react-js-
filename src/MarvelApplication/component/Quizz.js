import React, { Fragment, useEffect, useState } from "react";
import Level from "./Firebase/Level";
import ProgressBar from "./Firebase/ProgressBar";
import { QuizMarvel } from ".";
import  QuestionQuiz from   "./Firebase/QuestonQuiz"
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import QuizzOver from "./Firebase/QuizzOver";


const Quizz=()=>{
      
   const [QuizzCurrent , setQuizz]=useState(null)

   const [indexQuizz , setIndexQuizz]=useState(0)

   const [isvalid , setValid]=useState(null)

   const [answeR , setAnswer]=useState(null)

   const [LevelPoint , setLevelPoint]=useState(0)

   const [LevelName , setLevel ]=useState(["debutant" , "confirme" , "expert" ])

   const [LevelNameIndex , setlevelNameIndex]=useState(0)

   const [DisplayQuizzOver , setQuizzOver ]=useState(false)


   const [displaySuccesMessage , setDisplayMessage]=useState(false)

   const [isWin , setIswin]=useState(false)

   
   const load=()=>{
    const fetchData=QuizMarvel[0].quizz[LevelName[LevelNameIndex]][indexQuizz]
   // console.log(QuizMarvel[0].quizz.LevelName[0])
   
    setQuizz(fetchData)
   }

 
  useEffect(()=>{
      load() 
  })



  const fetchAnswer=(answer)=>{
       
    setAnswer(answer)    
  }

 /* const HnadleNextTwo=()=>{
    setQuizzOver(false)
  } */

  const HandleNextQuizz=()=>{

    setQuizzOver(false)
    setLevelPoint(0)
    setDisplayMessage(false)
   
  }

  const HnadleNext=(e)=>{

        e.preventDefault();

        if(QuizzCurrent.id===9){

            setQuizzOver(true)
            setIndexQuizz(0)

           // (LevelPoint >=5) &&  (setlevelNameIndex(LevelNameIndex + 1 ))  

              if(LevelPoint>=5){

                setlevelNameIndex(LevelNameIndex + 1 )
                setDisplayMessage(true)
                setIswin(true)
              }

              
          //  setIndexQuizz(0)

        //  setIndexQuizz(0)

         }

         else{

         


       if(answeR===QuizzCurrent.answer){
            setValid("correct") ;
            setLevelPoint(LevelPoint + 1 ) ;
            toast.success('Bravo +1', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
       //   console.log("test 1 ")

        }

        else{
            setValid("incorrect")
            toast.error('Rate 0', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
          //  console.log("test ")
          }
        (answeR===QuizzCurrent.answer) ? (setValid("correct")  )  : (setValid("incorrect"))
            setTimeout( ()=>{
            setValid(null)
            setAnswer(null)
            
            setIndexQuizz(indexQuizz + 1)
            
           
                         },1000)


                        }

                       

                    
       
       // console.log(QuizzCurrent.answer) */
    
  }

  const notify=()=>{

    toast.success('Bienvenue et Bonne Chance', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        });
        
  } 

  useEffect(()=>{
    notify()
  },[])

  
  const displayQuizzover=(DisplayQuizzOver) ? ( <QuizzOver note={LevelPoint} LevelName={LevelName} LevelNameIndex={LevelNameIndex}  HnadleNext={ HnadleNext} HandleNextQuizz={HandleNextQuizz} displaySuccesMessage={displaySuccesMessage} isWin={isWin} />)  

         :
   (<Fragment>

<ToastContainer></ToastContainer>              
<Level LevelName={LevelName} LevelNameIndex={LevelNameIndex} />

<ProgressBar indexQuizz={indexQuizz}/>
  {
 QuizzCurrent !==null && ( <QuestionQuiz mydata={QuizzCurrent} myfunction={HnadleNext} myfetch={fetchAnswer} isvalid={isvalid} answeR={answeR}   />)
  }


   </Fragment>)

 
  
 // <button onClick={notify}>{LevelPoint}</button>

         
     return(
         <Fragment>

                {displayQuizzover}
         </Fragment>
     )
}
export default Quizz ;