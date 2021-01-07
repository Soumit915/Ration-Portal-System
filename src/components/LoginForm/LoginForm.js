import React from "react";
import "./LoginForm.css";
import WavePic from "./img/wave.jpg";
import Avatar from "./img/avatar.svg";
import Background from "./img/bg.svg";

class LoginForm extends React.Component {

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

        console.log(this.props);

    }


    render() {
        return (
            <>
                <div className="loginform-body">
                    <div className="container">
                        <div className="img">
                            <img src={Background} className="inner-img" alt="" />
                        </div>
                        <div className="login-content">
                            <img class="wave" src={WavePic} alt="" />
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
                                        <input type="text" class="input" />
                                    </div>
                                </div>
                                <div className="input-div pass">
                                    <div className="i input-div-div">
                                        <i className="fas fa-lock i-i"></i>
                                    </div>
                                    <div className="div input-div-div">
                                        <h5 className="input-div-div-h5">Password</h5>
                                        <input type="password" class="input" />
                                    </div>
                                </div>
                                {/*<a href="#">Forgot Password?</a>*/}
                                <input type="submit" className="btnlogin" value="Login" />
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default LoginForm;