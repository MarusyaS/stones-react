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
import { Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import {ModelMetadata} from './model_metadata';
import { ImageGallery } from './image_gallery';

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


export function SingleView() {
    return ( 
    <div className = "Basic">
      <DataFetch> </DataFetch>
    </div>
    );
  };

  


    


function BasicTable({ items }) {
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
};

let model_id = (items.models[0]) ? items.models[0].ID.toLowerCase() : 0; 
let model_path = (model_id !== 0) ? `https://rssda.su/auxil/${model_id}.html` : 0; 

  return(

  <Grid container spacing={3} rowSpacing={5} alignItems="stretch" justifyContent="space-evenly" sx={{ m: 2 }}>
      <Grid item xs={5}>

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
    <Grid item xs={7}>
      {model_id ? (
         <> 
      <iframe src = {model_path} name="model" width="100%" height="100%" />
      <Button variant="outlined" fullWidth = {true} href={model_path} >Полноэкранный режим</Button>
      <ModelMetadata items={items}/>
      </>   
      ) : 
      <div> No model</div>
      } 
    </Grid>

      <Grid container xs={7}> 
      <Grid item>
    {/* <ImageView items={items}/> */}
    <ImageGallery items={items}/>
    </Grid>
    </Grid>
    
     </Grid>  
        
        

      );
};

function DataFetch() {
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
          console.log(items);
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
      

  return (
    // <>
    // <div style={{ display: 'flex', flexDirection: 'row' }}>
      <BasicTable items={items} />
      // <ModelViewer items={items} />
      // </div>
      // </>



  );
          };
};

