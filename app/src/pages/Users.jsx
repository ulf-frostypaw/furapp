import Layout from "../components/Layout";
import Card from "../components/Card";
export default function Users() {
    return(
        <Layout titlePage={'Miembros'} LayoutClass=''>
            <h2 className="aling-start h2" id="members">Miembros</h2>
            <div className="users">
                <Card CardClass={'no-margin'}>
                    <img src="https://placehold.co/150.png" alt="" srcset="" />
                </Card>
                <Card CardClass={'no-margin'}>
                    <img src="https://placehold.co/150.png" alt="" srcset="" />
                </Card>
                <Card CardClass={'no-margin'}>
                    <img src="https://placehold.co/150.png" alt="" srcset="" />
                </Card>
                
            </div>
        </Layout>
    );
}