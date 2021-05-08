import React from "react";
import FruitList from "./components/FruitList";
import Header from "./components/Header";
import Input from "./components/Input";
import { AuthContext } from "./context";

const getFruits = async (search) => {
  // fetch("http://localhost:8000/fruits")
  //   .then((res) => res.json())
  //   .then((res) => {
  //     this.setState({ fruits: res.fruits });
  //   });

  let url = "http://localhost:8000/fruits?";
  if (search) {
    url = `${url}search=${search}`;
  }
  const res = await fetch(url);
  return await res.json();
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fruits: [],
      searchInput: null,
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    getFruits().then((res) => {
      this.setState({ fruits: res.fruits });
    });
  }

  componentDidUpdate(prevProp, prevState) {
    console.log(
      "%c App.js : Updated (componentDidUpdate)",
      "color: lightPink; font-size: 1rem"
    );
    if (
      this.state.searchInput &&
      prevState.searchInput !== this.state.searchInput
    ) {
      getFruits(this.state.searchInput).then((res) => {
        this.setState({ fruits: res.fruits });
      });
    }
  }

  login() {
    this.setState({ isLoggedIn: true });
  }

  logout() {
    this.setState({ isLoggedIn: false });
  }

  onFruitDelete(fruitName) {
    const deletedFruits = this.state.fruits.filter((fruit) => {
      return fruit.name !== fruitName;
    });

    this.setState({ fruits: deletedFruits });
  }

  onFruitSearch(fruitName) {
    this.setState({ searchInput: fruitName });
  }

  onFruitReset() {
    getFruits().then((res) => {
      this.setState({ fruits: res.fruits, searchInput: "" });
    });
  }

  render() {
    console.log(
      "%c App : Rendering changes (render)",
      "color: lightPink; font-size: 1rem"
    );

    // const filteredFruits = !this.state.searchInput
    //   ? this.state.fruits
    //   : this.state.fruits.filter((fruit) => {
    //       return (
    //         fruit.name.toLowerCase() === this.state.searchInput.toLowerCase()
    //       );
    //     });

    return (
      <div>
        <AuthContext.Provider
          value={{
            isLoggedIn: this.state.isLoggedIn,
            logout: this.logout.bind(this),
            login: this.login.bind(this),
          }}
        >
          <Header
            count={this.state.fruits.length}
            // isLoggedIn={this.state.isLoggedIn}
            // logout={this.logout.bind(this)}
          />
          <div className="flex-center">
            <Input
              name="search"
              onFruitSearch={this.onFruitSearch.bind(this)}
            />
          </div>
          <FruitList
            fruits={this.state.fruits}
            onFruitDelete={this.onFruitDelete.bind(this)}
            onFruitReset={this.onFruitReset.bind(this)}
            // login={this.login.bind(this)}
            // isLoggedIn={this.state.isLoggedIn}
          />
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
