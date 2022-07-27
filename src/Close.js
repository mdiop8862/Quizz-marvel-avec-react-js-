import React, { Fragment } from "react";


class Close extends React.Component{
      render(){
            
          return (
              <Fragment>
                    <div className="myclose text-center" onClick={this.props.myfun}>
                        <p className="text-light">
                            salut je suis la et je pense a toi 
                            je t'aime et je pense j'ai envie de toi 
                        </p>

                        <button className="btn btn-light mb-3" onClick={this.props.myfun}> Fermer</button>

                    </div>
              </Fragment>

              
          )
      }
}
export default Close;