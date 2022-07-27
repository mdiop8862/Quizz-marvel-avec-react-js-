import React, { Fragment } from "react";
import Stepper from "react-stepper-horizontal/lib/Stepper";
const Level=(props)=>{
 
   const {LevelNameIndex} =props

    return(
        <Fragment>
            <div className="container " >
                <div className="containerLevel  " style={{background:"transparent"}}>
                <Stepper steps={ [{title: 'DEBUTANT'}, {title: "CONFIRME"}, {title: 'EXPERT'}] } activeStep={LevelNameIndex} activeColor={"#EB1D27"} completeColor={"#E0E0E0"} completeTitleColor={"#757575"} activeTitleColor={"#EB1D27"} size={40} barStyle={"dashed"}  />
                 </div>

            </div>

        </Fragment>
    )
}
export default Level 