import { Component } from "react";

class ComDidMount extends Component {
  constructor() {
    super();
    this.state = { monsters: [] };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
  //     console.log(response.json())
  //   );
  // }

  render() {
    return (
      <div>
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default ComDidMount;
