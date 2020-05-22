import React, { Component } from "react";
import classNames from "classnames";
import "./A_ImageUpload.scss";

export default class A_ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUploaded: this.props.image ? true : false,
      image: this.props.image
    };

    this.fileInput = React.createRef();
    this.imgRef = React.createRef();

    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputClick() {
    this.fileInput.current.click();
  }

  handleInputChange() {
    let image = this.fileInput.current.files[0];

    let reader = new FileReader();
    let result = "";
    reader.onload = (function(aImg) {
      return function(e) {
        aImg.src = e.target.result;
      };
    })(this.imgRef.current);
    reader.readAsDataURL(image);

    this.setState({
      imageUploaded: true
    });
  }

  render() {
    let classes = classNames({
      ["A_ImageUpload"]: true,
      ["uploaded"]: this.state.imageUploaded
    });
    return (
      <div className={classes} onClick={this.handleInputClick}>
        <input
          type="file"
          ref={this.fileInput}
          className={classes}
          onChange={this.handleInputChange}
          accept="image/*"
        />
        <img ref={this.imgRef} src={this.state.image} />
        <div className="Q_IconLarge Q_IconImage" />
      </div>
    );
  }
}
