import { Component } from "react";
import Fruit from "./Fruit";

class FruitList extends Component {
  constructor() {
    super();
    this.fruits = [
      {
        name: "mano",
        description: "This is mango...",
        price: 10,
        img:
          "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "apple",
        price: 100,
        description: "This is apple...",
        img:
          "https://images.unsplash.com/photo-1582655299221-2b6bff351df0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "grapes",
        price: 48,
        description: "This is grapes...",
        img:
          "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z3JhcGVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
      },
      {
        name: "berries",
        price: 200,
        description: "yummy yummy berries...",
        img:
          "https://images.unsplash.com/photo-1516659828014-fb21a5bd8ca3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVycmllc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
      },
    ];
    this.state = {
      visible: false,
    };
  }

  renderFruit(fruit) {
    return (
      <li>
        <Fruit
          name={fruit.name}
          price={fruit.price}
          description={fruit.description}
          img={fruit.img}
        />
      </li>
    );
  }

  onBtnClick(event) {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (
      <>
        <div className="flex-center">
          <button className="btn" onClick={this.onBtnClick.bind(this)}>
            {this.state.visible ? "Hide" : "Show"} Fruits
          </button>
        </div>
        {this.state.visible ? (
          <ul className="main">{this.fruits.map(this.renderFruit)}</ul>
        ) : (
          <p>No fruits available</p>
        )}
      </>
    );
  }
}

export default FruitList;
