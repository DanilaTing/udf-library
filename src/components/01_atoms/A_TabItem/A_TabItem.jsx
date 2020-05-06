import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./A_TabItem.scss";

export default class A_TabItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classes = classNames({
      ["A_TabItem"]: true,
      ["active"]: this.props.active
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
