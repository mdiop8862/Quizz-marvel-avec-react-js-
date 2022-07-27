import React, { Fragment } from "react";
import {Link , NavLink} from "react-router-dom";


class Header extends React.Component{

    render(){
        return(
            <Fragment>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">

      <ul className="navbar-nav">

          <li className="nav-item"> <Link className="nav-link"  to="/"> Medecin         </Link>            </li>
          <li className="nav-item"> <Link className="nav-link"  to="/Secretaire">Secretaire       </Link>           </li>
          <li className="nav-item"> <Link className="nav-link"  to="/Administrateur">Administrateur   </Link>        </li>
          
          

      </ul>


  </div>
</nav>

            </Fragment>
        )
    }
}
export default Header;