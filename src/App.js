import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";
import $ from "jquery";


class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        articles: [],
      }
    }

  // When page loads
  componentDidMount = () => {
    // Grab the articles as a json
  $.getJSON("/articles", function(data) {
    // For each one
    const articlesRefresh = [];
    for (var i = 0; i < data.length; i++) {
      articlesRefresh.push(data[i]);
      this.setState({ ...this.state, articles: articlesRefresh })
    }
  });
  };
  


  openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("nav-btn").style.opacity = "0";
  }

  closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("nav-btn").style.opacity = "100";
  }

  scrape = () => {
    // Default ajax call to scrape route
      $.ajax({
        method: "GET",
        url: "/scrape"
      })
        .then((data) => {
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        })
    }


  render() {
    return (
      <div className="App">
        <Nav
          openNav={this.openNav}
          closeNav={this.closeNav}
          scrape={this.scrape}
        >
        </Nav>
      </div>
    );
  }
}

export default App;
