import { MapContainer, TileLayer, useMap,  Marker, Popup } from 'react-leaflet';
import {render} from 'react-dom';
import Container from '@mui/material/Container';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './map.css';
import {Icon}  from "leaflet";



const position = [47.6944908333, 107.4761083333]
        
export function Map() {
    return (
        <Container  style={{height: '500', width: '600'}} sx={{ margin: 4 }} >        


            <MapContainer center={position} zoom={13} scrollWheelZoom={true} >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker> 
            </MapContainer>

        </Container>    
)
};