import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";

export default class Error extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="xs-12 md-6 mx-auto">
                            <div id="error-content">
                                <div className="error-icon">
                                    <img
                                        src="https://www.flaticon.com/svg/vstatic/svg/3470/3470476.svg?token=exp=1609762783~hmac=4ba177f8ecb4782ae9355a7f72f4b92d"
                                        alt="Error Icon"
                                        style={{ height: "80%", width: "80%" }}
                                    />
                                </div>
                                <div className="text">Page not found</div>
                                <div className="text">This may not mean anything.</div>
                                <div className="text">
                                    I'm probably working on something that has blown up.
                                </div>
                                <Link className="btn white" type="submit" to="/">
                                    Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
