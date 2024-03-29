import Layout from "@/Layouts/Layout";
import Sidebar from "@/Components/Sidebar";

export default function MainUserSettings() {
    return(
        <Layout titlePage={'Configuración'}>
            <div className="container-grid">
                <Sidebar />
                <div className="middle">
                    <h2>Configuración</h2>
                </div>
            </div>
        </Layout>
    )
}