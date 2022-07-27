import React, { Fragment } from "react";
import reactRouterDom from "react-router-dom";

class PageError extends React.Component{
    render(){
        return(
            <Fragment>
                <h1 className="text-danger text-center">Not found </h1>
            </Fragment>
        )
    }
}
export default PageError;