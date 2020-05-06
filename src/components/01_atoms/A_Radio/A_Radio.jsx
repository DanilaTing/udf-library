import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./A_Radio.scss";
import "../../../particles/icons.scss";

export default class A_Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected ? true : false
    };

    this.toggleSelected = this.toggleSelected.bind(this);
  }

  static propTypes = {
    text: PropTypes.string
  };

  toggleSelected() {
    this.setState({
      selected: !this.state.selected
    });
  }

  render() {
    const text = this.props.text ? this.props.text : "Radio";

    let classes = classNames({
      ["A_Radio"]: true,
      ["selected"]: this.state.selected
    });

    let radioClasses = classNames({
      ["Q_Radio"]: true
    });

    return (
      <div
        className={classes}
        onClick={this.toggleSelected}
        dataValue={this.props.value}
      >
        <div className={radioClasses}></div>
        {text}
      </div>
    );
  }
}
