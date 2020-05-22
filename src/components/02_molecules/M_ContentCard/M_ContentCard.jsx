import React, { Component } from "react";
import classNames from "classnames";
import "./M_ContentCard.scss";

import A_Button from "../../01_atoms/A_Button/A_Button.jsx";
import A_ImageBlock from "../../01_atoms/A_ImageBlock/A_ImageBlock.jsx";

export default class M_ContentCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classes = classNames({
      ["M_ContentCard"]: true
    });

    let Button = "";
    if (this.props.button && this.props.button.component == "A_Button") {
      Button = A_Button;
    }
    return (
      <div className={classes}>
        {this.props.image ? <A_ImageBlock {...this.props.image} /> : ""}
        <div className="W_CardTextContent">
          {this.props.heading ? <h3>{this.props.heading}</h3> : ""}
          {this.props.text ? <p>{this.props.text}</p> : ""}
          {this.props.button ? <Button {...this.props.button.props} /> : ""}
        </div>
      </div>
    );
  }
}
