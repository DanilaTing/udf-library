import React, { Component } from "react";
import classNames from "classnames";
import styles from "./A_Avatar.module.scss";

export default class A_Avatar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classes = classNames({
      [styles.A_Avatar]: true,
      [styles.tiny]: this.props.tiny,
      [styles.small]: this.props.small,
      [styles.medium]: this.props.medium,
      [styles.large]: this.props.large
    });

    if (this.props.avatarUrl) {
      const style = {
        backgroundImage: `url(${this.props.avatarUrl})`
      };

      return <div style={style} className={classes}></div>;
    } else {
      let shortName;
      if (this.props.tiny) {
        shortName = this.props.userName.substring(0, 1);
      } else {
        shortName = this.props.userName.substring(0, 2);
      }
      return (
        <div className={classes}>
          <p>{shortName}</p>
        </div>
      );
    }
  }
}
