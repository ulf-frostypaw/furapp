import { Link } from "react-router-dom";
import Navbar from './Navbar/Navbar'
import NavItem from './NavItem/NavItem'
import DropdownMenu from './Dropdown/DropdownMenu'

import { BiBellMinus } from "react-icons/bi";
import { AiOutlinePlusCircle, AiOutlineCaretDown } from "react-icons/ai";
import { TbBrandMessenger } from "react-icons/tb";

const HeaderLogged = () => {
    return(
        <Navbar>
            <NavItem icon={<AiOutlinePlusCircle />} />
            <NavItem icon={<BiBellMinus />} />
            <NavItem icon={<TbBrandMessenger />} />
            <NavItem icon={<AiOutlineCaretDown />}>
                <DropdownMenu />
            </NavItem>
      </Navbar>
    );
}
export default HeaderLogged;

/*<nav>
            <Link to={'/'} >Inicio</Link>
            <Link to={'/map'}>Mapa</Link>
            <Link to={'/users'}>Miembros</Link>
        </nav>*/