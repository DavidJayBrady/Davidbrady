import React, { Component } from "react";

import HighLightScreen from "./HomePage/HighLightScreen";
import Castle from "../Assets/Castle.jpeg";

class MainPage extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <div className="container">
            <img
              src={Castle}
              alt="castle"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                left: "0px",
                top: "0px",
              }}
            />
            <HighLightScreen />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
