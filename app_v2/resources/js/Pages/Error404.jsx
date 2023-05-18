import Layout from "../components/Layout";
import { Link } from "react-router-dom";
export default function Error404(){
    return(
        <Layout titlePage={'Error 404'}>
            <div className="error-404">
                <img src={process.env.REACT_APP_URL + "/error-rafiki.svg"} className="error-404-img" alt="MONSTER" />
                <h4>Parece que la dirección a la que intentas acceder no existe. Intenta otra cosa.</h4>
                <Link to='/'>Volver a Inicio</Link>
            </div>
        </Layout>
    );
}