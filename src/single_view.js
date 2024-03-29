import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import {ModelMetadata} from './model_metadata';
import {MultipleModelMetadata} from './multiple_model_metadata';
import {MultipleModelView} from './multiple_models_view';
import { ImageGallery } from './image_gallery';
import API_BASE_URL from './config';
import { cyan } from '@mui/material/colors';

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
    'ContextType': 'Тип памятника',
    'site_country' :'Страна',
    'site_region' : 'Регион',
    'CitDTS' : 'Боровкова Т. А. и др. Древнетюркский словарь. – 1969.',
    'CitVasilev': 'Васильев Д.Д. Графический фонд памятников тюркской рунической письменности азиатского ареала. – 1983.',
    'CitBazylhan':'Базылхан Н. Древнетюркские письменные памятники в Монголии: Проблемы научной каталогизации и музеификации – 2010.',
    'BitigKz' : 'О памятнике в фонде TÜRIK BITIG'
     
};

let model_id = (items.models[0]) ? items.models[0].ID.toLowerCase() : 0; 
let model_path = (model_id !== 0) ? `https://rssda.su/auxil/${model_id}.html` : 0;

  return(

  <Grid container spacing={1}   direction="row" justifyContent="space-evenly" alignItems="stretch" sx={{   }} style={{ height: '800px',  }}>

      <Grid item xs={4}>
      <Grid container
  direction="column"
  justifyContent="space-evenly"
  alignItems="stretch"
  item spacing={1}
  rowSpacing={2} 
  sx={{height: '100%', }}
>

<Grid item xs={9}>
        <TableContainer component={Paper}  >
          <Table aria-label="simple table"  size="small" >
            <TableBody>
              <TableRow>
                <TableCell align="center" colSpan={3} sx={{fontSize:23}}>
                {items.Name}
                </TableCell>
               
              </TableRow>
              {Object.keys(context).map((key) =>
                items[key] !== null  && items[key] !== '' ? (
                  <TableRow>
                    {key === 'BitigKz' ? (
                      <TableCell colSpan={2}>
                        <a href={items[key]}>{context[key]}</a>
                      </TableCell>
                    ) : (
                      <>
                        <TableCell>{context[key]}</TableCell>
                        <TableCell align="right">
                          {items[key] !== '' ? items[key] : '-'}
                        </TableCell>
                      </>
                    )}
                  </TableRow>
                ) : null
                )}


        </TableBody>
      </Table>
    </TableContainer>
    </Grid>

    <Grid item>
    <ImageGallery items={items}/>
    </Grid>
        
    <Grid item>
    {items.related_inscriptions && items.related_inscriptions.length > 0 && (
  <div>
    
      {items.related_inscriptions.map(insc => (
          <div>
          <Link  component="button" variant="body2" to={`/ep_tur/inscriptions/${insc.ID}`} target="_blank">{insc.Name}</Link>
          </div>
      ))}
  </div>
)}           
    </Grid>
    </Grid>
    </Grid>

    <Grid item xs={6}>
    <Grid
  container
  direction="column"
  justifyContent="space-evenly"
  alignItems="stretch"
  item spacing={1}
  rowSpacing={2} 
  sx={{height: '100%'}}
>

      {model_id ? (
         <> 
      <Grid item xs={9}><iframe title = {model_id} src = {model_path} name="model" width="100%" height="100%" /> </Grid>
      <Grid item ><Button variant="outlined"  sx = {{color : cyan[900]}} fullWidth = {true} href={model_path} >Полноэкранный режим</Button> </Grid>
     <Grid item padding={2} mb='5' ><ModelMetadata items={items} /> </Grid>
      </>   
      ) : 
      <div> Нет модели </div>
      } 
      </Grid>
    </Grid>    
     </Grid>  
  

      );
};

function MultipleModelsView({ items }) {

  const context = {
    'ID' : 'ID',
    'Name' : 'Название',
    'NameVariations': 'Вариации названия',
    'ContextType': 'Тип памятника',
    'site_country' :'Страна',
    'site_region' : 'Регион',
    'CitDTS' : 'Боровкова Т. А. и др. Древнетюркский словарь. – 1969.',
    'CitVasilev': 'Васильев Д.Д. Графический фонд памятников тюркской рунической письменности азиатского ареала. – 1983.',
    'CitBazylhan':'Базылхан Н. Древнетюркские письменные памятники в Монголии: Проблемы научной каталогизации и музеификации – 2010.',
    'BitigKz' : 'О памятнике в фонде TÜRIK BITIG'
     
};
  return (
<Grid container spacing={1}   direction="row" justifyContent="space-evenly" alignItems="stretch"  style={{ height: '1000px',  }} >

<Grid item xs={4}>
<Grid container
direction="column"
justifyContent="flex-start"
alignItems="stretch"
item spacing={1}
// rowSpacing={2} 
sx={{height: '100%', }}
>

<Grid item xs={9}>
  <TableContainer component={Paper}  >
    <Table aria-label="simple table"  size="small" >
      <TableBody>
        <TableRow>
          <TableCell align="center" colSpan={3} sx={{fontSize:23}}>
          {items.Name}
          </TableCell>
         
        </TableRow>
        {Object.keys(context).map((key) =>
          items[key] !== null  && items[key] !== '' ? (
            <TableRow>
              {key === 'BitigKz' ? (
                <TableCell colSpan={2}>
                  <a href={items[key]}>{context[key]}</a>
                </TableCell>
              ) : (
                <>
                  <TableCell>{context[key]}</TableCell>
                  <TableCell align="right">
                    {items[key] !== '' ? items[key] : '-'}
                  </TableCell>
                </>
              )}
            </TableRow>
          ) : null
          )}


  </TableBody>
</Table>
</TableContainer>
</Grid>

<Grid item>
<ImageGallery items={items}/>
</Grid>
  
<Grid item>
{items.related_inscriptions && items.related_inscriptions.length > 0 && (
<div>
{items.related_inscriptions.map(insc => (
    <div>
    <Link  component="button" variant="body2" to={`/ep_tur/inscriptions/${insc.ID}`} target="_blank">{insc.Name}</Link>
    </div>
))}
</div>
)}           
</Grid>
</Grid>
</Grid>

<Grid item xs={6}>
<Grid
container
direction="column"
justifyContent="space-evenly"
alignItems="stretch"
item spacing={1}
rowSpacing={2} 
sx={{height: '100%'}}
>


<Grid item>
{/* <Grid container spacing={1} direction="column" justifyContent="space-evenly" alignItems="stretch" > */}
<MultipleModelView items={items}></MultipleModelView>
</Grid>
<Grid item>
<MultipleModelMetadata items={items}></MultipleModelMetadata>
</Grid>
    </Grid>
</Grid>
</Grid>    
// </Grid> 
  );
};

function DataFetch() {
  const { ID } = useParams();
  // console.log(ID)
  const [items, setItems] = useState();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let url = API_BASE_URL + `inscription/${ID}/`
    
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
      

      if (items.models && items.models.length > 1) {
        console.log(items.models)

        return <MultipleModelsView items={items} />;
      } else {
        return <BasicTable items={items} />;
      }


          };
};

