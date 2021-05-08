import { Component } from "react";
import { AuthContext } from "../context/authContext";
import Fruit from "./Fruit";
import { withUser } from "../context/userContext";

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

  static contextType = AuthContext;

  componentDidMount() {
    console.log(
      `%c FruitList : Mounted (componentDidMount) : User Logged In Status - ${this.context.isLoggedIn}`,
      "color: lightPink; font-size: 1rem"
    );

    console.log(
      "%c FruitList : Mounted (componentDidMount)",
      "color: lightPink; font-size: 1rem"
    );
  }

  renderFruit(fruit, index) {
    return (
      <li key={index}>
        <Fruit
          name={fruit.name}
          price={fruit.price}
          img={fruit.img}
          onFruitDelete={this.props.onFruitDelete}
          // isLoggedIn={this.props.isLoggedIn}
          // login={this.props.login}
        />
      </li>
    );
  }

  onBtnClick(event) {
    this.setState({
      visible: !this.state.visible,
    });
  }

  onResetClick() {
    this.props.onFruitReset();
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
          <button className="btn" onClick={this.onResetClick.bind(this)}>
            Reset Fruits
          </button>

          {/* Access user context data as a prop shown below */}
          <h1>This is {this.props.user}, from User Context</h1>
        </div>

        {!this.state.visible ? (
          <p>No fruits available</p>
        ) : this.props.fruits.length ? (
          <ul className="main">
            {this.props.fruits.map(this.renderFruit.bind(this))}
          </ul>
        ) : (
          <p>No fruits Available, you deleted all!!</p>
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

export default withUser(FruitList);
