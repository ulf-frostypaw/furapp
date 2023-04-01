import Layout from '../../components/Layout'
const User = ({getUsername}) => {
    return(
        <Layout titlePage={'Perfil de Username'}>
            <div>{getUsername}</div>
        </Layout>
    );
}
export default User;