import React from "react";
import PropTypes from "prop-types";
import A_TabItem from "../01_atoms/A_TabItem.jsx";

class M_TabBar extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    tabs: PropTypes.array,
    activeTab: PropTypes.string,
    changeTab: PropTypes.function
  };

  renderTabItems() {
    let tabItemsReturn = [];
    this.props.tabs.map((tabItem, i) => {
      tabItemsReturn.push(
        <A_TabItem
          text={tabItem.name}
          changeTab={this.props.changeTab}
          active={this.props.activeTab == tabItem.name ? true : false}
          key={i}
        />
      );
    });
    return tabItemsReturn;
  }

  render() {
    return <div className="M_TabBar">{this.renderTabItems()}</div>;
  }
}

export default M_TabBar;
