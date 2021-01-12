import React from 'react';
import './Router.css';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Aboutus from '../About/AboutUs';
import Login from "../Login/Login";
import LoginForm from "../LoginForm/LoginForm";
import UserNav from "./UserNav";
import Profile from "../Beneficiary/Profile/ProfilePage";
import Notifications from "../Beneficiary/Notifications/Notifications";
import RationLocation from "../Beneficiary/Maps/RationLocation";
/*The Error page is not well made yet. Please style it properly before making it live */

class Navbar extends React.Component {

    constructor() {
        super();
        this.state = {
            makeNavTransparent: true,
            loginType: "",
            isLoggedIn: false,
            userData: null
        };

        var temp = typeof (localStorage)
        if (temp !== null) {
            if (localStorage.getItem("userData") !== null) {
                this.state.isLoggedIn = true;
                this.state.userData = JSON.parse(localStorage.getItem("userData"));
            }
        }
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

    controlNavTransparency = () => {
        if (this.state.makeNavTransparent)
            this.setState({ makeNavTransparent: false });
    }

    onLoginClick = (loginType) => {
        this.setState({ loginType: loginType });
    }

    onLogin = (userData) => {
        console.log(userData);
        this.setState({
            isLoggedIn: true,
            makeNavTransparent: true,
            userData: userData
        });
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

                                    {
                                        !this.state.isLoggedIn ?
                                            <NavLink to="/login"
                                                className=
                                                {
                                                    !this.state.makeNavTransparent ?
                                                        "style-navlinks" : "style-navlinks-scroll"
                                                }
                                                onClick={this.onNavClick}
                                            >Login</NavLink> :
                                            <UserNav
                                                makeNavTransparent={this.state.makeNavTransparent}
                                                controlNavTransparency={this.controlNavTransparency}
                                            />
                                    }
                                </div>
                            </div>
                            <div>
                                <Switch>
                                    <Route path="/" exact>
                                        <Home
                                            state={this.state}
                                            controlNavTransparency={this.controlNavTransparency}
                                        />
                                    </Route>
                                    <Route path="/about-us">
                                        <Aboutus item={"about-us"} />
                                    </Route>
                                    <Route path="/our-report">
                                        <Homed item={"our-report"} />
                                    </Route>
                                    <Route path="/contact-us">
                                        <Homed />
                                    </Route>
                                    <Route path="/login">
                                        <Login onLoginClick={this.onLoginClick} />
                                    </Route>
                                    <Route path="/login-form">
                                        <LoginForm loginType={this.state.loginType}
                                            onLogin={this.onLogin} />
                                    </Route>
                                    <Route path="/profile">
                                        <Profile isLoggedIn={this.state.isLoggedIn}
                                            userdata={this.state.userData}
                                        />
                                    </Route>
                                    <Route path="/notification">
                                        <Notifications isLoggedIn={this.state.isLoggedIn}
                                            userdata={this.state.userData}
                                        />
                                    </Route>
                                    <Route path="/ration-location">
                                        <RationLocation isLoggedIn={this.state.isLoggedIn}
                                            userData={this.state.userData}
                                        />
                                    </Route>
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