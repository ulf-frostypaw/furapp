import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

export default function Blog(){
    return(
        <Layout titlePage={'Blog'}>
            <div className="Blog">
                <h1><Link to='/login'>H1 HEADER</Link></h1>
                <span>Lorem ipsum dolor sit amet, <Link to={'/link'}>LINK OWO-</Link> consectetur adipisicing elit. Esse tenetur alias eveniet delectus minima in error, laboriosam debitis laborum, quisquam quibusdam expedita fugit rerum est ipsa obcaecati temporibus cum accusamus.</span>
                <h2>H2 TITLE</h2>
                <h3>H3 TITLE</h3>
                <h4>H4 TITLE</h4>
                <h5>H5 TITLE</h5>
                <h6>H6 title</h6>
            </div>
        </Layout>
    )
}