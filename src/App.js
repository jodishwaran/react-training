import React from "react";
import FruitList from "./components/FruitList";
import Header from "./components/Header";
import Input from "./components/Input";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fruits: [
        {
          name: "mano",
          price: 10,
          img:
            "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        },
        {
          name: "apple",
          price: 100,
          img:
            "https://images.unsplash.com/photo-1582655299221-2b6bff351df0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        },
        {
          name: "grapes",
          price: 48,
          img:
            "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z3JhcGVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
        },
        {
          name: "berries",
          price: 200,
          img:
            "https://images.unsplash.com/photo-1516659828014-fb21a5bd8ca3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVycmllc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
        },
      ],
      searchInput: null,
    };
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
    this.setState({
      fruits: [
        {
          name: "mano",
          price: 10,
          img:
            "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        },
        {
          name: "apple",
          price: 100,
          img:
            "https://images.unsplash.com/photo-1582655299221-2b6bff351df0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        },
        {
          name: "grapes",
          price: 48,
          img:
            "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z3JhcGVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
        },
        {
          name: "berries",
          price: 200,
          img:
            "https://images.unsplash.com/photo-1516659828014-fb21a5bd8ca3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVycmllc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
        },
      ],
    });
  }

  render() {
    console.log(
      "%c App : Rendering changes (render)",
      "color: lightPink; font-size: 1rem"
    );

    const filteredFruits = !this.state.searchInput
      ? this.state.fruits
      : this.state.fruits.filter((fruit) => {
          return (
            fruit.name.toLowerCase() === this.state.searchInput.toLowerCase()
          );
        });

    return (
      <div>
        <Header count={this.state.fruits.length} />
        <div className="flex-center">
          <Input name="search" onFruitSearch={this.onFruitSearch.bind(this)} />
        </div>
        <FruitList
          fruits={filteredFruits}
          onFruitDelete={this.onFruitDelete.bind(this)}
          onFruitReset={this.onFruitReset.bind(this)}
        />
      </div>
    );
  }
}

export default App;
