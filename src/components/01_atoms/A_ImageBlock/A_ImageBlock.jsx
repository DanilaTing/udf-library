import React, { Component } from "react";
import classNames from "classnames";
import styles from "./A_ImageBlock.module.scss";

export default class A_ImageBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { url, sizes, proportions } = this.props;
    let style = {
      backgroundImage: `url(${url})`
    };

    if (sizes) {
      style = {
        backgroundImage: `url(${url})`,
        width: sizes.width,
        height: sizes.height
      };
    }

    let classes = classNames({
      [styles.A_ImageBlock]: true,
      [styles[proportions]]: true
    });

    return <div className={classes} style={style} />;
  }
}
