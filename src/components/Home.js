import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom"
import { getUsers } from "../redux/actions/userActions"

import { connect } from 'react-redux'

class Home extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true;

        if (token == null) {
            loggedIn = false
        }

        this.state = {
            loggedIn: loggedIn
        }
    }
    componentDidMount() {
        this.getUsers()
    }

    /**
     * Fucntion in charge of api fetch for users
     */
    getUsers = () => {
        fetch("https://api.github.com/users")
            .then(response => response.json())
            .then(json => {
                this.props.getUsers(json);
            }
            ).catch(err => {
                console.log("Somehting Went wrong. Message says: ", err)
            }

            )

    };
    render() {
        const apiFetch = this.props.users.map(user => {
            return <p>{user.login}</p>
        })
        if (this.state.loggedIn === false) {
            return <Redirect to="/" />
        }
        return (
            <div style={{}}>
                <p>HomePage After Login</p>

                <Link to="/logout" >Logout</Link>

                {/**Display Api Fetch */}
                {
                    apiFetch
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (users) => dispatch(getUsers(users))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
