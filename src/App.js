import React, { Component } from "react";
import firstnames from "./firstNames";
import lastnames from "./lastNames";
import { Box, Grommet, Heading, Button, Text } from "grommet";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generatedName: "",
      gender: "",
      nationality: ""
    };
  }

  onClick = () => {
    const filteredFirstNames = firstnames.filter(name => {
      return (
        name.gender === this.state.gender &&
        name.nationality === this.state.nationality
      );
    });

    const filteredLastNames = lastnames.filter(name => {
      return name.nationality === this.state.nationality;
    });

    const indexFirst = Math.floor(Math.random() * filteredFirstNames.length);
    const indexLast = Math.floor(Math.random() * filteredLastNames.length);

    if (this.state.gender !== "" && this.state.nationality !== "") {
      this.setState({
        generatedName:
          "Your name is: " + 
          filteredFirstNames[indexFirst].name +
          " " +
          filteredLastNames[indexLast].name
      });
    } else {
      alert("Enter a value!");
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
      <Box
        align="center"
        elevation="small"
        width="medium"
        height="85vh"
        margin="auto"
        pad="medium"
        background="white"
      >
        <Heading level="2">Name Generator</Heading>
        <Text size="large" margin="small">What gender would you like?:</Text>
        <select onChange={this.onGenderChange} value={this.state.gender}>
          <option selected />
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <Text size="large" margin="small">What nationality would you like?:</Text>
        <select
          onChange={this.onNationalityChange}
          value={this.state.nationality}
        >
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
        <Button label="Generate name" onClick={this.onClick} margin="medium" />
        <Heading level="3" textAlign="center">{this.state.generatedName}</Heading>
      </Box>
    );
  }
}

export default App;
