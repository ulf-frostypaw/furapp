import React from "react";
import "./DropdownItem.css";

const DropdownItem = (props) => {
  return (
    <>
      <d
        className="menu-item"
        onClick={() => props.goToMenu && props.setActive(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
      </d>
    </>
  );
};

export default DropdownItem;
