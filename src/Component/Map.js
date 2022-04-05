import { Component } from "react";

class Map extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { name: "arun", id: 1 },
        { name: "baskar", id: 2 },
        { name: "muthu", id: 3 },
        { name: "Guru", id: 4 },
      ],
    };
  }

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

export default Map;
