import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../styles.css";

export default class A_Checkbox extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    text: PropTypes.string
  };

  render() {
    const text = this.props.text ? this.props.text : "Checkbox";

    return (
      <div className="A_Checkbox">
        <div className="Q_Checkbox"></div>
        {text}
      </div>
    );
  }
}
