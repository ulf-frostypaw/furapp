import Layout from "../components/Layout"
import Sidebar from "../components/Sidebar"

export default function Notifications(){
    return(
        <Layout titlePage={'Notificaciones'}>
            <div className="container-grid">
                <Sidebar />
                <div className="midle">
                    <h2>Notificaciones</h2>
                </div>
            </div>
        </Layout>
    )
}