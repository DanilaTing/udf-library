import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./A_DropdownOption.scss";

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
      ["A_DropdownOption"]: true,
      ["selected"]: this.props.selected
    });

    return (
      <div
        className={classes}
        datavalue={this.props.option.value}
        onClick={this.props.callback}
      >
        {this.props.option.name}
      </div>
    );
  }
}
