import React from 'react';
import './App.css';
import logo from './logo.svg';
import { simpleAction } from './actions/simpleAction';
import { connect } from 'react-redux';

function App(simpleAction) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          my leetcode page
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button>Test redux action</button>
      <button onClick={simpleAction}>Test redux action</button>
      <pre>
        {
          JSON.stringify(this.props)
        }
      </pre>
    </div>
  );
  
}

// simpleAction = (event) => {
//   this.props.simpleAction();
// }

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
