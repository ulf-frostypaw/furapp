import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

export default function Bookmarks(){
    return(
        <Layout titlePage={'Guardados'}>
            <div className="container-grid">
                <Sidebar />
                <div className="middle">
                    <h2>Cosas Guardadas</h2>
                </div>
            </div>
        </Layout>
    )
}