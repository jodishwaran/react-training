import { Component } from "react";
import Fruit from "./Fruit";

class FruitList extends Component {
  constructor() {
    console.log(
      "%c FruitList : Constructor call (constructor)",
      "color: lightPink; font-size: 1rem"
    );

    super();

    this.state = {
      visible: true,
    };
  }

  componentDidMount() {
    console.log(
      "%c FruitList : Mounted (componentDidMount)",
      "color: lightPink; font-size: 1rem"
    );
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
    console.log(
      "%c FruitList : Rendering changes (render)",
      "color: lightPink; font-size: 1rem"
    );

    return (
      <>
        <div className="flex-center">
          <button className="btn" onClick={this.onBtnClick.bind(this)}>
            {this.state.visible ? "Hide" : "Show"} Fruits
          </button>
        </div>

        {this.state.visible ? (
          <ul className="main">{this.props.fruits.map(this.renderFruit)}</ul>
        ) : (
          <p>No fruits available</p>
        )}
      </>
    );
  }

  componentDidUpdate() {
    console.log(
      "%c FruitList : Updated (componentDidUpdate)",
      "color: lightPink; font-size: 1rem"
    );
  }

  componentWillUnmount() {
    console.log(
      "%c FruitList : Unmouting (componentWillUnmount)",
      "color: lightPink; font-size: 1rem"
    );
  }
}

export default FruitList;
