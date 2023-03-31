/// HEADER SIN INICIAR SESIÓN

import { Link } from "react-router-dom";
const HeaderNotLogged = () => {
    return(
        <nav>
            <Link to={'/register'} >Crear una cuenta</Link>
            <Link to={'/login'} >iniciar sesión</Link>
        </nav>
    );
}
export default HeaderNotLogged;