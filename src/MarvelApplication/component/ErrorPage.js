import React, { Fragment } from "react";
import batman from "../images/batman.png"
const Errorpage=()=>{
    return(
         <Fragment>
              <div className="ErrorPage text-center d-flex flex-column justify-content-center">
                  <h3 className="itemError">Oups , cette page n'existe pas !!! </h3>
                  <div className="myimg itemError">
                    <img src={batman} alt="errorPage" />   
                  </div>
              </div>
         </Fragment>

    )
}
export default Errorpage 