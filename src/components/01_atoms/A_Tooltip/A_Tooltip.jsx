import React, { Component } from "react";
import classNames from "classnames";
import "./A_Tooltip.scss";

export default class A_Tooltip extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const triangleClasses = classNames({
      ["triangle"]: true,
      [`${this.props.position}`]: true
    });
    return (
      <div className={"A_Tooltip"}>
        <div className={triangleClasses} />
        {this.props.text}
      </div>
    );
  }
}
