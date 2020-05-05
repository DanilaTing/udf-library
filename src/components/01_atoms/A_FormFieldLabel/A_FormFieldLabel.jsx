import React, { Component } from "react";
import classNames from "classnames";
import styles from "./A_FormFieldLabel.module.scss";

export default class A_FormFieldLabel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classes = classNames({
      [styles.A_FormFieldLabel]: true
    });

    return <div className={classes}>{this.props.text}</div>;
  }
}
