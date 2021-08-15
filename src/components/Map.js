import { MapContainer, TileLayer, Marker} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {Location} from './Location';
import { useEffect, useState } from 'react';
import ChangeView from './ChangeView';

function Map(props){

    const [state, setState] = useState({
        location: {lat:34.04915, lng:-118.09462},
        positionLocation: {lat:34.04915, lng:-118.09462},
        zoom:4
    });

    useEffect(()=>{
        if(props.locationMap.lat && props.locationMap.lng){
            setState({
                location:props.locationMap,
                positionLocation:props.locationMap,
                zoom:13
            });
        }
    },[props]);

    return(
        <MapContainer className="leaflet" center={state.location} zoom={state.zoom} scrollWheelZoom={true} >
            <ChangeView center={state.location} zoom={state.zoom}/>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={state.positionLocation} icon={Location}/>
        </MapContainer>
    )
}

export default Map;