import React, { Component } from "react";
import firstnames from './firstNames';
import lastnames from './lastNames';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generatedName: '',
      gender: '',
      nationality: ''
    };
  }

  onClick = () => {
    const filteredFirstNames = firstnames.filter(name => {
      return name.gender === this.state.gender
          && name.nationality === this.state.nationality;
    });

    const filteredLastNames = lastnames.filter(name => {
      return name.nationality === this.state.nationality;
    });

    const indexFirst = Math.floor(Math.random() * filteredFirstNames.length)
    const indexLast = Math.floor(Math.random() * filteredLastNames.length)

    if (this.state.gender !== '' && this.state.nationality !== '') {
      this.setState({
        generatedName: "Your name is: " + filteredFirstNames[indexFirst].name + " " + filteredLastNames[indexLast].name
      });
    } else {
      alert('Enter a value!');
    }
  };

  onGenderChange = event => {
    this.setState({
      gender: event.target.value
    });
  };

  onNationalityChange = event => {
    this.setState({
      nationality: event.target.value
    });
  };

  render() {
    return (
      <div
        style={{
          border: "1px solid black",
          width: "60vw",
          margin: "auto"
        }}
      >
        <p style={{ fontSize: "40px" }}>Name Generator 4.20</p>
        <h1>Gender:</h1>
        <select onChange={this.onGenderChange} value={this.state.gender}>
          <option selected />
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <h1>Nationality:</h1>
        <select onChange={this.onNationalityChange} value={this.state.nationality}>
          <option selected />
          <option value="chinese">Asian</option>
          <option value="japanese">Japanese</option>
          <option value="american">American</option>
          <option value="french">French</option>
          <option value="greek">Greek</option>
          <option value="hawaiian">Hawaiian</option>
          <option value="italian">Italian</option>
          <option value="russian">Russian</option>
        </select>
        <button onClick={this.onClick}>Generate Name</button>
        <h1>{this.state.generatedName}</h1>
      </div>
    );
  }
}

export default App;
