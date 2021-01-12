import React from "react";
import "./Notifications.css"
import { withRouter } from "react-router-dom";
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationListItem from "./NotificationListItem";
import Data from "./NotificationsData.json";

class Notifications extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: Data
        }
        if (!this.props.isLoggedIn) {
            this.props.history.push("/*");
        }
    }

    render() {
        return (
            <>
                <div className="notifications-body">
                    <section className="section-50">
                        <div className="container">
                            <h3 className="m-b-50 heading-line">
                                Notifications &nbsp;
                                <NotificationsIcon fontSize="large" className="text-primary" />
                            </h3>

                            <div className="notification-ui_dd-content">
                                {
                                    this.state.data.map((notification, index) => {
                                        return <NotificationListItem key={index}
                                            notificationData={notification}
                                        />
                                    })
                                }
                            </div>

                            <div className="text-center">
                                <a href="#!" className="dark-link">Load more activity</a>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        );
    }
}

export default withRouter(Notifications);