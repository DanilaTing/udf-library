import React, { Component } from "react";
import classNames from "classnames";
import "./A_Logo.scss";

export default class A_Logo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { logoUrl } = this.props;

    let classes = classNames({
      ["A_Logo"]: true
    });

    return (
      <a href={this.props.url} className={classes}>
        <img src={logoUrl} />
      </a>
    );
  }
}
