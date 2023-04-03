
import  React from 'react'
import { Link} from "react-router-dom";
import './NavBar.css'
import logo from "../image/icon.svg";
import camera from "../image/camera.png";

function NavBar(){
    return(
      <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <div>
            <Link to="/" className="navbar-brand" href="#">
              <img src={logo} alt="Bootstrap" />
            </Link>
            <span>Instaclone</span>
          </div>
          <ul>
            <li className="navbar-brand camera">
              <Link to="/formPage">
                <img src={camera} alt="Bootstrap" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      
    </div>
    )
};

export default NavBar;