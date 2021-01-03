import React from 'react';
import './Router.css';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Aboutus from '../About/AboutUs';

class Navbar extends React.Component {

    constructor() {
        super();
        this.state = { makeNavTransparent: true };
    }

    componentDidMount() {

        var pathname = window.location.pathname;
        if (pathname === "/") {
            if (!this.state.makeNavTransparent) {
                this.setState({ makeNavTransparent: true });
            }
        }
        else {
            if (this.state.makeNavTransparent)
                this.setState({ makeNavTransparent: false });
        }

        const self = this;
        window.onscroll = function () {
            pathname = window.location.pathname;
            if (pathname === "/") {
                if (window.scrollY > 80) {
                    self.setState({ makeNavTransparent: false });
                }
                else self.setState({ makeNavTransparent: true });
            }
            else {
                self.setState({ makeNavTransparent: false });
            }
        }
    }

    onNavClick = (e) => {
        var targetURL = e.target.href;
        var host = e.target.origin;
        var pathname = targetURL.substring(host.length);

        if (pathname === "/") {
            if (window.scrollY > 80) {
                this.setState({ makeNavTransparent: false });
            }
            else this.setState({ makeNavTransparent: true });
        }
        else {
            if (this.state.makeNavTransparent)
                this.setState({ makeNavTransparent: false });
        }
    }

    onAboutUsClick = (e) => {
        if (this.state.makeNavTransparent)
            this.setState({ makeNavTransparent: false });
    }

    render() {
        return (
            <>
                <div>
                    <Router>
                        <div>
                            <div className=
                                {
                                    this.state.makeNavTransparent ?
                                        "nav" : "nav-active"
                                }
                                id="header">
                                <div className="nav-options">
                                    <NavLink to="/"
                                        className=
                                        {
                                            !this.state.makeNavTransparent ?
                                                "style-logo" : "style-logo-scroll"
                                        }
                                        onClick={this.onNavClick}
                                    >RDS<sup><span className="trademark">&trade;</span></sup></NavLink>
                                </div>
                                <div className="nav-options">
                                    <NavLink to="/"
                                        className=
                                        {
                                            !this.state.makeNavTransparent ?
                                                "style-navlinks" : "style-navlinks-scroll"
                                        }
                                        onClick={this.onNavClick}
                                    >Home</NavLink>

                                    <NavLink to="/about-us"
                                        className=
                                        {
                                            !this.state.makeNavTransparent ?
                                                "style-navlinks" : "style-navlinks-scroll"
                                        }
                                        onClick={this.onNavClick}
                                    >About Us</NavLink>

                                    <NavLink to="/our-report"
                                        className=
                                        {
                                            !this.state.makeNavTransparent ?
                                                "style-navlinks" : "style-navlinks-scroll"
                                        }
                                        onClick={this.onNavClick}
                                    >Our Report</NavLink>

                                    <NavLink to="/contact-us"
                                        className=
                                        {
                                            !this.state.makeNavTransparent ?
                                                "style-navlinks" : "style-navlinks-scroll"
                                        }
                                        onClick={this.onNavClick}
                                    >Contact Us</NavLink>

                                    <NavLink to="/login"
                                        className=
                                        {
                                            !this.state.makeNavTransparent ?
                                                "style-navlinks" : "style-navlinks-scroll"
                                        }
                                        onClick={this.onNavClick}
                                    >Login</NavLink>
                                </div>
                            </div>
                            <div>
                                <Switch>
                                    <Route path="/" exact>
                                        <Home
                                            state={this.state}
                                            onAboutUsClick={this.onAboutUsClick}
                                        />
                                    </Route>
                                    <Route path="/about-us"><Aboutus item={"about-us"} /></Route>
                                    <Route path="/our-report"><Homed item={"our-report"} /></Route>
                                    <Route path="/contact-us"><Homed item={"contact-us"} /></Route>
                                    <Route path="/login"><Homed item={"log-in"} /></Route>
                                    <Route path="/*"><Homed /></Route>
                                </Switch>
                            </div>
                        </div>
                    </Router>
                </div>
            </>


        );
    }
}

export default Navbar;

class Homed extends React.Component {

    constructor() {
        super();
        this.val = 0;
    }

    render() {
        return (
            <>
                <div className="body">
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                    <h1>Your are in {this.props.item} {this.val++}</h1>
                </div>

            </>
        );
    }
}