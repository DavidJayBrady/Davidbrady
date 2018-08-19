import React, { Component } from 'react';

import MistbornImage from '../../Assets/Books/mistborn.jpg';
import DuneImage from '../../Assets/Books/dune.jpg';
import RadianceImage from '../../Assets/Books/radiance.jpeg';

class Books extends Component {
  constructor() {
    super();
    this.book_style = {
      padding: '5vw',
      display: 'inline-block',
      'margin-left': 'auto',
      'margin-right': 'auto',
      width: '25vw',
      height: '60vh',
    };
  }

  render() {
    return (
      <div>
        <div align="center" >
          <img src={MistbornImage} alt="Mistborn" style={this.book_style} />
          <img src={DuneImage} alt="Dune" style={this.book_style} />
          <img
            src={RadianceImage}
            alt="Words of Radiance"
            style={this.book_style}
          />
        </div>
      </div>
    );
  }
}

export default Books;
