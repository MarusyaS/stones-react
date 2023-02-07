import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, useParams } from "react-router-dom";
import {useEffect, useState} from "react";

export function SingleView() {
    return ( 
    <div className = "Basic">
      <BasicTable style={{height: 400}} />
      {/* <Child /> */}
    </div>
    );
  };

  // function createData(name, calories, fat, carbs, protein) {
  //   return { name, calories, fat, carbs, protein };
  // }
  
  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9),
  // ];
  


function BasicTable() {
  const { ID } = useParams();
  // console.log(ID)
  const [items, setItems] = useState();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    let url = `http://127.0.0.1:8000/stonelib/inscription/${ID}/`
    
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          // console.log(items);
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
      // const keys = ['ID', ]
      // const key = 'Name'
      // console.log('==========')
      // console.log(items[Name])
      // console.log(items['Name'])
      // console.log(items[key ])
      
      // console.log(items.Name)

      console.log(items)
      console.log(Object.keys(items))
      const context = {
        'ID' : 'ID',
        'Name' : 'Название',
        'NameVariations': 'Вариации названия',
        'ContextType': 'Контекст',
        'CitDTS' : 'Древнетюркский словарь, 1969',
        'CitVasilev': 'Васильев, 1983',
        'CitBazylhan':'Базылхан, 2010',
        'site_country' :'Страна',
        'site_region' : 'Регион' 
  }
    console.log(context.Name)
  return (

    // <div>
    //   <h3> {items.Name} </h3>
    // </div>
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 450 }} aria-label="simple table">
        <TableBody>
          {Object.keys(context).map((key) => 
          <TableRow>
                <TableCell>{context[key]} </TableCell>
                <TableCell align="right"> {items[key]} </TableCell>                
          </TableRow>            
          )}

        </TableBody>
      </Table>
    </TableContainer>
  );
          };

  
// function Child () {
// //   const routeParams = useParams();
// //     return (
// //       <div>
// //         <h3>ID: {routeParams}</h3>
// //       </div>
// //     );
// // };

// //     // We can use the `useParams` hook here to access
// //     // the dynamic pieces of the URL.
//     const { ID } = useParams();
  
//     return (
//       <div>
//         <h3>ID: {ID}</h3>
//       </div>
//     );
}