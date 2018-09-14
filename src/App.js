import React, { Component } from "react";
import Gallery from "./component/Gallery";
import { images } from "./test-data/images"; 
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Gallery images={images} />
      </div>
    );
  }
}

export default App;
