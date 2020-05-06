import React, { Component } from "react";
import PropTypes from "prop-types";
import "./A_BorderButton.scss";
import "../../../particles/icons.scss";
import classNames from "classnames";

function A_BorderButton(props) {
  const text = props.text ? props.text : "Border Button";

  let iconStyle = classNames({
    ["Q_IconSmall"]: true,
    [`${props.icon}`]: true
  });

  return (
    <div
      className={classNames({
        ["A_BorderButton"]: true,
        ["disabled"]: props.disabled
      })}
    >
      {text}
      {props.icon ? <span className={iconStyle} /> : ""}
    </div>
  );
}

export default A_BorderButton;
