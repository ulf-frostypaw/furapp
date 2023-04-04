import Navbar from './Navbar/Navbar'
import NavItem from './NavItem/NavItem'
import DropdownMenu from './Dropdown/DropdownMenu'

import NavbarItem from './NavItem/NavbarItem';

import { AiOutlineCaretDown } from "react-icons/ai";
import { FaUsers, FaMapMarkedAlt } from "react-icons/fa"

const HeaderLogged = () => {
    return(
        <Navbar>
            <NavbarItem NavbarItemLink={'/users'} NavbarItemContent={<FaUsers />} NavbarItemId={'1'} />
            <NavbarItem NavbarItemLink={'/map'} NavbarItemContent={<FaMapMarkedAlt />} NavbarItemId={'2'} />
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