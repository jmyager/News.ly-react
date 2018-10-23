import React from "react";
import "./Nav.css";

const Nav = props => (
    <div className="nav">

        <div id="mySidenav" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={() => props.closeNav()}>&times;</a>
            <h1 className="brand">News.ly</h1>
            <a href="#">Scrape</a>
            <a href="#">Saved Articles</a>
            <a href="#">About</a>
            <a href="#">ReadMe</a>
        </div>

        <div className="window" id="main">
            <h1>Welcome to News.ly!</h1>
            <p>Click the button below to begin scraping articles.</p>
            <button onClick={()=> props.scrape()}>Scrape</button>
            <div id="nav-btn" onClick={() => props.openNav()}><i className="fa fa-bars fa-2x"></i></div>
        </div>


    </div>
);

export default Nav;