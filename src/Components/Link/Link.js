import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Axios from 'axios';

class Link extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: this.props.linkFromParent
    }
  }

  render() {
    let linkText = '';
    if (this.state.link.indexOf("https://") === -1) {
      linkText = `https://${this.state.link}`;  
    } else {
      linkText = `${this.state.link}`;
    }
    
    return (
      <div className="link">
        <Helmet>
        <meta charSet="utf-8" />
          <title>{linkText}</title>
          <meta property="og:title" content="The Rock" />
          <meta property="og:type" content="video.movie" />
          <meta property="og:url" content="http://www.imdb.com/title/tt0117500/" />
          <meta property="og:image" content="http://ia.media-imdb.com/images/rock.jpg" />
        </Helmet>
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