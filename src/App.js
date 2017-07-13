import React, { Component } from 'react';

import Link from "./Components/Link/Link.js";

let suffixes = [".com", ".gov", ".net"];

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
    let textStr = this.state.text;
    let acceptable;
    for (let elem of suffixes) {
      acceptable = textStr.indexOf(elem);
      if (acceptable > -1) {
        let n = textStr.lastIndexOf(" ", acceptable);
        let linkStr = textStr.substring(n, acceptable + 4);
        this.setState({link: linkStr});
        break;
      } else {
        this.setState({link: ''});
      }
    }
  }

  handleChange(event) {
    let val = event.target.value;
    this.setState({text: val});
    this.check();
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