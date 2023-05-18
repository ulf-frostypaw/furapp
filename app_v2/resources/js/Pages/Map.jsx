// ADD API SUPPORT

import MapComponent from '@/Components/MapComponent';
import Layout from '@/Layouts/Layout';
export default function Map(){
    return(
        <Layout titlePage={'Mapa'}>
            <MapComponent heightMap={'calc(100vh - 58px)'} />
        </Layout>
    );

}