import Layout from "../components/Layout";
import Card from "../components/Card";
export default function Users() {
    return(
        <Layout titlePage={'Miembros'} LayoutClass=''>
            <h2 className="aling-start h2" id="members">Miembros</h2>
            <div className="users">
                <Card CardClass={'no-margin'} CardContent={'ESTE ES MI CONTENIDO OWO'} />
                <Card CardClass={'no-margin'} CardContent={'ESTE ES MI CONTENIDO OWO'} />
                <Card CardClass={'no-margin'} CardContent={'ESTE ES MI CONTENIDO OWO'} />
                <Card CardClass={'no-margin'} CardContent={'ESTE ES MI CONTENIDO OWO'} />
                <Card CardClass={'no-margin'} CardContent={'ESTE ES MI CONTENIDO OWO'} />
                <Card CardClass={'no-margin'} CardContent={'ESTE ES MI CONTENIDO OWO'} />
                <Card CardClass={'no-margin'} CardContent={'ESTE ES MI CONTENIDO OWO'} />
                <Card CardClass={'no-margin'} CardContent={'ESTE ES MI CONTENIDO OWO'} />
                <Card CardClass={'no-margin'} CardContent={'ESTE ES MI CONTENIDO OWO'} />
            </div>
        </Layout>
    );
}