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
        zip: '',
      }
    };

    // makes the `this` from handleChange function
    // the same as the `this` from the constructor
    // this.handleNameChange = this.handleNameChange.bind(this);
    // this.handleCityChange = this.handleCityChange.bind(this);
    // this.handleZipChange = this.handleZipChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  // handleNameChange(event) {
  //   console.log(event.target.value);
  //   // this.state.user = event.target.value;
  //   this.setState({ 
  //     user: {
  //       ...this.state.user,
  //       name: event.target.value,
  //     }
  //   });
  // }

  // handleCityChange(event) {
  //   this.setState({ 
  //     user: {
  //       ...this.state.user,
  //       city: event.target.value,
  //     }
  //   });
  // }

  // handleZipChange(event) {
  //   this.setState({
  //     user: {
  //       ...this.state.user,
  //       zip: event.target.value,
  //     }
  //   })
  // }

  // currying
  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      user: {
        ...this.state.user,
        [propertyName]: event.target.value,
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.user);
    this.setState({
      user: {
        name: '',
        city: '',
        zip: '',
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Instructions />
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.user.name} onChange={this.handleChangeFor('name')} />
          <input value={this.state.user.city} onChange={this.handleChangeFor('city')} />
          <input value={this.state.user.zip} onChange={this.handleChangeFor('zip')} />
          <input type='submit' value='Submit the Form' />
          {this.state.user.name} is from {this.state.user.city}, {this.state.user.zip}
        </form>
        <p>The user is: {this.state.user.name}</p>
      </div>
    );
  }
}

export default App;
