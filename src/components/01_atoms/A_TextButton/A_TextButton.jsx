import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./A_TextButton.scss";
import "../../../particles/icons.scss";

export default class A_TextButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let text = "";
    if (this.props.text) {
      text = this.props.text;
    } else {
      text = "A_TextButton";
    }

    let classes = classNames({
      ["A_TextButton"]: true,
      ["disabled"]: this.props.disabled
    });

    let iconClasses = classNames({
      ["Q_IconMedium"]: true,
      [`${this.props.icon}`]: true
    });

    return (
      <p className={classes} onClick={this.props.callback}>
        {text}
        {this.props.icon ? <span className={iconClasses}></span> : ""}
      </p>
    );
  }
}
