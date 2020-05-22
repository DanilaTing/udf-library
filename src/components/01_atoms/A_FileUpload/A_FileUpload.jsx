import React, { Component } from "react";
import classNames from "classnames";
import "./A_FileUpload.scss";

export default class A_FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileUploaded: this.props.file ? true : false,
      file: this.props.file,
      placeholder: this.props.placeholder
    };

    this.fileInput = React.createRef();

    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputClick() {
    this.fileInput.current.click();
  }

  handleInputChange() {
    let file = this.fileInput.current.files[0];
    this.setState({
      file: file,
      fileUploaded: true
    });
  }

  render() {
    let classes = classNames({
      ["A_FileUpload"]: true,
      ["uploaded"]: this.state.fileUploaded
    });
    return (
      <div className={classes} onClick={this.handleInputClick}>
        <input
          type="file"
          ref={this.fileInput}
          className={classes}
          onChange={this.handleInputChange}
        />
        {this.state.fileUploaded ? (
          <span>{this.state.file.name}</span>
        ) : (
          <span>{this.state.placeholder}</span>
        )}
      </div>
    );
  }
}
