import React from "react";
import { withRouter } from "react-router-dom";
import "./RationLocation.css";
import Timeline from './Timeline.js';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';

class RationLocation extends React.Component {

    constructor(props) {
        super(props);
        if (!this.props.isLoggedIn) {
            this.props.history.push("/*");
        }

        var date = new Date();

        var today = {};
        today.dd = this.pad(date.getDate(), 2);
        today.mm = this.getMonthName(date.getMonth());
        today.yyyy = date.getFullYear();
        today.ddSufix = this.getDateSuffix(today.dd % 10, parseInt(today.dd / 10) % 10);
        today.hour = date.getHours();
        today.minute = this.pad(date.getMinutes(), 2);
        today.seconds = date.getSeconds();

        console.log(this.props.userData.cardTypeID);
        axios.post('https://rtds-backend-deploy.herokuapp.com/api/util/getCard',
            {
                card_type_id: this.props.userData.cardTypeID
            }
        ).then(user => {
            console.log(user);
        }).catch((response) => {
            console.log('request failed', response);
        });

        axios.get('https://rtds-backend-deploy.herokuapp.com/api/util/getCard', {
            params: {
                card_type_id: this.props.userData.cardTypeID
            }
        }).then(user => {
            console.log(user);
        }).catch((response) => {
            console.log('request failed', response);
        });

        this.state = {
            today: today
        }
    }

    getDateSuffix = (n, n1) => {
        if (n1 === 1)
            return "th"
        else if (n === 1)
            return "st";
        else if (n === 2)
            return "nd";
        else if (n === 3)
            return "rd";
        else return "th";
    }

    getMonthName = (n) => {
        switch (n) {
            case 0: return "January";
            case 1: return "February";
            case 2: return "March";
            case 3: return "April";
            case 4: return "May";
            case 5: return "June";
            case 6: return "July";
            case 7: return "August";
            case 8: return "September";
            case 9: return "October";
            case 10: return "November";
            case 11: return "December";
            default: return null;
        }
    }

    pad = (n, p) => {
        n = n + ""
        if (n.length === p)
            return n;
        else {
            var v = ""
            for (var i = 0; i < p - n.length; i++) {
                v += "0";
            }
            v += n;
        }

        return v;
    }

    componentDidMount() {

        setInterval(() => {
            var date = new Date();
            var today = {};
            today.dd = this.pad(date.getDate(), 2);
            today.mm = this.getMonthName(date.getMonth());
            today.yyyy = date.getFullYear();
            today.ddSufix = this.getDateSuffix(today.dd % 10, parseInt(today.dd / 10) % 10);
            today.hour = this.pad(date.getHours(), 2);
            today.minute = this.pad(date.getMinutes(), 2);
            today.seconds = this.pad(date.getSeconds(), 2);
            this.setState({ today: today });
        }, 1000);
    }

    render() {
        return (
            <>
                <div className="body">
                    <div className="sidebar">
                        <div>
                            <h4>Today:</h4>
                            <div>
                                {this.state.today.dd}<sup>{this.state.today.ddSufix}</sup>
                                {" " + this.state.today.mm + " " + this.state.today.yyyy}
                            </div>
                            <div>
                                {this.state.today.hour + " : " + this.state.today.minute + " : " + this.state.today.seconds}
                            </div>
                        </div>
                        <Divider />
                        <div>
                            <h4>Ration Due:</h4>

                        </div>
                        <Divider />
                        <div>
                            <h4>Estimated Arrival Date:</h4>
                            <div>
                                {this.state.today.dd}<sup>{this.state.today.ddSufix}</sup>
                                {" " + this.state.today.mm + " " + this.state.today.yyyy}
                            </div>
                        </div>
                        <Divider />
                        <div>
                            <h4>Transportation Timeline</h4>
                            <Timeline />
                        </div>
                    </div>
                    <div className="map">

                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(RationLocation);