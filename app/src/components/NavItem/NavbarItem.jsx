import { Link } from "react-router-dom";
import { Tooltip } from 'react-tooltip'

const NavbarItem = ({NavbarItemLink, NavbarItemContent, NavbarItemId}) => {
    return(
        <li className="nav-item">
            <Link className="icon-button" to={NavbarItemLink}>
                <a data-tooltip-id={"tooltip-" + NavbarItemId} data-tooltip-content="Hello world!" href="#">
                    {NavbarItemContent}
                </a>
                <Tooltip id={"tooltip-" + NavbarItemId} />
            </Link>
        </li>
    )
}

export default NavbarItem;