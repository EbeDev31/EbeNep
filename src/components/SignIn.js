import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {

  constructor(props){
    super(props)

    const token = localStorage.getItem("token")
    let loggedIn = true;

    if(token==null)
    {
        loggedIn=false
    }

    this.state = {
      email: '',
      password: '',
      loggedIn:loggedIn
    }
  }


  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {email,password} = this.state
    if(email==="a"&& password==="a"){
      localStorage.setItem("token","random12345")
      this.setState({
        loggedIn:true
      })
    }
    console.log(this.state)
  }
  render() {
    if(this.state.loggedIn)
    {
      return <Redirect to="/Home"/>
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} >
          <h5 >Sign In</h5>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input type='text' id='email' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <button>Login</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
       return{
      }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)