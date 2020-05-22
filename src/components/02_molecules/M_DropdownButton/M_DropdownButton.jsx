import React, { Component } from "react";
import classNames from "classnames";
import "./M_DropdownButton.scss";

import A_TextButton from "../../01_atoms/A_TextButton/A_TextButton.jsx";
import A_Button from "../../01_atoms/A_Button/A_Button.jsx";
import A_DropdownOption from "../../01_atoms/A_DropdownOption/A_DropdownOption.jsx";

export default class M_DropdownButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    let classes = classNames({
      ["M_DropdownButton"]: true
    });

    let options = [];
    this.props.options.map((option, i) => {
      options.push(
        <A_DropdownOption option={option} callback={option.callback} />
      );
    });

    let Button;
    if (this.props.buttonType == "text") {
      Button = A_TextButton;
    } else if (this.props.buttonType == "button") {
      Button = A_Button;
    }

    return (
      <div className={classes}>
        <Button
          text={this.props.text}
          icon="Q_IconCaret"
          callback={this.toggleDropdown}
        />
        {this.state.dropdownOpen ? (
          <div className="C_SelectOptions">{options}</div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
