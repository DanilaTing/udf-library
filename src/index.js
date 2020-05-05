import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

import A_Button from "./components/01_atoms/A_Button/A_Button.jsx";
import A_BorderButton from "./components/01_atoms/A_BorderButton/A_BorderButton.jsx";
import A_Checkbox from "./components/01_atoms/A_Checkbox/A_Checkbox.jsx";
import A_TextButton from "./components/01_atoms/A_TextButton/A_TextButton.jsx";
import A_TextInput from "./components/01_atoms/A_TextInput/A_TextInput.jsx";
import A_TextArea from "./components/01_atoms/A_TextArea/A_TextArea.jsx";
import A_Radio from "./components/01_atoms/A_Radio/A_Radio.jsx";
import A_DropdownOption from "./components/01_atoms/A_DropdownOption/A_DropdownOption.jsx";
import A_TabItem from "./components/01_atoms/A_TabItem/A_TabItem.jsx";
import A_FormFieldLabel from "./components/01_atoms/A_FormFieldLabel/A_FormFieldLabel.jsx";
import A_Avatar from "./components/01_atoms/A_Avatar/A_Avatar.jsx";
import A_TagLabel from "./components/01_atoms/A_TagLabel/A_TagLabel.jsx";
import A_Tooltip from "./components/01_atoms/A_Tooltip/A_Tooltip.jsx";
import A_ImageBlock from "./components/01_atoms/A_ImageBlock/A_ImageBlock.jsx";

import M_TabBar from "./components/02_molecules/M_TabBar/M_TabBar.jsx";
import M_SelectField from "./components/02_molecules/M_SelectField/M_SelectField.jsx";

import O_Menubar from "./components/03_organisms/O_Menubar/O_Menubar.jsx";

const udfComponents = {
  A_Button: A_Button,
  A_BorderButton: A_BorderButton,
  A_Checkbox: A_Checkbox,
  A_TextButton: A_TextButton,
  A_TextInput: A_TextInput,
  A_TextArea: A_TextArea,
  A_Radio: A_Radio,
  A_DropdownOption: A_DropdownOption,
  A_TabItem: A_TabItem,
  A_FormFieldLabel: A_FormFieldLabel,
  A_Avatar: A_Avatar,
  A_TagLabel: A_TagLabel,
  A_Tooltip: A_Tooltip,
  A_ImageBlock: A_ImageBlock,

  M_TabBar: M_TabBar,
  M_SelectField: M_SelectField,

  O_Menubar: O_Menubar
};

export { udfComponents };
