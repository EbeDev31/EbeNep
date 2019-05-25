import React, { Component } from 'react';

import { Link } from "react-router-dom"

class Logout extends Component {
    constructor(props) {
        super(props)
        localStorage.removeItem("token")
    }

    render() {
        return (
            <div style={{}}>
                <p>You've Been Logged Out!</p>
                <Link to="/" >Log back In</Link>
            </div>
        )
    }
}

export default Logout;
