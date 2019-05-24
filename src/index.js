
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {usersActions} from "./redux/actions/userActions"
import { createStore} from 'redux'
import { Provider } from 'react-redux'

const initState = {
    users:[]
  
  }
  
  const rootReducer = (state = initState, action) => {
    switch (action.type) {
      case 'GET_USERS':
        
        return {
            ...state,
            users:action.users
        };
      default:
        return state;
    }
  };
const store = createStore(rootReducer );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();