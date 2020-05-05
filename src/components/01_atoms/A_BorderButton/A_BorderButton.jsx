import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./A_BorderButton.module.scss";
import iconStyles from "../../../particles/icons.scss";
import classNames from "classnames";

function A_BorderButton(props) {
  const text = props.text ? props.text : "Border Button";

  let iconStyle = classNames({
    [iconStyles.Q_IconSmall]: true,
    [iconStyles[props.icon]]: true
  });

  return (
    <div
      className={classNames({
        [styles.A_BorderButton]: true,
        [styles.disabled]: props.disabled
      })}
    >
      {text}
      {props.icon ? <span className={iconStyle} /> : ""}
    </div>
  );
}

export default A_BorderButton;
