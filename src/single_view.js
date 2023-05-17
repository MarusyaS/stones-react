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
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export function SingleView() {
    return ( 
    <div className = "Basic">
      <DataFetch> </DataFetch>
    </div>
    );
  };

function ImageView({ items }) {
  console.log('images' + items);
  if (items !== undefined){
    console.log('images' + items.images);

    if (items.images.length === 0) {
      return <div>No images</div>;
    }
  }
  
    return (
      <Grid container spacing={2}>
        {items.images.map((image) => {
          let image_id = image.ID;
         
          let low_image_path = `https://www.rssdabase.su/RSSDA/imagery/ve/300px/${image_id}.png`;
          let high_image_path = `https://www.rssdabase.su/RSSDA/imagery/ve/1000px/${image_id}.png`;
  
          return (
            <Grid item xs={4} key={image_id}>
              <img src={low_image_path} alt={`Image ${image_id}`} />
            </Grid>
          )
        })}
      </Grid>
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

  <Grid container spacing={2}  alignItems="stretch" justifyContent="center" sx={{ m: 2 }}>
      <Grid item xs={6}>

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
    <Grid item xs={6}>
      {model_id ? (
         <> 
      <iframe src = {model_path} name="model" width="100%" height="90%" />
      <Button variant="outlined" fullWidth = 'true' href={model_path} >Полноэкранный режим</Button>
      </>   
      ) : 
      <div> No model</div>
      } 
    </Grid>

    <ImageView items={items}/>
    
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

