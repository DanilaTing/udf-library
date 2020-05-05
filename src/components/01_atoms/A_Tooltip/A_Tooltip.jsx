import React, { Component } from "react";
import classNames from "classnames";
import styles from "./A_Tooltip.module.scss";

export default class A_Tooltip extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const triangleClasses = classNames({
      [styles.triangle]: true,
      [styles[this.props.position]]: true
    });
    return (
      <div className={styles.A_Tooltip}>
        <div className={triangleClasses} />
        {this.props.text}
      </div>
    );
  }
}
