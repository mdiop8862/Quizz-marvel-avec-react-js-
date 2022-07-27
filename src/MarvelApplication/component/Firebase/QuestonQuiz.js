import React, { Fragment, useEffect, useState } from "react";
import {FiChevronRight} from "react-icons/fi"

const QuestionQuiz=(props)=>{
    
    
 // console.log(props.mydata)

    const [contentbtn , setContent]=useState("suivant")
    useEffect(()=>{
       //
         setBtn(false)
    },[props.isvalid])

    const {id , question , options }=props.mydata

     useEffect(()=>{
        (id===9) && (setContent("Terminer")) 
     })
    const {myfunction}=props
    
    
    const [btn , setBtn]=useState(false) ;
    const [answer , setAnswer]=useState(null);


  const displaybtn =   (btn===false) ?
    
    ( <button className="btn btn-red fs-5 "  style={{width : '150px' , height: '40px'}} disabled  >{contentbtn} </button>) 
      
    
    :
      
    ( <button className="btn btn-red fs-5 "  style={{width : '150px' , height: '40px'}} onClick={myfunction}   >{contentbtn} </button>)
    
   
    const onchoose=(elt)=>{
     
        setAnswer(elt)
        setBtn(true)
         
    }
    
    useEffect(()=>{
       props. myfetch(answer)
     
    })

    
     
    return(
        <Fragment>

            

                

                    <div className="Question container">
                   <h4 className="titleQuestion colordark fw-bold">  {question} </h4>

                        <div className="Lesquestion">

                            {
                                options.map((elt)=>{
                                   return( <h5 className={`itemQuestion colordark fw-bold
                                    ${ (answer===elt ? ("change") : (null))} `
                                 }    key={elt} onClick={ ()=>onchoose(elt) } ><FiChevronRight/>  {elt}</h5>)
                                })
                            }
                      

                           
                           

                        </div>

                           <div className="btnSuivant text-center mt-5">
                               

                                { displaybtn }

                           </div>
                    </div>


                

                      
                    
                      
                   

        </Fragment>
    )
}
export default QuestionQuiz 