import React from "react";
import { NavLink } from "react-router-dom";
import "./LinkButton.css";

const LinkButton = ({ children, path }) => {
  return <NavLink to={path} className={({isActive}) => isActive ? "link activeLink" : "link"}>{children}</NavLink>;
};

export default LinkButton;
