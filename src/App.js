import React, { Component } from 'react'
import Ninjas from './Ninjas'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome :)</p>
        <Ninjas nome="Fernando" idade="19" cinto="marrom" />
      </div>
    );
  }
}

export default App
