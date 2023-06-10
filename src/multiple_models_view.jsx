import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Container } from '@mui/material';
import { blueGrey, orange, cyan } from '@mui/material/colors';



export function MultipleModelView({ items }) {

    return (
        <>
    {items.models.map(
    (model) => (
      (model.ID) ? 
    // Code to render each model goes here
    <>
         <React.Fragment key={model.ID}>

    <Grid item > <iframe title ={model.ID} src = {`https://rssda.su/auxil/${model.ID.toLowerCase()}.html`} name="model" width="100%" height="100%" /> </Grid>
    <Grid item ><Button variant="outlined"  sx = {{color : cyan[900]}} fullWidth = {true} 
    // href={model_path} 
    href={`https://rssda.su/auxil/${model.ID.toLowerCase()}.html`} 
    >Полноэкранный режим</Button> </Grid>
  {/* <Grid item padding={2} mb='5' ><ModelMetadata items={items} /> </Grid> */}
  </React.Fragment>
  </> : null
))}
</>
    )
}