import React from "react";
import "./Notifications.css";
import { withRouter } from "react-router-dom";
import FeedbackIcon from '@material-ui/icons/Feedback';
import RoomIcon from '@material-ui/icons/Room';
import { green, red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';

class NotificationListItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isRead: props.notificationData.read
        }

        var today = new Date();
        var time = this.props.notificationData.time;
        var notificationdate = new Date(time.year, time.month - 1, time.day,
            time.hour, time.minute, time.second);

        var diff = today.getTime() - notificationdate.getTime();

        diff /= 1000;
        diff = parseInt(diff);

        if (diff < 60) {
            this.timeEvolved = diff + " seconds ago"
        }
        else {
            diff /= 60;
            diff = parseInt(diff);

            if (diff < 60) {
                this.timeEvolved = diff + " minutes ago"
            }
            else {
                diff /= 60;
                diff = parseInt(diff);
                if (diff < 24) {
                    this.timeEvolved = diff + " hours ago"
                }
                else {
                    diff /= 24;
                    diff = parseInt(diff);
                    if (diff < 31) {
                        this.timeEvolved = diff + " days ago"
                    }
                    else {
                        diff /= 31;
                        diff = parseInt(diff);

                        if (diff < 12) {
                            this.timeEvolved = diff + " months ago"
                        }
                        else {
                            diff /= 12;
                            diff = parseInt(diff);

                            this.timeEvolved = diff + " years ago";
                        }
                    }
                }
            }
        }
    }

    handleClick = () => {
        this.setState({
            isRead: true
        });
    }

    render() {
        return (
            <>
                <div
                    className=
                    {
                        this.state.isRead ?
                            "notification-list" :
                            "notification-list notification-list--unread"
                    }
                >
                    <div className="notification-list_content">
                        <div className="notification-list_img">
                            {
                                this.props.notificationData.type === "Feedback" ?
                                    <FeedbackIcon style={{ fontSize: 50, color: green[600] }} /> :
                                    <RoomIcon style={{ fontSize: 50, color: red[600] }} />
                            }
                        </div>
                        <div className="notification-list_detail">
                            <p>
                                <b style={{ fontSize: "110%" }}>{this.props.notificationData.heading1}</b>
                                {this.props.notificationData.heading2}
                            </p>
                            <p className="text-muted">{this.props.notificationData.content}</p>
                            <p className="text-muted"><small>{this.timeEvolved}</small></p>
                        </div>
                    </div>
                    <div className="notification-list_feature-markasread">
                        {
                            !this.state.isRead ?
                                <Button
                                    color="primary"
                                    className="mark-as-read"
                                    onClick={this.handleClick}
                                >
                                    Mark as Read
                                </Button>
                                : null
                        }
                    </div>

                    <div className="notification-list_feature-star">
                        <Rating
                            name={this.props.key}
                            max={1}
                            size="large"
                            className="star"
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(NotificationListItem);