import React, { Fragment } from "react";  


class Formulaire extends React.Component{
       constructor(props){
           super(props  )

           this.state={valeurs:null}
       }

       changevalue=(e)=>{
           this.setState({valeurs:e.target.value})
           const va=document.getElementById("one");
           va.classList.add("colore")
                
       }
    render(){
        return(
            <Fragment>

               <div>
                   <div>
                      <label ref={"mylabel"} className="form-label" for="valeurs" id="one">valeur : {this.state.valeurs}</label> 

                   </div>

                   <div>
                       <input  className="form-control " id="valeurs" name="valeurs" value={this.state.valeurs} onChange={this.changevalue} />
                   </div>
               </div>
            </Fragment>
        )
    }
}

export default Formulaire;