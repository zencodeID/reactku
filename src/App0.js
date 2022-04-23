import React, { Component } from "react";

class App0 extends Component {
  constructor() {
    super();
    this.state = {
      name: "subhan",
    };
  }
  render() {
    const name = this.state.name;
    return (
      <div>
        <h1>my name is {name}</h1>
      </div>
    );
  }
}

// cara lama /banyak kode
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "subhan",
//     };
//   }
//   render() {
//     return (
//       <div>
//         <h1>my name is {this.state.name}</h1>
//       </div>
//     );
//   }
// }

export default App0;
