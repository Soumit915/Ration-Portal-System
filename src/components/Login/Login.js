import React from "react";
import "./Login.css";
import LoginCards from "./LoginCards";
import LoginData from "./LoginData";

class Login extends React.Component {

    constructor() {
        super();
        this.logindata = LoginData;
    }

    render() {
        return (
            <>
                <div className="login-cards">
                    <section className="grid mx-auto">
                        {
                            this.logindata.map((item, index) => {
                                return <LoginCards person={item}
                                    key={index}
                                    onLoginClick={this.props.onLoginClick} />
                            })
                        }
                    </section>
                </div>
            </>
        );
    }
}

export default Login;