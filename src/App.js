import React, { Component } from 'react';

import Link from "./Components/Link/Link.js";

let suffixes = [".com", ".gov", ".net", ".ly", ".io"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      link: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  check() {
      if (this.state.text.indexOf(".com") === -1) {
        this.setState({link: ''});
      } else {
        this.setState({link: "www.google.com"})
      }
  }

  handleChange(event) {
    let val = event.target.value;
    this.setState({text: val, link: ""})
    this.check()
  }

  test() {
    console.log(this.state);
  }

  render() {
    let linkURL = this.state.link;
    return(
      <div className="app">
        <div className="text">
          Enter your text here: 
          <br />
          <input
            name="text"
            placeholder="Preview!"
            onChange={this.handleChange}
          />
        </div>
        {this.test()}
        { this.state.link ? <Link linkFromParent={ linkURL } /> : null }
      </div>
    )
  }
};

export default App;

//{event => this.setState({text: event.target.value})}

//algorithm should look for the string that ends in those things
//use .indexOf, then find the first whitespace before that
//index of whitespace to either index of next whitespace or end
//needs a redirect