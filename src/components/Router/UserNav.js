import React from 'react';
import "./UserNav.css";
import {withRouter} from "react-router-dom";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import EmailIcon from '@material-ui/icons/Email';
import HistoryIcon from '@material-ui/icons/History';
import RoomIcon from '@material-ui/icons/Room';
import StoreIcon from '@material-ui/icons/Store';
import FeedbackIcon from '@material-ui/icons/Feedback';

class SwipeableTemporaryDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        this.setState({ isOpen: open });
    };

    handleSeeYourProfileClick = () => {
        this.props.history.push("/profile");
        this.props.controlNavTransparency();
    }

    handleNotificationsClick = () => {
        this.props.history.push("/notification");
        this.props.controlNavTransparency();
    }

    handleFindYourRationClick = () => {
        this.props.history.push("/ration-location");
        this.props.controlNavTransparency();
    }

    list = () => {
        return (
            <div
                className="style-drawer-width"
                role="presentation"
                onClick={this.toggleDrawer(false)}
                onKeyDown={this.toggleDrawer(false)}
            >
                <List>
                    <ListItem button onClick={this.handleSeeYourProfileClick}>
                        <ListItemIcon><PersonIcon style={{ color: "#007bff" }} /></ListItemIcon>
                        <ListItemText primary="See your profile" className="drawer-list-color" />
                    </ListItem>
                    <ListItem button onClick={this.handleNotificationsClick}>
                        <ListItemIcon><NotificationsActiveIcon style={{ color: "#007bff" }} /></ListItemIcon>
                        <ListItemText primary="Notifications" className="drawer-list-color" />
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon><EmailIcon style={{ color: "#007bff" }} /></ListItemIcon>
                        <ListItemText primary="Mails" className="drawer-list-color" />
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon><HistoryIcon style={{ color: "#007bff" }} /></ListItemIcon>
                        <ListItemText primary="Logs" className="drawer-list-color" />
                    </ListItem>
                    <ListItem button onClick={this.handleFindYourRationClick}>
                        <ListItemIcon><RoomIcon style={{ color: "green" }} /></ListItemIcon>
                        <ListItemText primary="Find your ration" style={{ color: "green" }} />
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon><StoreIcon style={{ color: "#007bff" }} /></ListItemIcon>
                        <ListItemText primary="Your Dealer" className="drawer-list-color" />
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon><FeedbackIcon style={{ color: "#007bff" }} /></ListItemIcon>
                        <ListItemText primary="Submit feedback" className="drawer-list-color" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        )
    };

    render() {
        return (
            <React.Fragment>
                <div className="navatar-div">
                    <AccountCircleIcon onClick={this.toggleDrawer(true)}
                        className=
                        {
                            !this.props.makeNavTransparent ?
                                "style-navatar" : "style-navatar-scroll"
                        }
                        style={{ fontSize: 38 }} />
                </div>
                <SwipeableDrawer
                    anchor={'right'}
                    open={this.state.isOpen}
                    onClose={this.toggleDrawer(false)}
                    onOpen={this.toggleDrawer(true)}
                >
                    {this.list()}
                </SwipeableDrawer>
            </React.Fragment>
        );
    }
}

export default withRouter(SwipeableTemporaryDrawer);