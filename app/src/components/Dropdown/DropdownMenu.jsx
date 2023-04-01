import { Link } from "react-router-dom";

import React, { useState } from "react";
import DropdownItem from "./DropdownItem";
import { HiOutlineCog } from "react-icons/hi";
import { AiFillCaretLeft, AiOutlineThunderbolt } from "react-icons/ai";
import {FaUserAlt} from 'react-icons/fa'
import { CSSTransition } from "react-transition-group";
import "./DropdownMenu.css";


const DropdownMenu = ({getUsername = 'username'}) => {
  // state for csstransition *we use this function as a callback in CSSTransition onEnter prop which runs this callback when it is mounted to DOM*/
  const [active, setActive] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    // el.offsetHeight is height in pixels of that component. we use this in dropdown menu style height to set height
    const height = el.offsetHeight;
    console.log(height);
    setMenuHeight(height);
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      {/* There are two dropdown containers for csstransitions component main and secondary. we always go back to main conyainer and we use secondary as name for more container because we can style easy */}
      <CSSTransition
        // if in is true then this CSSTransition component renders
          in={active === "main"}
          unmountOnExit
          timeout={500}
          classNames="menu-primary"
          onEnter={calcHeight}
      >
        {/* CSSTransition component check for next element and adds transitions to that element by adding classNames we specified 
        in this component props to next element and we add css to animate
        */}
        <div className="menu">
          <DropdownItem leftIcon={<FaUserAlt />}> <Link to={'/user/' + getUsername }>Mi perfil</Link></DropdownItem>

          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"settings"}
            setActive={setActive}
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={active === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<AiFillCaretLeft />}
            goToMenu={"main"}
            setActive={setActive}
          />

          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            JavaScript
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Awesome!
          </DropdownItem>
        </div>
      </CSSTransition>

    </div>
  );
};

export default DropdownMenu;
