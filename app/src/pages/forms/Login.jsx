// TODO: create register page
/*import React, { useState } from "react"
import { app_firebase } from "../../fb";

export default function Login(props) {
    const [exist, setExist] = useState(true)
    const SubmitHandler = (e) => {
        e.preventDefault();
        const email = e.target.formInputEmail.value
        const password = e.target.formInputPassword.value
        //console.log(username, pwd)
        app_firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userFb) => {
                console.log("User created ", userFb)
                props.setUser(userFb)
            });
    }
    return(
        <div className="form-login">
            <div>
                <h1 className="title">{exist ? "Registrate" : "Iniciar sesión"}</h1>
            </div>
            <form onSubmit={SubmitHandler}>
                <label htmlFor="formInputEmail">Nombre de usuario</label>
                    <input type="email" name="username" id="formInputEmail" />
                <label htmlFor="formInputPassword">Contraseña</label>
                    <input type="password" name="pwd" id="formInputPassword" />
                <button type="submit">{exist ? "Crear cuenta" : "Iniciar sesión"}</button>
            </form>
            <button onClick={() => setExist(!exist)}>
                    {exist ? "¿Ya tienes cuenta?" : "Soy nuevo miembro"}
            </button>
        </div>
    );
}
*/

import Layout from "../../components/Layout";

const Login = () => {
    return(
        <Layout titlePage={'Iniciar sesión'}>
            <div className="container-grid">
                <h2>KJSDKJSKDJ</h2>
            </div>
        </Layout>
    );
}

export default Login;