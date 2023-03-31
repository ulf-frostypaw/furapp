import { Link } from "react-router-dom";
import Button from "./Button"

const Cookies = () => {
    return(
        <div className="Cookies-bar">
            <span>Empleamos el uso de cookies para ofrecerte una mejor experiencia. <Link to={'#'}>Saber más.</Link></span>
            <Button buttonValue={'OK'} buttonClass={'primary'} buttonContent={'Acepto'} buttonName={'cookiesOk'} />
        </div>
    );
}

export default Cookies;