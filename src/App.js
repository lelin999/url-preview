import React, { Component } from 'react';

import Link from "./Components/Link/Link.js";
import "./App.css";

let suffixes = [".com", ".gov", ".net", ".org"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      link: ''
    }
    this.handleChange = this.handleChange.bind(this);
    window.state = () => { console.log (this.state) }
  }

  check(textStr) {
    let acceptable;
    for (let elem of suffixes) {
      acceptable = textStr.indexOf(elem);
      if (acceptable > -1) {
        let n = textStr.lastIndexOf(" ", acceptable);
        let linkStr = textStr.substring(n + 1, acceptable + 4);
        if (!linkStr.includes("http://")) {
          this.setState({link: `http://${linkStr}`});
        } else {
          this.setState({link: linkStr});  
        }
        break;
      } else {
        this.setState({link: ''});
      }
    }
  }

  handleChange(event) {
    let val = event.target.value;
    this.setState({text: val});
    this.check(val);
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
        { this.state.link ? <Link linkFromParent={ linkURL } /> : null }
      </div>
    )
  }
};

export default App;