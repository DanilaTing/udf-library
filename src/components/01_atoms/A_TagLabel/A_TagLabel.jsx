import React, { Component } from "react";
import classNames from "classnames";
import "./A_TagLabel.scss";
import "../../../particles/icons.scss";

export default class A_TagLabel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classes = classNames({
      ["A_TagLabel"]: true,
      ["editable"]: this.props.editable
    });

    const iconClasses = classNames({
      ["Q_IconMedium"]: true,
      ["Q_IconClose"]: true
    });

    return (
      <div className={classes}>
        {this.props.tag}
        {this.props.editable ? (
          <span className={iconClasses} onClick={this.props.callback} />
        ) : (
          ""
        )}
      </div>
    );
  }
}
