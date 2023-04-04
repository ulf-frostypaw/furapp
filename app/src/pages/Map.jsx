import './map.css'
import MapComponent from '../components/MapComponent';
import Layout from '../components/Layout';
export default function Map(){
    return(
        <Layout titlePage={'Mapa'}>
            <MapComponent heightMap={'600px'} />
        </Layout>
    );

}