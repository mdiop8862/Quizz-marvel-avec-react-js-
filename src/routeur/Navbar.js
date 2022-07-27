
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Administrateur from "./Administrateur";
import Medecin from "./Medecin";
import Secretaire from "./Secretaire";
import ErrorPage from "./ErrorPage";
import { useState } from "react";
import { Switch } from "react-router-dom";

import reactRouterDom from "react-router-dom";
import { Redirect } from "react-router-dom";
import Profile from "./Profil";
import { v4 as uuidv4 } from 'uuid';



const Navbar=()=> {
   
   const [underconst , setUnderconst]=useState({Medecin : false , Secretaire: false , Administrateur: true , id : uuidv4()})

       

    
      console.log(underconst.id)
       
  
    return(
        <Fragment>

            
<BrowserRouter>

<nav class="nav">


                
 <Link class="nav-link active" aria-current="page" to="/">Secretairey</Link>
 <Link class="nav-link" to="/medecin">Medecin</Link>
 <Link class="nav-link" to="/Administrateur">Administrateur</Link>

  </nav>

        <Switch>
            <Route path={"/"} exact  component={Secretaire}         />
            <Route path={"/medecin"}  component={Medecin}         />
            <Route path={"/Administrateur"} component={Administrateur}  />

            <Route path={"/Profile/:id"} component={Profile} />

            <Route component={ErrorPage} />
             

        </Switch>



</BrowserRouter>


  


        </Fragment>
    )
        }


export default Navbar;