
import React, { Fragment } from "react";
import ChildComponet from "./ChildComponet";

class LifeCycle extends React.Component{

    constructor(props){
        super(props);
        this.state={step:1 , name:"moussa"};
        console.log(` etape   ${this.state.step}   :je suis le constructeur`);

    }

    componentDidMount(){
        console.log(` componentDidMount mere `)
        this.setState({step : 2 , name:this.props.name})
    }
    render(){
        console.log(`je suis le render  ${this.state.step}`)
        return(
            <Fragment>
             <h1 className="text-warning  text-center">chargement  {this.state.step}</h1>
             <p className="text-center">{this.state.name}</p>

                 <hr className="text-primary"/>

                 

            </Fragment>

        
    )
    }
}
export default LifeCycle;