import React, {useEffect, useState} from 'react';
import { Link } from '@inertiajs/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

import MarkerClusterGroup from 'react-leaflet-cluster';

import data from './map.json'

function getIcon(){
    return L.icon({
        //iconUrl: require('../img/icons/marker_small.png'), CHANGE FOR PUBLIC FOLDER 
        //shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        iconSize: [40, 40]
    })
}
{/*icon={getIcon()} */}
const MapComponent = ({heightMap}) => {
    const [puntos, setPuntos] = useState([]);
    const points = () => {
        let arreglo = [];
        data.map(info => {
            arreglo.push(
                <Marker position={[info.latitude, info.longitude]} >
                    <Popup>
                        {info.username}
                        <br />
                        <Link href={'/user/' + info.idsmall}>Ver perfil</Link>
                    </Popup>
                </Marker>
            );
        });
        setPuntos(arreglo);
    }
    useEffect(() => {
        points();
    }, []);

    return (
        <MapContainer center={[19.3911668, -99.4238156]} zoom={5} scrollWheelZoom={true} style={{height: heightMap, zIndex: 0}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup>
                {puntos}
            </MarkerClusterGroup>
        </MapContainer>
    );
}

export default MapComponent;