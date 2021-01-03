import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Router from "./components/Router/Router.js";
import Footer from "./components/Footer/Footer.js";

class App extends React.Component {
  render() {
    return (
      <>
        <div>
          <Router />
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
