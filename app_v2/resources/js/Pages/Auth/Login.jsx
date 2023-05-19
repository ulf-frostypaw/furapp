import LayoutGuest from "@/Layouts/LayoutGuest"
const Login = ({token = 'testing'}) => {
    return(
        <LayoutGuest>
            <div className="container">
                <div className="card login">
                    <section className="section">
                        <div className="content">
                            <h1>Iniciar sesión</h1>
                            <span>Para iniciar sesión debes hacerlo con nuestro bot de Telegram:</span>
                        </div>
                        <section className="section">
                            {/* TELEGRAM BUTTON */}
                        </section>
                    </section>
                </div>
            </div>
        </LayoutGuest>
    )
}
export default Login