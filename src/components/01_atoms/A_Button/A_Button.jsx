import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./A_Button.module.scss";
import iconStyles from "../../../particles/icons.scss";
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
    let iconStyle = classNames({
      [iconStyles.Q_IconSmall]: true,
      [iconStyles[this.props.icon]]: true
    });

    return (
      <div
        className={classNames({
          [styles.A_Button]: true,
          [styles.disabled]: this.props.disabled
        })}
      >
        {text}
        {this.props.icon ? <span className={iconStyle} /> : ""}
      </div>
    );
  }
}
