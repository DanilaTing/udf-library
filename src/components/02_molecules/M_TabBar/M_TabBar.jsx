import React, { Component } from "react";
import PropTypes from "prop-types";
import A_TabItem from "../../01_atoms/A_TabItem/A_TabItem.jsx";
import classNames from "classnames";
import styles from "./M_TabBar.module.scss";

export default class M_TabBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.activeTab,
      tabItems: []
    };

    this.changeTab = this.changeTab.bind(this);
    this.renderTabItems = this.renderTabItems.bind(this);
  }

  static propTypes = {
    tabs: PropTypes.array,
    activeTab: PropTypes.string,
    changeTab: PropTypes.function
  };

  componentDidMount() {
    this.renderTabItems(this.props.activeTab);
  }

  changeTab(tab) {
    console.log("changeTab");
    this.setState({
      activeTab: tab
    });
    this.renderTabItems(tab);
    // if (this.props.changeTab) {
    //   this.props.changeTab(tab);
    // }
  }

  renderTabItems(activeTab) {
    let tabItemsReturn = [];
    this.props.tabs.map((tabItem, i) => {
      tabItemsReturn.push(
        <A_TabItem
          text={tabItem.name}
          changeTab={this.changeTab}
          active={activeTab == tabItem.name ? true : false}
          key={i}
        />
      );
    });
    this.setState({
      tabItems: tabItemsReturn
    });
  }

  render() {
    const classes = classNames({
      [styles.M_TabBar]: true
    });
    return <div className={classes}>{this.state.tabItems}</div>;
  }
}
