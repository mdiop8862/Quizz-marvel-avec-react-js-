import React, { Fragment, useState } from "react";
import Noreply from "./Noreply";
const Modal=(props)=>{

  const {HideModal}=props

  const isdisplay=(props.displayContent ) ?

 
  
  (<Fragment> <div className="modalTitle">

  <h2>{props.responseApi[0].name}</h2>

</div>

<div className="modalBody">
<p>{props.responseApi[0].description}</p>
</div>

<div className="modalFooter ">
  <button className="btn btn-danger" onClick={HideModal}>Fermer</button>
</div>

</Fragment>)

     : 

     (<Noreply></Noreply>)

    return(
        <Fragment>

            
            <div className="ModalBackground">
                <div className="container col-8 modalContainer">


                    {isdisplay}

                </div>

            </div>
            
            
                

        </Fragment>
    )
}
export default Modal ; 