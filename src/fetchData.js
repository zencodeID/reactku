import React, { Component } from "react";
import axios from "axios";

class fetchData extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
    };
  }

  getUser = async () => {
    let response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    this.setState({
      user: response.data,
    });
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    // contoh 1
    // const name = this.state.user.name;
    // const username = this.state.user.username;

    // contoh 2
    // const user = this.state.user;

    // contoh 3
    const { user } = this.state;
    return (
      <div>
        {/* contoh 1
        <h1>my name is {name}</h1>
        <h1>my name is {username}</h1> */}
        {/* contoh 2
        <h1>my name is {user.name}</h1>
        <h1>my name is {user.username}</h1> */}

        {/* contoh 3 */}
        <h1>my name is {user.name}</h1>
        <h1>my name is {user.username}</h1>
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

export default fetchData;
