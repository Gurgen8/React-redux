import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css'
import {createStore} from "redux"
import { Provider } from 'react-redux';

const initialState={
  cash:0
}

const reducer=(state=initialState,action)=>{
  switch(action.type){
    case "ADD_CASH":

    return {...state,cash:state.cash+action.payload}

    case "GET_CASH":

      return {...state,cash:state.cash-action.payload}

  default:
  return state}

}


const store=createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>
   ,
  document.getElementById('root')
);