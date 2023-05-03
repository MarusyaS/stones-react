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
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

export function SingleView() {
    return ( 
    <div className = "Basic">
      <BasicTable style={{height: 400}} />
      {/* <Child /> */}
    </div>
    );
  };



function BasicTable() {
  const { ID } = useParams();
  // console.log(ID)
  const [items, setItems] = useState();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  // const image_path = `/mnt/c/Users/marus/Documents/DH/ep_tur/files/images/${ID}.jpg/`;
  // const img_path = path.format({
  //   root: '/ignored',
  //   dir: '/mnt/c/users/marus/Documents/DH/ep_tur/files/images/${items.ID}.jpg',
  //   base: '${items.ID}[A-Z].jpg',
  // });
  // console.log(image_path + '1-3-1.png')
  // const model_path = ''

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
    <Grid container spacing={2} justifyContent="center" sx={{ m: 2 }}>
      <Grid item xs={4}>

        <TableContainer component={Paper}  >
          <Table aria-label="simple table" >
            <TableBody>
              <TableRow>
                <TableCell align="center" colSpan={3} sx={{fontSize:23}}>
                {items.Name}
                </TableCell>
               
              </TableRow>
                {Object.keys(context).map((key) => 
              <TableRow>
                <TableCell>{context[key]} </TableCell>
                <TableCell align="right"> {items[key]} </TableCell>                
              </TableRow>            
          )}

        </TableBody>
      </Table>
    </TableContainer>

    </Grid>

    <Grid item>
      {/* <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      /> */}
      <Paper variant="outlined">
        {/* <img src = {image_path + '1-3-1.png'} /> */}
      </Paper>

    </Grid>





    </Grid>

  );
          };
}