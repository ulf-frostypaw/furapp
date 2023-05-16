import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import {BiUserPlus} from 'react-icons/bi'

export default function Users() {
    return(
        <Layout titlePage={'Miembros'} >
            <div className="container-grid">
                <Sidebar />
                <div className="middle">
                    <h2>Miembros (más nuevos)</h2>
                    <div className="members">
                        <div className="card">
                            <div className="photo"><img src="https://via.placeholder.com/250" alt="" /></div>
                            <h3 className="username">Ulf FrostyPaw</h3>
                            <div className="btn btn-primary"><BiUserPlus size={20} /> Seguir</div>
                        </div>
                        <div className="card">
                            <div className="photo"><img src="https://via.placeholder.com/250" alt="" /></div>
                            <h3 className="username">Ulf FrostyPaw</h3>
                            <div className="btn btn-primary"><BiUserPlus size={20} /> Seguir</div>
                        </div>
                        <div className="card">
                            <div className="photo"><img src="https://via.placeholder.com/250" alt="" /></div>
                            <h3 className="username">Ulf FrostyPaw</h3>
                            <div className="btn btn-primary"><BiUserPlus size={20} /> Seguir</div>
                        </div>
                        <div className="card">
                            <div className="photo"><img src="https://via.placeholder.com/250" alt="" /></div>
                            <h3 className="username">Ulf FrostyPaw</h3>
                            <div className="btn btn-primary"><BiUserPlus size={20} /> Seguir</div>
                        </div>
                        <div className="card">
                            <div className="photo"><img src="https://via.placeholder.com/250" alt="" /></div>
                            <h3 className="username">Ulf FrostyPaw</h3>
                            <div className="btn btn-primary"><BiUserPlus size={20} /> Seguir</div>
                        </div>
                        <div className="card">
                            <div className="photo"><img src="https://via.placeholder.com/250" alt="" /></div>
                            <h3 className="username">Ulf FrostyPaw</h3>
                            <div className="btn btn-primary"><BiUserPlus size={20} /> Seguir</div>
                        </div>
                        <div className="card">
                            <div className="photo"><img src="https://via.placeholder.com/250" alt="" /></div>
                            <h3 className="username">Ulf FrostyPaw</h3>
                            <div className="btn btn-primary"><BiUserPlus size={20} /> Seguir</div>
                        </div>
                        <div className="card">
                            <div className="photo"><img src="https://via.placeholder.com/250" alt="" /></div>
                            <h3 className="username">Ulf FrostyPaw</h3>
                            <div className="btn btn-primary"><BiUserPlus size={20} /> Seguir</div>
                        </div>
                        <div className="card">
                            <div className="photo"><img src="https://via.placeholder.com/250" alt="" /></div>
                            <h3 className="username">Ulf FrostyPaw</h3>
                            <div className="btn btn-primary"><BiUserPlus size={20} /> Seguir</div>
                        </div>
                        <div className="card">
                            <div className="photo"><img src="https://via.placeholder.com/250" alt="" /></div>
                            <h3 className="username">Ulf FrostyPaw</h3>
                            <div className="btn btn-primary"><BiUserPlus size={20} /> Seguir</div>
                        </div>
                        <div className="card">
                            <div className="photo"><img src="https://via.placeholder.com/250" alt="" /></div>
                            <h3 className="username">Ulf FrostyPaw</h3>
                            <div className="btn btn-primary"><BiUserPlus size={20} /> Seguir</div>
                        </div>
                        {/* ADD PAGINATION OR USERS AUTOLOADER */}
                    </div>
                </div>
            </div>
        </Layout>
    );
}