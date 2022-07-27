import React, { Fragment, useState } from "react";


const AddTodoList =(props)=>{

const myfonction=()=>{
    console.log(`je suis la fonction`)
}

    
    const [valeur , setValeur]=useState("")
    

    const Modify=(e)=>{
        setValeur(e.target.value)
    }
        
    return(
        <Fragment>

             

            <div className="container">

                <form>
                    <div>
                        <div>
                            <label className="label-control" for="ajouter">Ajouter</label>

                        </div>

                        <div>
                            <input type="text" className="form-control" id="ajouter" value={valeur} onChange={Modify} />

                        </div>
                    </div>

                    <div>
                        <button type={"submit"} className="btn btn-primary" onSubmit={()=>myfonction}>send</button>
                    </div>
                </form>

            </div>

        </Fragment>
    )
}
export default AddTodoList;