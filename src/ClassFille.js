import React, { Fragment } from "react";

class ClassFille extends React.Component{

   render(){
       return(

       <Fragment>


       <h1>Ramadan Mubarack</h1>
       <p>premier jour :{this.props.datedebut}</p>
       <p>last day : {this.props.dateFin}</p>


       </Fragment>




       )
   }







}
export default ClassFille;