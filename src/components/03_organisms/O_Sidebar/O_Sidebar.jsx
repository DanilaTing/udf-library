import React, { Component } from "react";
import classNames from "classnames";
import "./O_Sidebar.scss";
import A_SidebarHeader from "../../01_atoms/A_SidebarHeader/A_SidebarHeader.jsx";
import A_SidebarGroupHeader from "../../01_atoms/A_SidebarGroupHeader/A_SidebarGroupHeader.jsx";
import A_SidebarItem from "../../01_atoms/A_SidebarItem/A_SidebarItem.jsx";

export default class O_Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemsGroups: this.props.itemsGroups
    };

    this.renderGroupItems = this.renderGroupItems.bind(this);
    this.handleGroupHeaderClick = this.handleGroupHeaderClick.bind(this);
  }

  handleGroupHeaderClick(id, isOpen) {
    let newItemsGroups = this.state.itemsGroups;
    newItemsGroups.map(group => {
      group.items.map(item => {
        if (item.type == "group") {
          if (item.id == id) {
            item.open = !isOpen;
          } else {
            item.open = false;
          }
        }
      });
    });

    this.setState({
      itemsGroups: newItemsGroups
    });
  }

  renderGroupItems(items) {
    let groupItems = items.map((item, i) => {
      if (item.type == "item") {
        return <A_SidebarItem {...item} key={i} />;
      } else if (item.type == "group") {
        let groupClasses = classNames({
          ["W_AccordionItemsGroup"]: true,
          ["open"]: item.open
        });
        return (
          <div className={groupClasses} key={i}>
            <A_SidebarGroupHeader
              {...item}
              level="level1"
              callback={this.handleGroupHeaderClick}
            />
            <div className="C_AccordionItems">
              {this.renderGroupItems(item.items)}
            </div>
          </div>
        );
      }
    });

    return groupItems;
  }

  render() {
    let groups = this.state.itemsGroups.map((group, i) => (
      <div key={i} className="W_ItemsGroup">
        {this.renderGroupItems(group.items)}
      </div>
    ));

    return (
      <div className="O_Sidebar">
        {this.props.header ? <A_SidebarHeader {...this.props.header} /> : ""}
        {groups}
      </div>
    );
  }
}
