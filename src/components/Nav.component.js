import { Component } from "react"

import {Link} from "react-router-dom";

export default class Nav extends Component{
    render(){
        return(
            <nav className="container" > 
            <Link to={"/"} className="navbar-brand">Home</Link>
            <div className="">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">Sign Up</Link>
                </li>
              </ul>
            </div>
                 </nav>
        )
    }
}