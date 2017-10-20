import './App.css';

import React, { Component } from 'react';
import Time from './Time';
import Queue from './Queue';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__title">Please take your number</h1>
          <div className="app__time"><Time current big /></div>
        </header>
        <div className="app__queue">
          <Queue>
            {[
              {number: "A365", category: "A", room: "04"},
              {number: "B004", category: "B", room: "01"},
              {number: "C012", category: "C", room: "34"},
              {number: "A366", category: "A", hours1: "16", minutes1: "34", hours2: "16", minutes2: "49"},
              {number: "B005", category: "B", hours1: "16", minutes1: "32", hours2: "16", minutes2: "42"},
              {number: "A367", category: "A", hours1: "16", minutes1: "44", hours2: "16", minutes2: "59"},
              {number: "A368", category: "A", hours1: "16", minutes1: "54", hours2: "17", minutes2: "09"},
              {number: "A369", category: "A", hours1: "17", minutes1: "04", hours2: "17", minutes2: "19"},
              {number: "C013", category: "C", hours1: "17", minutes1: "20", hours2: "18", minutes2: "00"}
            ]}
          </Queue>
        </div>
      </div>
    );
  }
}

export default App;
