import { MapContainer, TileLayer, useMap,  Marker, Popup } from 'react-leaflet';
import {render} from 'react-dom';
import Container from '@mui/material/Container';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './map.css';
import {Icon}  from "leaflet";
import React, {
  useEffect,
  useState
} from "react";



const position = [47.6944908333, 107.4761083333];

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


        

export function NewMap() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/stonelib/map")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, 
[]
); 

  if (error) {
    return <div > Error: {
      error.message
    } </div> ;
  } else if (!isLoaded) {
    return <div > Loading... </div>;
  } else {

    return (

      <Container  style={{height: '500', width: '600'}} sx={{ margin: 4 }} >        


      <MapContainer center={position} zoom={13} scrollWheelZoom={true} >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {items.map(
            item =>(
              <Marker 
              key = {item.ID}
              position={[item.LAT, item.LON]} >
            <Popup>
              {item.NameToponim} <br /> {item.NamePerson} <br/> Первое упоминание: {item.FirstNotion} <br /> Первые раскопки: {item.YearExcavate}
            </Popup>
          </Marker> 
            )
          )}
          
      </MapContainer>

  </Container>  
     )



}
};