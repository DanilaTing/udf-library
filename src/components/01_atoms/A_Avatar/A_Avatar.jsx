import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./A_Avatar.scss";

export default class A_Avatar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classes = classNames({
      ["A_Avatar"]: true,
      ["tiny"]: this.props.tiny,
      ["small"]: this.props.small,
      ["medium"]: this.props.medium,
      ["large"]: this.props.large
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

A_Avatar.propTypes = {
  userName: PropTypes.string
};
