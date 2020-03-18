import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

import A_Button from "./components/01_atoms/A_Button.jsx";
import A_TabItem from "./components/01_atoms/A_TabItem.jsx";
import A_Checkbox from "./components/01_atoms/A_Checkbox.jsx";

import M_TabBar from "./components/02_molecules/M_TabBar.jsx";

const udfComponents = {
  A_Button: A_Button,
  A_TabItem: A_TabItem,
  A_Checkbox: A_Checkbox,
  M_TabBar: M_TabBar
};

// export default udfComponents;
export { styles, udfComponents };
