import React, { Component } from "react";
import classNames from "classnames";
import "./O_Menubar.scss";

import A_Logo from "../../01_atoms/A_Logo/A_Logo.jsx";
import A_TextButton from "../../01_atoms/A_TextButton/A_TextButton.jsx";
import A_Avatar from "../../01_atoms/A_Avatar/A_Avatar.jsx";

import M_DropdownButton from "../../02_molecules/M_DropdownButton/M_DropdownButton.jsx";
import M_SearchField from "../../02_molecules/M_SearchField/M_SearchField.jsx";

let components = [
  A_Logo,
  A_TextButton,
  A_Avatar,
  M_DropdownButton,
  M_SearchField
];

export default class O_Menubar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let leftSideItems = this.props.leftSideItems.map((item, i) => {
      switch (item.component) {
        case "A_Logo":
          return <A_Logo {...item.props} />;
          break;
        case "M_SearchField":
          return <M_SearchField {...item.props} />;
          break;
      }
    });

    let rightSideItems = this.props.rightSideItems.map((item, i) => {
      switch (item.component) {
        case "A_TextButton":
          return <A_TextButton {...item.props} />;
          break;
        case "A_Avatar":
          return <A_Avatar {...item.props} />;
          break;
        case "M_DropdownButton":
          return <M_DropdownButton {...item.props} />;
          break;
      }
    });
    console.log(components, leftSideItems);
    return (
      <div className="O_Menubar">
        <div className="leftSide">{leftSideItems}</div>
        <div className="rightSide">{rightSideItems}</div>
      </div>
    );
  }
}
