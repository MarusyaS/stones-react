import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { blueGrey, orange, cyan } from '@mui/material/colors';




const steps = [
  {
    label: 'Сбор данных: Фотосъёмка',
    description: `Первый этап сбора данных при подготовке модели -- фотосъёмка.
    Памятник снимается с различных ракурсов, при этом количество фотографий прямо пропорционально его сложности.
    Масштаб сохраняется по отснятой специальным образом линейке, а в случае крупных памятников -- с помощью лазерного дальномера или тахеометра. 
    Дальше фотографии проходят процесс цветокоррекции,           
    `,
  },
  {
    label: 'Получение модели: Фотограмметрия',
    description:
      'формирование фотограмметрическим методом трёхмерных полигональных моделей',
  },
  {
    label: 'Пост-фотограмметрическая обработка',
    description: `При фотограмметрической обработке фотографий  в специальных программных обеспечениях вычисляется облако точек памятника.
    По нему затем там же формируется трёхмерная полигональная модель.
    ,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: 'Mетоды визуализации рельефов',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export function Paradata() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (


    <Box justifyContent="center" alignItems="center" m={5} p={5}>
            <Typography variant="h4" gutterBottom color='#1f1a1a'>О методике получения моделей </Typography>
      <Stepper activeStep={activeStep} orientation="vertical" sx={{'& .MuiStepIcon-root': {color: cyan[900]}}}>
        {steps.map((step, index) => (
          <Step key={step.label} >
            <StepLabel
              optional={
                index === 3 ? (
                  <Typography variant="caption">Последний шаг</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1, backgroundColor: '#f0f0f0', color: cyan[900], ':hover': {
                        bgcolor: cyan[900], // theme.palette.primary.main
                        color: 'white',
                      },}}
                  >
                    {index === steps.length - 1 ? 'Конец' : 'Дальше'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1, color: blueGrey[400], }}
                  >
                    Назад
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          {/* <Typography>All steps completed - you&apos;re finished</Typography> */}
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1, color: '#a3a5a8' }}>
            Заново
          </Button>
        </Paper>
      )}
    </Box>

  );
}