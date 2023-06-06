// import {ResponsiveAppBar} from './navbar';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

// const Homepage = () => {
//     return (
//         <div>
//             <Box>
//             <Typography variant='h3'>Портал Тюркская Руническая Эпиграфика</Typography>
//             <h2>Что сделано:</h2>
//             <ul>
//                 <li><Typography>данные на сайт поступают из подключенной реляционной БД </Typography></li>
//                 <li>на странице "Каталог" можно посмотреть (а также отфильтровать) список всех объектов БД </li>
//                 <li>со страницы Каталога по клику на ID можно перейти на страничку объекта </li>
//                 <li> на странице объекта добавлены модель и изображения </li>
//                 <li>добавлена карта с легендой</li>
//                 {/* <li></li>
//                 <li></li> 
//                 <li></li> 
//                 <li></li>              
//                  */}
                
                
//             </ul>
//             <h2> Что предстоит сделать:</h2>
//                 <ul>
//                     <li>добавить на карту поиск</li>
//                     <li>добавить доп фильтры в Каталог "упоминается в перечне Базылхана/ДТС/.."</li>
//                     <li>и многое другое...</li>
//                     <li>таймлайн с находками?.. </li>
                    
                
                
//                 </ul>
//                 </Box>
//         </div>
       
//     )
// }

// export {Homepage}

import Grid from '@mui/material/Grid';
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


export function Homepage() {
    const styles = {
        background: 'linear-gradient(45deg, #a3a5a8 30%, #ede7dd 90%)',
        height: '800px',
        // 'linear-gradient(to bottom, #ede7dd, #2e4463)'
      };

      const boxStyles = {
        height: '200px',
        // width: '200px',
        backgroundColor: '#f0f0f0',
        border: '1px solid #ccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
      };

        return (
            
            <Box sx={{ flexGrow: 1 }}
            
            justifyContent="space-evenly"
            alignItems="stretch"
            sx={{ paddingTop: '50px', }}
            style={styles}
            spacing={7}
            
          >
            <Grid container direction="row" justifyContent="space-evenly" sx={{padding: 1, mb:7}}>
            <Grid item xs={4}>
            <Box >
                <Paper variant="outlined">
                  <p>This is some content inside the Paper element.</p>
                </Paper>
              </Box>
            </Grid>
            <Grid item xs={6}>
            <Box >
                {/* <Paper variant="outlined"> */}
                <Typography variant="h3" gutterBottom color='#1f1a1a'>
                Тюркская руническая эпиграфика
                </Typography>
                <Typography variant="body1" gutterBottom align='justify' color='#1f1a1a' >
                Тюркская руническая эпиграфика —  это некоммерческая инициатива лаборатории RSSDA, реализованная в рамках магистерской диссертации Сысоевой Марии под руководством Клышинского Эдуарда Станиславовича. Мы собираем и организуем данные о средневековой тюркской эпиграфике используя цифровые подходы. В частности, мы собираем данные о географическом контексте надписей, истории их изучения, а также их высокоточные трёхмерные полигональные модели и рендеры.
                </Typography>    
                  {/* <p> </p> */}
                {/* </Paper> */}
              </Box>
            </Grid>
          </Grid>

<Grid container spacing={1} direction="row" justifyContent="space-evenly">
<Grid item>
  <Box style={boxStyles}>Box 1</Box>
</Grid>
<Grid item >
  <Box style={boxStyles}>Box 2</Box>
</Grid>
<Grid item  >
  <Box style={boxStyles}>Box 3</Box>
</Grid>
</Grid>
</Box>
        );
      }