import React, { Component } from "react";
import { udfComponents, styles } from "udf-library";
let A_Checkbox = udfComponents.A_Checkbox;

export default class App extends Component {
  render() {
    return (
      <div>
        <A_Checkbox />
      </div>
    );
  }
}
