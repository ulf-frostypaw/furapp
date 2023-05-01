import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";

export default function Gallery(){
    let {username} = useParams()
    return(
        <Layout titlePage={'Galería de: ' + username}>
            <div>{username}</div>
        </Layout>
    );
}