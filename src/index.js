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
import A_Logo from "./components/01_atoms/A_Logo/A_Logo.jsx";
import A_SidebarItem from "./components/01_atoms/A_SidebarItem/A_SidebarItem.jsx";
import A_SidebarHeader from "./components/01_atoms/A_SidebarHeader/A_SidebarHeader.jsx";
import A_SidebarGroupHeader from "./components/01_atoms/A_SidebarGroupHeader/A_SidebarGroupHeader.jsx";
import A_FileUpload from "./components/01_atoms/A_FileUpload/A_FileUpload.jsx";
import A_ImageUpload from "./components/01_atoms/A_ImageUpload/A_ImageUpload.jsx";

import M_TabBar from "./components/02_molecules/M_TabBar/M_TabBar.jsx";
import M_SelectField from "./components/02_molecules/M_SelectField/M_SelectField.jsx";
import M_DropdownButton from "./components/02_molecules/M_DropdownButton/M_DropdownButton.jsx";
import M_SearchField from "./components/02_molecules/M_SearchField/M_SearchField.jsx";
import M_ContentCard from "./components/02_molecules/M_ContentCard/M_ContentCard.jsx";

import O_Menubar from "./components/03_organisms/O_Menubar/O_Menubar.jsx";
import O_Sidebar from "./components/03_organisms/O_Sidebar/O_Sidebar.jsx";

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
  A_Logo: A_Logo,
  A_SidebarItem: A_SidebarItem,
  A_SidebarHeader: A_SidebarHeader,
  A_SidebarGroupHeader: A_SidebarGroupHeader,
  A_FileUpload: A_FileUpload,
  A_ImageUpload: A_ImageUpload,

  M_TabBar: M_TabBar,
  M_SelectField: M_SelectField,
  M_DropdownButton: M_DropdownButton,
  M_SearchField: M_SearchField,
  M_ContentCard: M_ContentCard,

  O_Menubar: O_Menubar,
  O_Sidebar: O_Sidebar
};

export { udfComponents };
