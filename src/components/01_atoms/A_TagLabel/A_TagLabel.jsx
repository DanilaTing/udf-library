import React, { Component } from "react";
import classNames from "classnames";
import styles from "./A_TagLabel.module.scss";
import iconStyles from "../../../particles/icons.scss";

export default class A_TagLabel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classes = classNames({
      [styles.A_TagLabel]: true,
      [styles.editable]: this.props.editable
    });

    const iconClasses = classNames({
      [iconStyles.Q_IconMedium]: true,
      [iconStyles.Q_IconClose]: true
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
