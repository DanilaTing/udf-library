import React, { Component } from "react";
import PropTypes from "prop-types";
import "./A_TextArea.scss";
import classNames from "classnames";

export default class A_TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text ? this.props.text : "",
      isFocused: false
    };

    this.inputRef = React.createRef();

    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  focus() {
    this.setState({
      isFocused: true
    });
    const input = this.inputRef.current;
    const valueLength = input.value.length;
    this.setCaretPosition(this.inputRef.current, valueLength, valueLength);
  }

  // Doesnt work yet!
  setCaretPosition(ctrl, start, end) {
    // IE >= 9 and other browsers
    if (ctrl.setSelectionRange) {
      ctrl.focus();
      ctrl.setSelectionRange(start, end);
    }
    // IE < 9
    else if (ctrl.createTextRange) {
      var range = ctrl.createTextRange();
      range.collapse(true);
      range.moveEnd("character", end);
      range.moveStart("character", start);
      range.select();
    }
  }

  blur() {
    const text = this.inputRef.current.value;
    this.setState({
      isFocused: false,
      text: text
    });
  }

  onChange() {
    const text = this.inputRef.current.value;
    this.setState({
      text: text
    });
  }

  render() {
    let classes = classNames({
      ["A_TextArea"]: true,
      ["empty"]: this.state.text == undefined || this.state.text == "",
      ["focused"]: this.state.isFocused
    });

    return (
      <textarea
        className={classes}
        onFocus={this.focus}
        onBlur={this.blur}
        onChange={this.onChange}
        ref={this.inputRef}
        value={this.state.text}
        type="text"
        placeholder={this.props.placeholder}
      />
    );
  }
}
