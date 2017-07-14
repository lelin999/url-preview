import React, { Component } from 'react';
import Axios from 'axios';
import Metascraper from 'metascraper';

import "./Link.css";

class Link extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: this.props.linkFromParent,
      err: '',
      title: '',
      description: '',
      image: ''
    }
  }

  render() {
    return (
      <div className="link">
        <a href={this.state.link}>
          <div className="image">
            <img src={this.state.image} height="100" width="100" />
          </div>
          <div className="text">
            <div className="title">
              <h4>{this.state.title}</h4>
            </div>
            <div className="description">
              <h6>{this.state.description}</h6>
            </div>
            <div className="url">
              <h6>{this.state.link}</h6>
            </div>
          </div>
        </a>
      </div>
    )
  }


  getTitle(text) {
    return text.match('<title>(.*)?</title>')[1];
  }

  componentDidMount() {
    Axios.get(this.state.link).then((res) => {
      this.setState({
        title: this.getTitle(res.data)
      })
    }).catch((err) => {
      this.setState({err});
      console.log(this.state);
    })

    Metascraper
      .scrapeUrl(this.state.link)
      .then((metadata) => {
        this.setState({title: metadata.title, description: metadata.description, image: metadata.image})
    })
  }
}

export default Link;