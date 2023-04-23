import Layout from "../components/Layout";
import Card from "../components/Card";
import { Link } from "react-router-dom";
export default function Users() {
    return(
        <Layout titlePage={'Miembros'} LayoutClass=''>
            <h2 className="aling-start h2" id="members">Miembros</h2>
            <div className="users">
                <Card CardClass={''}>
                    <div className="cardUserImage">
                        <img src="https://placehold.co/150.png" className="cardUserBackground" alt="" />
                    </div>
                    <div className="cardUserName">
                        <Link className='username'>Ulf FrostyPaw</Link>
                    </div>
                    <div className="cardUserDescription">
                        <span className="user-description">Este es mi perfil con algunas cosas...</span>
                    </div>
                    <div className="cardUserTags">
                        <Link className="tag small" to='/tag/abdl'>link 1</Link>
                        <Link className="tag small" to='/tag/devs'>link 2</Link>
                        <Link className="tag small" to='/tag/abdl'>link 3</Link>
                        <Link className="tag small" to='/tag/devs'>link 4</Link>
                        <Link className="tag small" to='/tag/abdl'>link 5</Link>
                        <Link className="tag small" to='/tag/devs'>link 6</Link>
                        <Link className="tag small" to='/tag/abdl'>link 5</Link>
                        <Link className="tag small" to='/tag/devs'>link 6</Link>
                    </div>
                    <div className="cardUserButtons">
                        <button className="button success">Seguir</button>
                    </div>
                </Card>

            </div>
        </Layout>
    );
}