import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  constructor() {
    super();
    this.state = {
      value: "madhyr",
    };
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  onInputChange(event) {
    const value = this.inputElementRef.current.value;
    this.props.onFruitSearch(value);
  }

  render() {
    return (
      <input
        className="input"
        type="text"
        name={this.props.name}
        placeholder="Search fruits here"
        onChange={this.onInputChange.bind(this)}
        // Refs

        //old way
        // ref={(ref) => {
        //   this.inputElementRef = ref;
        // }}

        //new way
        ref={this.inputElementRef}
      />
    );
  }

  //   render() {
  //     return (
  //       Controlled Component
  //         <input
  //           className="input"
  //           type="text"
  //           name={this.props.name}
  //           placeholder="Search fruits here"
  //           value={this.state.value}
  //           onChange={this.onInputChange.bind(this)}
  //         />

  //       Uncontrolled Component
  //     )
  //   }
}

export default Input;
