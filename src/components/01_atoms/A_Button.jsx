import React, { Component } from "react";
import PropTypes from "prop-types";

export default class A_Button extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    text: PropTypes.string
  };

  render() {
    const text = this.props.text ? this.props.text : "Button";

    return <div className="A_Button">{text}</div>;
  }
}
