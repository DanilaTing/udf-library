import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import A_DropdownOption from "../../01_atoms/A_DropdownOption/A_DropdownOption.jsx";
import A_SelectInput from "../../01_atoms/A_SelectInput/A_SelectInput.jsx";

import "./M_SelectField.scss";
import "../../../particles/icons.scss";

export default class M_SelectField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      optionsVisible: false,
      currentOption: {
        name: this.props.currentOption ? this.props.currentOption.name : "",
        value: this.props.currentOption ? this.props.currentOption.value : ""
      },
      options: this.props.options
    };

    this.inputRef = React.createRef();

    this.selectOption = this.selectOption.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.filterOptions = this.filterOptions.bind(this);
  }

  static propTypes = {
    options: PropTypes.array
  };

  filterOptions(string) {
    let newOptions = [];
    this.props.options.map((option, i) => {
      if (option.name.includes(string)) {
        newOptions.push(option);
      }
    });

    this.setState({
      options: newOptions
    });
  }

  selectOption(option) {
    this.setState({
      currentOption: {
        name: option.name,
        value: option.value
      }
    });
  }

  handleClick(visible, option) {
    if (visible) {
      this.setState({
        optionsVisible: visible
      });
    } else {
      this.setState({
        optionsVisible: !this.state.optionsVisible
      });
    }
  }

  render() {
    const classes = classNames({
      ["M_SelectField"]: true,
      ["open"]: this.state.optionsVisible
    });
    const caretClasses = classNames({
      ["Q_IconSmall"]: true,
      ["Q_IconCaretDown"]: true,
      ["caret"]: true
    });
    const selectOptionsClasses = classNames({
      ["C_SelectOptions"]: true
    });

    let options = [];
    this.state.options.map((option, i) => {
      let selected = false;
      if (option.value == this.state.currentOption.value) {
        selected = true;
      }
      options.push(
        <A_DropdownOption
          option={option}
          key={i}
          callback={this.selectOption}
          selected={selected}
        />
      );
    });

    return (
      <div datavalue={this.state.currentOption.value} className={classes}>
        <A_SelectInput
          ref={this.inputRef}
          text={this.state.currentOption.name}
          placeholder={this.props.placeholder}
          blurCallback={this.handleClick}
          focusCallback={this.handleClick}
          inputCallback={this.filterOptions}
        />
        <div className={caretClasses} onClick={this.handleClick} />
        <div className={selectOptionsClasses}>{options}</div>
      </div>
    );
  }
}
