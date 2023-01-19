import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand text-light"
                to="/">{'RED-NEWS'}</Link>
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link to="/sources" className="nav-link text-light">
                            {'SOURCES'}
                        </Link>
                    </li>
                </ul>
                <form className="d-flex">
                    <input type="search" className="form-control" placeholder="search here..."/>
                    <button className="btn btn-success ms-1" type="submit">{'Search'}</button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar