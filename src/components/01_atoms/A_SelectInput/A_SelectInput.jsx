import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./A_SelectInput.module.scss";
import classNames from "classnames";

export default class A_SelectInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      isFocused: false
    };

    this.inputRef = React.createRef();

    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.text != prevProps.text) {
      this.setState({
        text: this.props.text
      });
    } else if (this.props.text == prevProps.text) {
      if (
        this.props.text != prevState.text &&
        this.state.text == prevState.text
      ) {
        this.setState({
          text: this.props.text
        });
      }
    }
  }

  focus() {
    this.setState({
      isFocused: true
    });
    const input = this.inputRef.current;
    const valueLength = input.value.length;
    this.setCaretPosition(this.inputRef.current, valueLength, valueLength);

    if (this.props.focusCallback) {
      this.props.focusCallback(true);
    }
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
    // const text = this.inputRef.current.value;
    console.log("callback from blur A_SelectInput");
    this.setState({
      isFocused: false
    });

    let that = this;
    setTimeout(function() {
      that.props.blurCallback(false);
    }, 100);
  }

  onChange() {
    const text = this.inputRef.current.value;
    this.setState({
      text: text
    });

    if (this.props.inputCallback) {
      this.props.inputCallback(text);
    }
  }

  render() {
    let classes = classNames({
      [styles.A_SelectInput]: true,
      [styles.empty]: this.props.text == undefined || this.props.text == "",
      [styles.focused]: this.state.isFocused
    });

    return (
      <input
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
