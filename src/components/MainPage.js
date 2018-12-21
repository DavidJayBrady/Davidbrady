import React, { Component } from "react";

import HighLightScreen from "./HomePage/HighLightScreen";

class MainPage extends Component {
  render() {
    return (
      <div className="App" style={{ height: "100%"}}>
        <div style={{ height: "100%", width: "100%" }}>
          <HighLightScreen />
        </div>
      </div>
    );
  }
}

export default MainPage;
