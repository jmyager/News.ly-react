import React from "react";
import "./Nav.css";

const Nav = props => (
    <div className="nav">

        <div id="mySidenav" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={() => props.closeNav()}>&times;</a>
            <h1>News.ly</h1>
            <a href="#">Scrape</a>
            <a href="#">Saved</a>
            <a href="#">About</a>
            <a href="#">ReadMe</a>
        </div>

        <div className="window" id="main">
            <h2>Sidenav Push Example</h2>
            <p>Click on the element below to open the side navigation menu, and push this content to the right.</p>
            <span id="nav-btn" onClick={() => props.openNav()}>&#9776; open</span>
        </div>


    </div>
);

export default Nav;