//import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./navItem.css";

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <d className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </d>
      {open && props.children}
    </li>
  );
};

export default NavItem;
