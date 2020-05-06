import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./A_Checkbox.scss";
import "../../../particles/icons.scss";

export default class A_Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked ? true : false
    };

    this.toggleChecked = this.toggleChecked.bind(this);
  }

  static propTypes = {
    text: PropTypes.string
  };

  toggleChecked() {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    const text = this.props.text ? this.props.text : "Checkbox";

    let classes = classNames({
      ["A_Checkbox"]: true,
      ["checked"]: this.state.checked
    });

    let boxClasses = classNames({
      ["Q_Checkbox"]: true,
      ["Q_IconSmall"]: this.state.checked,
      ["Q_IconTick"]: this.state.checked
    });

    return (
      <div className={classes} onClick={this.toggleChecked}>
        <div className={boxClasses}></div>
        {text}
      </div>
    );
  }
}
