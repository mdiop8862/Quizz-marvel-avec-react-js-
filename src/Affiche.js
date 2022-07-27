import React from "react";
import Close from "./Close";

class Affiche extends React.Component{
   
  constructor(){
      super()
      this.state={isAffiche:false}
  }


  handleAffiche=()=>{
     
    this.setState({isAffiche:true})
  }

  handleFerme=()=>{
      this.setState({isAffiche:false})
  }
      


    render(){
            const valeur=this.state.isAffiche? ( <Close myfun={this.handleFerme}></Close> )  : (null) 
        return(
            <div>

                <button  onClick={this.handleAffiche}> Afficher</button>

                 {valeur}
                   


            </div>
        )
    }
}
export default Affiche;