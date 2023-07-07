import Layout from "@/Layouts/Layout";
import Sidebar from "@/Components/Sidebarbar";

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