import { Link } from "react-router-dom";
const HeaderLogged = () => {
    return(
        <nav>
            <Link to={'/'} >Inicio</Link>
            <Link to={'/users'} >Miembros</Link>
        </nav>
    );
}
export default HeaderLogged;