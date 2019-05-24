import React, { Component } from 'react';

class Logout extends Component {
    constructor(props) {
        super(props)
        localStorage.removeItem("token")
    }

    render() {
        return (
            <div style={{}}>
                <p>You've Been Logged Out!</p>
            </div>
        )
    }
}

export default Logout;
