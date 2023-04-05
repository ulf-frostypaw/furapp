// ADD API SUPPORT

import MapComponent from '../components/MapComponent';
import Layout from '../components/Layout';
export default function Map(){
    return(
        <Layout titlePage={'Mapa'}>
            <MapComponent heightMap={'calc(100vh - 58px)'} />
        </Layout>
    );

}