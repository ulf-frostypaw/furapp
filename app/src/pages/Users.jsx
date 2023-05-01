import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
export default function Users() {
    return(
        <Layout titlePage={'Miembros'} >
            <div className="container-grid">
                <Sidebar />
                <div className="middle">
                    <h2>Miembros (más nuevos)</h2>
                </div>
            </div>
        </Layout>
    );
}