import React, { Component } from "react";
import classNames from "classnames";
import "./A_SidebarItem.scss";

export default class A_SidebarItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classes = classNames({
      ["A_SidebarItem"]: true,
      ["selected"]: this.props.selected,
      [`${this.props.level}`]: true
    });
    return <div className={classes}>{this.props.text}</div>;
  }
}
