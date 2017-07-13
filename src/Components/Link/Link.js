import React, { Component } from 'react';

class Link extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: this.props.linkFromParent
    }
  }

  render() {
    let linkText = `https://${this.state.link}`;
    return (
      <div className="link">
        <div className="linktext">
          <a href={linkText}>{this.state.link}</a>
        </div>
        <div className="image">
          
        </div>
      </div>
    )
  }
}

export default Link;