import Grid from '@mui/material/Grid';
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import {Link,  } from '@mui/material';

function ClickableBox({ link, children }) {
  const navigate = useNavigate();

  const handleBoxClick = () => {
    navigate(link);
  };
  const boxStyles = {
    // height: '200px',
    // width: '200px',
    backgroundColor: '#ede7dd',
    border: '1px solid #ccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: '16px',
    padding: '10px',
    textAlign: 'justify',
    cursor: 'pointer',
    color:'#1f1a1a',
    
  };

  return (
    <Box style={boxStyles} onClick={handleBoxClick}>
      {children}
    </Box>
  );
};

export function Homepage() {
    const styles = {
        background: 'linear-gradient(45deg, #a3a5a8 30%, #ede7dd 90%)',
        height: '1020px',
        // 'linear-gradient(to bottom, #ede7dd, #2e4463)'
      };
      

      // const boxStyles = {
      //   // height: '200px',
      //   // width: '200px',
      //   backgroundColor: '#ede7dd',
      //   border: '1px solid #ccc',
      //   display: 'flex',
      //   alignItems: 'center',
      //   justifyContent: 'space-evenly',
      //   borderRadius: '16px',
      //   padding: '10px',
      //   textAlign: 'justify',
      //   cursor: 'pointer',
        
      // };

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
            <Box   >
              <img src="./VE0300X.png" alt='illusrtation' />
            </Box>
            </Grid>
            <Grid container xs={6} direction="column"  justifyContent="space-evenly">
              <Grid item> 
          

            <Box >
                <Typography variant="h3"  sx={{fontWeight: 'bold'}}   gutterBottom color='#1f1a1a'>
                Тюркская руническая эпиграфика
                </Typography>
                <Typography variant="body1" gutterBottom align='justify' color='#1f1a1a' >
                Тюркская руническая эпиграфика — это цифровой археологический проект, целью которого является сбор и предоставление трёхмерных цифровых копий тюркских надписей для исследований. Портал предоставляет доступ к пополняемой и уточняемой базе данных, собирающей следующую информацию о тюркских рунических надписях:
                  <ul>
<li> местонахождение памятника</li>
<li>тип памятника: объект поминального комплекса или наскальная надпись</li>
<li>различные вариации названий</li>
<li>первое упоминание в научной публикации</li>
<li>конкорданс сводных публикаций</li>
<li>метаданные о представленных копиях</li>
                  </ul>
                  Идея проекта и исходные данные принадлежат
                  <Button sx={{color: "#1f1a1a"}} target="_blank" href="https://rssda.su/"> лаборатории RSSDA</Button> 
                  . Проект реализован в рамках магистерской диссертации Сысоевой Марии под руководством Клышинского Эдуарда Станиславовича и Свойского Юрия Михайловича.  

</Typography>  

              </Box>
              </Grid>

<Grid item>
<ClickableBox link="/ep_tur/inscriptions"   >
  <Typography > Раздел <Box component="span" fontWeight="bold">Каталог </Box>

   отображает надписи в табличном формате с функциями поиска, фильтрации и сортировки. По клику на идентификатор надписи можно перейти на страницу экземпляра.
  </Typography>
</ClickableBox>
</Grid>
<Grid item>
  <ClickableBox link="/ep_tur/map"   >
    <Typography  >Раздел 
      <Box component="span" fontWeight="bold"> Карта </Box>
      визуализирует местонахождения в пространственном контексте. Каждое местонахождение содержит ссылки на страницы происходящих оттуда надписей. 
      </Typography>

      </ClickableBox>
</Grid>
<Grid item  >
<ClickableBox link="/ep_tur/process"   >
    <Typography  >Раздел 
      <Box component="span" fontWeight="bold"> О моделях 
      </Box> содержит информацию о методике получения представленных моделей.</Typography> </ClickableBox>
</Grid>
</Grid>



          </Grid>


</Box>
        );
      }