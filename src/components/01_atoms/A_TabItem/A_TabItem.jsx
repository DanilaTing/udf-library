import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./A_TabItem.module.scss";

export default class A_TabItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classes = classNames({
      [styles.A_TabItem]: true,
      [styles.active]: this.props.active
    });

    return (
      <div
        className={classes}
        onClick={() => this.props.changeTab(this.props.text)}
      >
        {this.props.text ? this.props.text : "A_TabItem"}
      </div>
    );
  }
}
