import React, { Component } from "react";
import { udfComponents, styles } from "udf-library";
let A_Button = udfComponents.A_Button;
// const { A_Button } = udfComponents;

// udfComponents[`${componentName}`];

export default class App extends Component {
  render() {
    return (
      <div>
        <A_Button text="Hello" />
      </div>
    );
  }
}
