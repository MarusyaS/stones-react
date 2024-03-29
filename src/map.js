import { MapContainer, TileLayer, MapControl, Marker, Popup } from 'react-leaflet';
import {render} from 'react-dom';
import Container from '@mui/material/Container';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import API_BASE_URL from './config';
import './map.css';
import {Icon}  from "leaflet";
import { orange, cyan } from '@mui/material/colors';
import React, {
  useEffect,
  useState
} from "react";

import { Link } from "react-router-dom";
import LegendControl from "./Legend";
import CircleIcon from '@mui/icons-material/Circle';
import SquareIcon from '@mui/icons-material/Square';
import { Typography,Box, Paper, Grid, TableBody, TableRow, TableCell, TableContainer, Table } from '@mui/material';

const position = [47.68, 103.90];

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

var markerShapes = [ { shape: '<circle cx="10" cy="10" r="5" />', color : '#fc9272' ,
 letter: '<text x="50%" y="50%" text-anchor="middle" fill="white" font-size="100px" font-family="Arial" dy=".3em">П</text>', 
 text: 'Поминальный комплекс' },
        { shape: '<circle cx="10" cy="10" r="5" />', color : '#fc9272' , 
        letter : '<text x="50%" y="50%" text-anchor="middle" fill="white" font-size="100px" font-family="Arial" dy=".3em">Н</text>',
        text: 'Наскальные надписи' }];



// var greenIcon = new L.Icon({
//   iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
//   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41]
// });

// var redIcon = new L.Icon({
//   iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
//   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41]
// });






export function NewMap() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(API_BASE_URL + "map")
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
      <Grid container spacing={2} justifyContent="space-evenly" alignItems="stretch" sx={{ paddingTop: '40px' }} >
      {/* <Grid container spacing={2}  alignItems="stretch" justifyContent="center" sx={{ m: 2 }}> */}
      <Grid item xs={8}>
      {/* <Container  style={{height: '500', width: '600'}} sx={{ margin: 4 }} >         */}
      <Box>
        <Paper elevation={3}> 

      <MapContainer center={position} zoom={8} scrollWheelZoom={true} attributionControl={false}  >
      {/* // attributionControl={false} > */}
          <TileLayer
            url = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
          />
          {items.map(
            item =>(
              <Marker 
              key = {item.ID}
              position={[item.LAT, item.LON]}
              // icon = {item.Type.startsWith('П') ? greenIcon : redIcon}
              icon = {item.Type.startsWith('П') ? L.divIcon({ html: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
              viewBox="0 0 100 100" xml:space="preserve">
              <circle style="fill:#ef6c00;stroke:#fcfcfc;stroke-width:4;stroke-miterlimit:10;"  cx="50" cy="50" r="46"/>
              </svg>` , 
            className: "funerary",
            iconSize: [20, 20],
            iconAnchor: [10, 0]}) : L.divIcon({ html:`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	          viewBox="0 0 100 100" xml:space="preserve">
            <circle style="fill:#006064;stroke:#fcfcfc;stroke-width:4;stroke-miterlimit:10;"  cx="50" cy="50" r="46"/>
            </svg>`, 
              className: "rock",
              iconSize: [20, 20],
              iconAnchor: [10, 0]})} 
          >
            <Popup>
            <b> {item.NameToponim} </b> <br /> {item.NamePerson} <br/> 
            {item.FirstNotion !== '' &&  item.FirstNotion !== null &&(
            <>
                  Первое упоминание: {item.FirstNotion} <br />
                </>
              )}
              {item.YearExcavate !== '' && item.YearExcavate !== null &&(
                <>
                  Год: {item.YearExcavate} <br />
                </>
              )}
              {item.inscriptions.map((elem) => (
                <div>
                  <Link to={`/ep_tur/inscriptions/${elem.ID}`} target="_blank">{elem.Name}</Link>
                </div>
              ))}

            {/* Первое упоминание: {item.FirstNotion} <br /> Первые раскопки: {item.YearExcavate} <br />
              {item.inscriptions.map(
                elem => (
                  <div>
                   <Link to={`/ep_tur/inscriptions/${elem.ID}`} target="_blank">{elem.Name} </Link> 
                   </div>
                    // <br />  
                )
              )} */}
            </Popup>
          </Marker> 
            )
          )}

              
      </MapContainer>
        </Paper> </Box>


      </Grid>

      <Grid item xs={3}>
        <Box>
        <Paper elevation={3}> 

        <TableContainer component={Paper}  >
          <Table aria-label="simple table" >
            <TableBody>
              <TableRow>
                <TableCell align="center" colSpan={3} sx={{fontSize:23}}>
                <Typography sx={{ fontWeight: 'bold' }}> Условные обозначения </Typography>
                </TableCell>
               
              </TableRow>
                  <TableRow>
                    <TableCell> 
                    <CircleIcon sx={{ color: orange[800] }} />
            </TableCell>
              <TableCell> <Typography> Поминальный комплекс </Typography>  </TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell> 
                  <CircleIcon sx={{ color: cyan[900] }} />
            </TableCell>
              <TableCell> <Typography> Наскальные надписи </Typography>  </TableCell>
                </TableRow>

              </TableBody>
              </Table>
              </TableContainer>
        </Paper> 
        </Box>
        </Grid>            

      </Grid>


     )

}
};



// {
//   palette: {
//     primary: {
//       main: '#ffd180',
//     },
//     secondary: {
//       main: '#004d40',
//     },
//   },
// }