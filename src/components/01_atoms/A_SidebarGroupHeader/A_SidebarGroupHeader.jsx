import React, { Component } from "react";
import classNames from "classnames";
import "./A_SidebarGroupHeader.scss";

export default class A_SidebarGroupHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classes = classNames({
      ["A_SidebarGroupHeader"]: true,
      ["open"]: this.props.open,
      [`${this.props.level}`]: true
    });
    let chevronClasses = classNames({
      ["Q_IconSmall"]: true,
      ["Q_IconChevron"]: true
    });
    return (
      <div
        className={classes}
        onClick={() => this.props.callback(this.props.id, this.props.open)}
      >
        <span>{this.props.text}</span> <span className={chevronClasses}></span>
      </div>
    );
  }
}
