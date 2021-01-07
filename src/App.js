import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Router from "./components/Router/Router.js";
import Footer from "./components/Footer/Footer.js";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="page-container">
          <div className="content-wrap">
            <Router />
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
