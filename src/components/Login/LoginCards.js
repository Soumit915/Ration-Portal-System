import React from "react";
import "./LoginCards.css";
import {withRouter} from "react-router-dom";

class LoginCards extends React.Component {

    constructor(props) {
        super(props);
        this.state = { cardHover: false };
    }

    handleCardHover = () => {
        this.setState({ cardHover: true });
    }

    handleCardOut = () => {
        this.setState({ cardHover: false });
    }

    handleClick = () => {
        this.props.onLoginClick(this.props.person.type);
        this.props.history.push("/login-form");
    }

    render() {
        return (
            <>
                <div className="designPerson designCursor-pointer"
                    id="login-card"
                    onMouseOver={this.handleCardHover}
                    onMouseOut={this.handleCardOut}
                    onClick={this.handleClick}
                >
                    <img src={this.props.person.image}
                        className=
                        {
                            this.state.cardHover ?
                                "designAvatarHover avatar-border-white" :
                                "designAvatar"
                        }
                        alt='' />
                    <p className=
                        {
                            this.state.cardHover ? "designTypeHover" : "designType"
                        }
                    >{this.props.person.type}</p>
                    <p className=
                        {
                            this.state.cardHover ?
                                "designInstructionHover" :
                                "designInstruction"
                        }
                    >{this.props.person.info}</p>
                </div>
            </>
        );
    }
}

export default withRouter(LoginCards);