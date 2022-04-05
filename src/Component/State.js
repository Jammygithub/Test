import { Component } from "react";

class State extends Component {
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
        <p>
          Name: {this.state.name.firstname} {this.state.name.lastname} I work at{" "}
          {this.state.company}
        </p>
        <button
          onClick={() => {
            // Example 1
            // setstate with an object .
            // this.setState({ name: { firstname: "okok", lastname: "zzz" } });
            // batch updates
            // asynchronously

            // Example 2
            this.setState(
              () => {
                return { name: { firstname: "jack", lastname: "john" } };
              },
              () => {
                console.log(this.state);
              }
            );

            // console.log(this.state);
          }}
        >
          Change Name
        </button>
      </div>
    );
  }
}

export default State;
