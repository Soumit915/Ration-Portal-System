import React from 'react';
import './Home.css';
import { withRouter } from 'react-router-dom';
import RespPeople from "./Responsible_People";
import axios from "axios";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { resp_persondata: [] }
    }

    handleClick = () => {
        this.props.history.push("/about-us");
        this.props.controlNavTransparency();
    }

    componentDidMount() {
        axios.get("https://rtds-backend-deploy.herokuapp.com/api/util/getAll")
            .then((response) => {
                // handle success
                this.setState({ resp_persondata: response.data });
            })
            .catch(function (error) {
                // handle error
                console.warn("Api for responsible people is not loaded properly. Check Home.js to debug");
            })
            .then(function () {
                // always executed
            });
    }

    render() {
        return (
            <>
                <div id="home-window">
                    <div className="home" onScroll={onscroll}>
                        <div className="home-content">
                            <h1 className="home-header">Ration Distribution System</h1>
                            <p className="home-para">Official portal of Department of Food &amp; Supplies, Govt. of West Bengal</p>
                            <button type="button"
                                className="btn btn-light home-btn"
                                onClick={this.handleClick}
                            >About Us</button>
                        </div>
                    </div>

                    <div className="search">
                        <div className="search-innerdiv">
                            <h1 className="search-header">
                                <span className="text-primary">Search</span> Here
                            </h1>
                            <nav className="navbar form-div">
                                <form className="mx-auto">
                                    <div>
                                        <input className="form-control mr-sm-2 input-class" type="search" placeholder="Search Something" aria-label="Search" />
                                        <button className="btn btn-outline-primary my-2" type="submit">Search</button>
                                    </div>
                                </form>
                            </nav>
                        </div>
                    </div>

                    <div id="responsible-authorities" className="resp-authorities">
                        <h1 className="search-header">
                            <span className="text-primary">Responsible</span> Authorities
                        </h1>
                        <div className="imp-person">
                            <section className="grid mx-auto">
                                {
                                    this.state.resp_persondata.map((item) => {
                                        return <RespPeople person={item}
                                            key={item.img}>
                                        </RespPeople>
                                    })
                                }
                            </section>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(Home);

/*
    -> Develop a responsive way to store the images of the responsible
        authorities images. And currently you are using the images number as the
        unique key. So, try to make a dynamic key

*/