import { Component } from "react";
import State from "./Component/State";
import Map from "./Component/Map";
import ComDidMount from "./Component/ComDidMount";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstname: "jammy", lastname: "jai" },
      company: "ZTM",
    };
  }
  render() {
    return (
      <div>
        {/*Explains about state and setState.*/}
        <State />
        <Map />
        <ComDidMount />
      </div>
    );
  }
}

export default App;
