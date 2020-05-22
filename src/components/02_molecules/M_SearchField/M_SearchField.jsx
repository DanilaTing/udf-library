import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import A_DropdownOption from "../../01_atoms/A_DropdownOption/A_DropdownOption.jsx";
import A_SelectInput from "../../01_atoms/A_SelectInput/A_SelectInput.jsx";

import "./M_SearchField.scss";
import "../../../particles/icons.scss";

export default class M_SearchField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      optionsVisible: false,
      currentOption: {
        name: this.props.currentOption ? this.props.currentOption.name : "",
        value: this.props.currentOption ? this.props.currentOption.value : ""
      },
      options: this.props.options
    };

    this.inputRef = React.createRef();

    this.selectOption = this.selectOption.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.filterOptions = this.filterOptions.bind(this);
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
    this.inputCallback = this.inputCallback.bind(this);
  }

  static propTypes = {
    options: PropTypes.array
  };

  inputCallback(string) {
    this.filterOptions(string);
    this.setState({
      text: string
    });
    if (string == "") {
      this.setState({
        optionsVisible: false
      });
    } else {
      this.setState({
        optionsVisible: true
      });
    }
  }

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

  handleSearchClick() {
    let value = this.inputRef.current.state.text;
    this.props.searchCallback(value);
  }

  handleInputFocus() {
    if (this.state.text != "") {
      this.setState({
        optionsVisible: true
      });
    }
  }

  handleInputBlur() {
    this.setState({
      optionsVisible: false
    });
  }

  render() {
    const classes = classNames({
      ["M_SearchField"]: true,
      ["open"]: this.state.optionsVisible && this.state.options.length > 0,
      ["optionSelected"]: this.state.currentOption.name ? true : false
    });
    const iconClasses = classNames({
      ["Q_IconMedium"]: true,
      ["Q_IconSearch"]: true
    });
    const selectOptionsClasses = classNames({
      ["C_SelectOptions"]: true
    });

    let options = [];
    this.state.options.map((option, i) => {
      options.push(
        <A_DropdownOption
          option={option}
          key={i}
          callback={this.selectOption}
        />
      );
    });

    return (
      <div className={classes}>
        <A_SelectInput
          ref={this.inputRef}
          text={this.state.text}
          placeholder={this.props.placeholder}
          focusCallback={this.handleInputFocus}
          blurCallback={this.handleInputBlur}
          inputCallback={this.inputCallback}
        />
        <div className={iconClasses} onClick={this.handleSearchClick} />
        <div className={selectOptionsClasses}>{options}</div>
      </div>
    );
  }
}
