import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Sources from "../sources/Sources";
import Home from "../home/Home";

const SEARCH_URL = (query) => `https://newsapi.org/v2/everything?q=${query}&apiKey=API_KEY`

const HEADLINES_URL = 'https://newsapi.org/v2/top-headlines?language=en&apiKey=API_KEY'



function Navbar(){

    const [searchText, setSearchText] = useState("")
    const [news, setNews] = useState([])
    const [isHome, setIsHome] = useState(true)

    const submitForm = (e) => {
        e.preventDefault();
        setIsHome(false);
    }

    const loadPage = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setNews(data.articles)
            })
    }

    useEffect(() => {

        // loadPage( isHome ? HEADLINES_URL : SEARCH_URL(searchText) )

        if(isHome) {
            loadPage(HEADLINES_URL)
        }else{
            loadPage( SEARCH_URL(searchText) )
        }

    }, [isHome])



    return(
        <div>
            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light"
                    to="/" onClick={() => setIsHome(true)} >{'RED-NEWS'}</Link>
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link to="/sources" className="nav-link text-light">
                                {'SOURCES'}
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex" onSubmit={submitForm}>
                        <input type="search" className="form-control" placeholder="search here..." value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                        <button className="btn btn-success ms-1" type="submit">{'Search'}</button>
                    </form>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={ <Home news={news}/> }></Route>
                <Route path="/sources" element={ <Sources/> }></Route>
            </Routes>
        </div>
    )
}

export default Navbar