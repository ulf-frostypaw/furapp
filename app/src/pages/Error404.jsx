import Layout from "../components/Layout";

export default function Error404(){
    return(
        <Layout titlePage={'Error 404'}>
            <h1 className="big-title">Error 404</h1>
            {/* ADD RANDOM IMAGE HERE */}
            <span className="title-description">La dirección a la que intentas acceder puede que ya no esté disponible.</span>
        </Layout>
    );
}