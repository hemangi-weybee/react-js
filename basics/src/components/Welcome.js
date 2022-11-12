import React, { Component } from "react";

class Welcome extends Component{

    render() { 
        const {name, role} = this.props;
        return <h2> {name} a.k.a {role} </h2>;
    }
}

export default Welcome;