import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";

class App extends Component {

 
      openNav = () => {
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
            document.getElementById("nav-btn").style.marginLeft  = "250px";
        }
        
      closeNav = () => {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft= "0";
            document.getElementById("nav-btn").style.marginLeft  = "0";
        }



  render() {
    return (
      <div className="App">
        <Nav
        openNav={this.openNav}
        closeNav={this.closeNav}
        >
        </Nav>
        {/* <Window>
        </Window> */}
      </div>
    );
  }
}

export default App;
