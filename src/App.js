import React from 'react'
import { connect } from 'react-redux'
import * as actions from './redux/actions/test'
import logo from './logo.svg'
import './App.css'

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={props.arrayTest}>Update Array</button>
        <button onClick={props.objectTest}>Update Object</button>
        <button onClick={props.mapTest}>Map Array to Object</button>
        <button onClick={props.valuesTest}>Object values to Array</button>
      </header>
    </div>
  )
}
const mapStateToProps = state => ({
  ...state,
})

export default connect(
  mapStateToProps,
  actions
)(App)
