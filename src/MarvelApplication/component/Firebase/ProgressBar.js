import React, { Fragment } from "react";

const ProgressBar=(props)=>{
    return(
        <Fragment>
            <div className="container">

                <div className="BarContainer">

<div className="row  justify-content-between">

                    <div className="col-4 text-center itemBar item-left">
                         <p className="colordark mt-2">Question : {props. indexQuizz + 1}/10</p>
                    </div >

                    <div className="col-4 text-center itemBar item-right">
                          <p className="colordark mt-2">Progression : {`${(props.indexQuizz+1)*10}%`} </p>
                    </div>

</div>

      <div className="ProgessBar">
          
        <div className="itemProgressBar" style={{width: `${(props.indexQuizz + 1)*10}%`}} > 

        </div>

      </div>

                </div>

            </div>

        </Fragment>
    )
}
export default ProgressBar ;