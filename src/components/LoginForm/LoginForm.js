import React from "react";
import "./LoginForm.css";
import WavePic from "./img/wave.jpg";
import Avatar from "./img/avatar.svg";
import Background from "./img/bg.svg";
import axios from "axios";
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { loginId: "", password: "" }
    }

    componentDidMount() {
        const inputs = document.querySelectorAll(".input");

        function addcl() {
            let parent = this.parentNode.parentNode;
            parent.classList.add("focus");
        }

        function remcl() {
            let parent = this.parentNode.parentNode;
            if (this.value === "") {
                parent.classList.remove("focus");
            }
        }

        inputs.forEach(input => {
            input.addEventListener("focus", addcl);
            input.addEventListener("blur", remcl);
        });

    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('https://rtds-backend-deploy.herokuapp.com/api/user/login',
            {
                loginId: this.state.loginId,
                password: this.state.password
            }
        ).then(user => {
            console.log('User Login', user);
            this.props.history.push("/");
            this.props.onLogin(user.data);

            console.log(user);
            
            var temp = typeof(localStorage)
            if(temp!==null)
            {
                localStorage.setItem("userData", JSON.stringify(user.data));
            }
        }).catch((response) => {
            console.log('request failed', response);
        });
    }

    render() {
        return (
            <>
                <div className="loginform-body">
                    <div className="container loginform-container">
                        <div className="img">
                            <img src={Background} className="inner-img" alt="" />
                        </div>
                        <div className="login-content">
                            <img className="wave" src={WavePic} alt="" />
                            <form className="login-form">
                                <img src={Avatar} className="login-content-img" alt="" />
                                <h2 className="title login-content-h2">Welcome</h2>
                                <div className="input-div one">
                                    <div className="i input-div-div">
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <div className="div input-div-div">
                                        <h5 className="input-div-div-h5">
                                            Enter Ration or Aadhaar number
                                        </h5>
                                        <input type="text"
                                            className="input"
                                            id="loginId"
                                            onChange={(e) => { this.setState({ loginId: e.target.value }) }}
                                        />
                                    </div>
                                </div>
                                <div className="input-div pass">
                                    <div className="i input-div-div">
                                        <i className="fas fa-lock i-i"></i>
                                    </div>
                                    <div className="div input-div-div">
                                        <h5 className="input-div-div-h5">Password</h5>
                                        <input type="password"
                                            className="input"
                                            id="password"
                                            onChange={(e) => { this.setState({ password: e.target.value }) }}
                                        />
                                    </div>
                                </div>
                                {/*<a href="#">Forgot Password?</a>*/}
                                <input type="submit"
                                    className="btnlogin"
                                    value="Login"
                                    onClick={this.handleSubmit}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(LoginForm);