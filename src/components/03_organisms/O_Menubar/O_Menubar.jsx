import React, { Component } from "react";
import classNames from "classnames";
import styles from "./O_Menubar.module.scss";

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
            items.push(<A_Logo logoUrl={item.logoUrl} url={item.url} />);
            break;
        }
      });
    } else if (side == "right") {
      console.log(rightSideItems);
      rightSideItems.map((item, i) => {
        switch (item.type) {
          case "avatar":
            items.push(<A_Avatar userName={item.userName} small />);
            break;
          case "button":
            items.push(<A_TextButton text={item.text} url={item.url} />);
            break;
        }
      });
    }

    return items;
  }

  render() {
    return (
      <div className={styles.O_Menubar}>
        <div className={styles.leftSide}>{this.renderItems("left")}</div>
        <div className={styles.rightSide}>{this.renderItems("right")}</div>
      </div>
    );
  }
}
