import { Link } from 'react-router-dom'
import Layout from "../components/Layout";
import Sidebar from '../components/Sidebar';

export default function Home(){
    return(
        <>
            <Layout titlePage={'Inicio'}>
                <div className="container-grid">
                    <Sidebar />
                    <div className="middle">
                        <form action="" className="create-post">
                            <div className="profile-picture">
                                <img src="https://via.placeholder.com/150" alt="" />
                            </div>
                            <input type="text" name="" placeholder='Escribe...' id="create-post" />
                            <button className="btn btn-primary">Publicar</button>
                        </form>
                    </div>
                    <div className="right">
                    </div>
                </div>
            </Layout>
        </>
    );
}