import Layout from "../components/Layout";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
export default function Users() {
    return(
        <Layout titlePage={'Miembros'} >
            <div className="container-grid">
                <Sidebar />
                <h2 className="aling-start h2" id="members">Miembros</h2>
            </div>
        </Layout>
    );
}