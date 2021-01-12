import React from "react";
import { withRouter } from "react-router-dom";

class ProfilePage extends React.Component {

    constructor(props){
        super(props);
        if (!this.props.isLoggedIn) {
            this.props.history.push("/*");
        }
    }

    render() {
        return (
            <>
                <h1>This is your profile</h1>
                <h1>This is your profile</h1>
                <h1>This is your profile</h1>
                <h1>This is your profile</h1>
                <h1>This is your profile</h1>
                <h1>This is your profile</h1>
                <h1>This is your profile</h1>
            </>
        );
    }
}

export default withRouter(ProfilePage);