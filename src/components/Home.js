import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom"
import {getUsers} from "../redux/actions/userActions"

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
componentDidMount(){
    this.getUsers()
}

    getUsers=()=>{
        fetch("https://api.github.com/users")
        .then(response => response.json())
        .then(json => {
            console.log(json)
            this.props.getUsers(json);
        }
            
            // this.setState({
      
            // })
          )
      };
    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to="/" />
        }
        return (
            <div style={{}}>
                <p>HomePage After Login</p>

                <Link to="/" >Logout</Link>

                {/**Display Api Fetch */}
                {/**this.props.getUsers().map(user=>{
                        return user.login
                    })
                
                
                */
                    
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users:state.users
      }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (users) => dispatch(getUsers(users))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
