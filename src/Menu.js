
import React, { Fragment } from "react";

import { Link } from "react-router-dom";

const Menu=()=>{
   return(
       <Fragment>
              <nav>
                  <ul>
                   
                  <li><Link to={"/"}  >Secretaire</Link></li>
                  <li><Link to={"/Administrateur"}>Administrateur</Link></li>
                  <li><Link to={"/Medecin"}>Medecin</Link></li>
                  
                      
                  </ul>

              </nav>
       </Fragment>
   )
}
export default Menu ;
/*<li><Link to={"/"}>Doctor</Link></li>
<li><Link to={"/Patient"}>Patient</Link></li>
<li><Link to={"/Medecin"}>Medecin</Link></li>
<li><Link to={"/Secretaire"}>Doctor</Link></li>*/
