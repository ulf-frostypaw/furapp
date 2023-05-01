import { useParams, NavLink } from 'react-router-dom';
import Layout from '../../components/Layout'
function User(){
    let {username} = useParams()
    return(
        <Layout titlePage={'Perfil de: ' + username}>
            <div>{username}</div>
        </Layout>
    );
}
export default User;