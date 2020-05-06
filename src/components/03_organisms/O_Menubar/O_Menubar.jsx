import React, { Component } from "react";
import classNames from "classnames";
import "./O_Menubar.scss";

import A_Logo from "../../01_atoms/A_Logo/A_Logo.jsx";
import A_TextButton from "../../01_atoms/A_TextButton/A_TextButton.jsx";
import A_Avatar from "../../01_atoms/A_Avatar/A_Avatar.jsx";

export default class O_Menubar extends Component {
  constructor(props) {
    super(props);
  }

  renderItems(side) {
    console.log("renderItems", side);
    let { leftSideItems, rightSideItems } = this.props;
    let items = [];
    if (side == "left") {
      console.log(leftSideItems);
      leftSideItems.map((item, i) => {
        switch (item.type) {
          case "logo":
            items.push(
              <A_Logo logoUrl={item.logoUrl} url={item.url} key={i} />
            );
            break;
        }
      });
    } else if (side == "right") {
      console.log(rightSideItems);
      rightSideItems.map((item, i) => {
        switch (item.type) {
          case "avatar":
            items.push(<A_Avatar userName={item.userName} small key={i} />);
            break;
          case "button":
            items.push(
              <A_TextButton text={item.text} url={item.url} key={i} />
            );
            break;
        }
      });
    }

    return items;
  }

  render() {
    return (
      <div className="O_Menubar">
        <div className="leftSide">{this.renderItems("left")}</div>
        <div className="rightSide">{this.renderItems("right")}</div>
      </div>
    );
  }
}
