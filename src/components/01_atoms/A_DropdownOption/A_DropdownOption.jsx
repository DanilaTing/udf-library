import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./A_DropdownOption.module.scss";

export default class A_DropdownOption extends Component {
  constructor(props) {
    super(props);
    this.callback = this.callback.bind(this);
  }

  static propTypes = {
    option: PropTypes.object
    // option: name + value
  };

  callback() {
    this.props.callback(this.props.option);
  }

  render() {
    const classes = classNames({
      [styles.A_DropdownOption]: true,
      [styles.selected]: this.props.selected
    });

    return (
      <div
        className={classes}
        datavalue={this.props.option.value}
        onClick={this.callback}
      >
        {this.props.option.name}
      </div>
    );
  }
}
