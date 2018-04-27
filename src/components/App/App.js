import React, { Component } from 'react';
import Header from '../Header/Header';
import Instructions from '../Instructions/Instructions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: '',
        city: '',
      }
    };

    // makes the `this` from handleChange function
    // the same as the `this` from the constructor
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
  }

  handleNameChange(event) {
    console.log(event.target.value);
    // this.state.user = event.target.value;
    this.setState({ 
      user: {
        name: event.target.value,
        city: this.state.user.city,
      }
    });
  }

  handleCityChange(event) {
    this.setState({ 
      user: {
        name: this.state.user.name,
        city: event.target.value,
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Instructions />
        <p>
          <input onChange={this.handleNameChange} />
          <input onChange={this.handleCityChange} />
          {this.state.user.name} is from {this.state.user.city}
        </p>
        <p>The user is: {this.state.user.name}</p>
      </div>
    );
  }
}

export default App;
