import { render } from "@testing-library/react";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Classy Weather</h1>
        <div>
          <input type="text" placeholder="Search from location..." />
        </div>
        <button>Get weather</button>
      </div>
    );
  }
}

export default App;
