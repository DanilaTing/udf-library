import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./A_TextButton.module.scss";
import iconStyles from "../../../particles/icons.scss";

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
      [styles.A_TextButton]: true,
      [styles.disabled]: this.props.disabled
    });

    let iconClasses = classNames({
      [iconStyles.Q_IconMedium]: true,
      [iconStyles[this.props.icon]]: true
    });

    return (
      <p className={classes}>
        {this.props.icon ? <span className={iconClasses}></span> : ""}
        {text}
      </p>
    );
  }
}
