import React from "react";
import PropTypes from "prop-types";

class A_TabItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classes = "";
    classes += "A_TabItem";
    if (this.props.active) {
      classes += " active";
    }
    return (
      <div
        className={classes}
        onClick={() => this.props.changeTab(this.props.text)}
      >
        {this.props.text ? this.props.text : "A_TabItem"}
      </div>
    );
  }
}

export default A_TabItem;
