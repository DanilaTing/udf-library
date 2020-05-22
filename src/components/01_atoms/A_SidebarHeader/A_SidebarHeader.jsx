import React, { Component } from "react";
import classNames from "classnames";
import "./A_SidebarHeader.scss";

export default class A_SidebarHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classes = classNames({
      ["A_SidebarHeader"]: true
    });
    return <div className={classes}>{this.props.text}</div>;
  }
}
