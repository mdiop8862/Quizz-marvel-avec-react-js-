import React, { Fragment } from "react";


class ChildComponet extends React.Component{
    constructor(props){
        super(props);
        
        console.log(`je suis le constructeur du composnat enfant `)

    }
    componentDidMount(){
        console.log(` je uis le componentDidMount dde l'enfant `)
    } 
    render(){

        console.log(` je suis le render du composant enfant `)
        
        return(
            <Fragment>
                 <h1 className="text-warning text-center">salut je suis l'enfant </h1>
            </Fragment>
        )
    }
}
export default ChildComponet;