import { useParams, NavLink } from 'react-router-dom';
import Layout from '../../components/Layout'
import userTabLinks from '../../components/userTabLinks'
function User(){
    let {username} = useParams()
    return(
        <Layout titlePage={'Perfil de: ' + username}>
            <userTabLinks />
            <div>{username}</div>
        </Layout>
    );
}
export default User;