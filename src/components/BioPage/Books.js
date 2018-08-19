import React, { Component } from "react";

import MistbornImage from "../../Assets/Books/mistborn.jpg";
import DuneImage from "../../Assets/Books/dune.jpg";
import RadianceImage from "../../Assets/Books/radiance.jpeg";

class Books extends Component {
  constructor() {
    super();
    this.book_style = {
      padding: "5vw",
      display: "inline-block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "25vw",
      height: "60vh",
    };
  }

  render() {
    return (
      <div align="center" style={{ background: "blue", height: "100%" }}>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%'}}>
          <div className="books">
            <div className="mistborn">
              <img src={MistbornImage} alt="Mistborn" />
            </div>
            <div className="dune">
              <img src={DuneImage} alt="Dune" />
            </div>
            <div className="radiance">
              <img
                  src={RadianceImage}
                  alt="Words of Radiance"
              />
            </div>
          </div>
          <div style={{height:"150px", backgroundColor: "orange", display: "flex", alignItems: "center", justifyContent: 'center' }}>
            <h3>Journey Before Destination</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Books;


//
// <table style={{ width: "100%", height: "100%" }}>
//   <tr>
//     <td style={{ background: "red" }}>
//       <img src={MistbornImage} alt="Mistborn" style={this.book_style} />
//     </td>
//     <td style={{ background: "green" }}>
//       <img src={DuneImage} alt="Dune" style={this.book_style} />
//     </td>
//     <td style={{ background: "yellow" }}>
//       <img
//           src={RadianceImage}
//           alt="Words of Radiance"
//           style={this.book_style}
//       />
//     </td>
//   </tr>
//   <tr style={{ height: "100%", background: "orange" }}>
//     <td>text</td>
//   </tr>
// </table>