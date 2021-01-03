import React from "react";
import "./Responsible_People.css"

class Responsible_People extends React.Component{

    constructor(props)
    {
        super(props);
        this.url = `https://randomuser.me/api/portraits/thumb/men/${this.props.person.img}.jpg`;
    }

    render()
    {
        return (
            <>
                <div className="designPerson" id="">
                    <img src={this.url} className="designimg" alt="pic"/>
                    <p className="designName">{this.props.person.name}</p>
                    <p className="designRole">{this.props.person.role}</p>
                    <p className="designEmail">{this.props.person.email}</p>
                    <p className="designPhone">{this.props.person.phone}</p>
                </div>
            </>
        );
    }
}

export default Responsible_People;