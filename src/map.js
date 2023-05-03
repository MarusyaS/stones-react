import { MapContainer, TileLayer, MapControl, Marker, Popup } from 'react-leaflet';
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

import { Link } from "react-router-dom";

const position = [47.68, 103.90];

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

var greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});


// const Legend = () => (
//   <div className="map-legend-container">
//   <div className="map-legend">
//     <div className="map-legend-item">
//       <div className="map-legend-color" style={{ backgroundColor: 'red' }}></div>
//       <div className="map-legend-label">Marker 1</div>
//       <div className="map-legend-icon">
//         <img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png" alt="Marker Icon" />
//       </div>
//     </div>
//     <div className="map-legend-item">
//       <div className="map-legend-color" style={{ backgroundColor: 'green' }}></div>
//       <div className="map-legend-label">Marker 2</div>
//       <div className="map-legend-icon">
//         <img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png" alt="Marker Icon" />
//       </div>
//     </div>
//   </div>
//   </div>
// );



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


      <MapContainer center={position} zoom={8} scrollWheelZoom={true} >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* <Legend/> */}
          {items.map(
            item =>(
              <Marker 
              key = {item.ID}
              position={[item.LAT, item.LON]}
              icon = {item.Type.startsWith('П') ? greenIcon : redIcon} >
            <Popup>
            <b> {item.NameToponim} </b> <br /> {item.NamePerson} <br/> Первое упоминание: {item.FirstNotion} <br /> Первые раскопки: {item.YearExcavate} <br />
              {item.sites.map(
                elem => (
                  <div>
                   <Link to={`/inscriptions/${elem.ID}`} target="_blank">{elem.Name} </Link> 
                   </div>
                    // <br />  
                )
              )}
            </Popup>
          </Marker> 
            )
          )}

          {/* <Legend /> */}

          
      </MapContainer>

  </Container>  
     )

}
};



