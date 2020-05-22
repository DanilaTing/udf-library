import React, { Component } from "react";
import PropTypes from "prop-types";
import "./A_Button.scss";
import "../../../particles/icons.scss";
import classNames from "classnames";

export default class A_Button extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    text: PropTypes.string,
    disabled: PropTypes.bool
  };

  render() {
    const text = this.props.text ? this.props.text : "Button";
    let classes = classNames({
      ["A_Button"]: true,
      ["disabled"]: this.props.disabled
    });
    let iconStyle = classNames({
      ["Q_IconSmall"]: true,
      [`${this.props.icon}`]: true
    });

    return (
      <div className={classes} onClick={this.props.callback}>
        {text}
        {this.props.icon ? <span className={iconStyle} /> : ""}
      </div>
    );
  }
}
