import { useEffect } from "react";
import L from "leaflet";
import "./Legend.css";
import { useMap } from 'react-leaflet';

// function Legend({ map }) {
//   console.log(map);
//   useEffect(() => {
//     if (map) {
//       const legend = L.control({ position: "bottomright" });

//       legend.onAdd = () => {
//         const div = L.DomUtil.create("div", "info legend");
//         div.innerHTML =
//           "<h4>This is the legend</h4>" +
//           "<b>Lorem ipsum dolor sit amet consectetur adipiscing</b>";
//         return div;
//       };

//       legend.addTo(map);
//     }
//   }, [map]);
//   return null;
// }

// export default Legend;
// import L from 'leaflet';

function LegendControl() {
    const map = useMap();
  
    // Create a new Leaflet control
    const legend = L.control({ position: 'bottomright' });
  
    // Define the onAdd method for the control
    legend.onAdd = function (map) {
        const div = L.DomUtil.create('div', 'legend');
        div.innerHTML += '<h4 class= "legend-name">Условные обозначения</h4>';  
      
    //   div.innerHTML = '<h4>Legend</h4><p>Some text here</p>';
      return div;
    };
  
    // Add the control to the map
    legend.addTo(map);
  
    return null;
  }

export default LegendControl;