import React from "react";

function Navbar(){
    return(
        <nav className="navbar bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-light"
                href="#">{'RED-NEWS'}</a>
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a href="#" className="nav-link text-light">
                            {'SOURCES'}
                        </a>
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