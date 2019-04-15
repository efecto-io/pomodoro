import React, { Component } from 'react';
import './App.css';
import Timer from './Timer';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <button>Get started !</button>
        </div>
        <div>
          <Timer startCount='1000' />
        </div>
        <div>
          <button>25 min</button>
          <button>5 min</button>
          <button>15 min</button>
        </div>
        <div>
          <button>Tic Tac</button>
          <button>Ring</button>
        </div>
        <div>
          <h4>Todo</h4>
          <ul>
            <li>1</li>
            <li>2</li>
          </ul>
        </div>
        <div>
          <h4>Done</h4>
          <ul>
            <li>1</li>
            <li>2</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
