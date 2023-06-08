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
    Дальше фотографии проходят процесс цветокоррекции.           
    `,
  },
  {
    label: 'Получение модели: Фотограмметрия',
    description:
      `Подготовленные фотографии загружаются в специализированное фотограмметрическое программное обеспечение.
      На основании фотографий сначала вычисляется облако точек, по которым затем формируется трёхмерная полигональная модель поверхности памятника. 
      При этом для каждого памятника подбираются настройки увязки фотографий для обеспечения построения корректной модели и необходимой детальности.`,
  },
  {
    label: 'Пост-фотограмметрическая обработка',
    description: `Затем модель проходит этап обработки, при котором обрезаются не относящиеся к памятнику элементы и корректируются возможные ошибки алгоритма (например, отверстия). 
    Также модель на этом этапе выравнивается и приобретает текстуру поверхности. `,
  },
  {
    label: 'Mетоды визуализации рельефов',
    description: `Плохо читаемые эпиграфические памятники проходят дополнительный этап обработки. 
    К поверхностям с надписями применяются алгоритмы математической визуализации рельефов, используемые в картографии. 
    Выбор алгоритма зависит от особенностей конкретного памятника.`,
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
            <Box margin={5}>
            <Typography> Здесь описываются основные этапы работы лаборатории RSSDA при подготовке представленных на сайте копий тюркской эпиграфики. <p>Более подробную информацию можно найти в статье: 
Авдеев А. Г., Свойский Ю. М. Методы документирования эпиграфических памятников Московской Руси в рамках Свода русских надписей (CIR) //Вопросы эпиграфики. – 2019. – Т. 10. – С. 229-260.</p></Typography>
</Box>
      <Stepper activeStep={activeStep} orientation="vertical" sx={{'& .MuiStepIcon-root': {color: cyan[900]}}}>
        {steps.map((step, index) => (
          <Step key={step.label} 
          sx={{'& .MuiStepLabel-root .Mui-active': {
            color:  cyan[900], // circle color (ACTIVE)
          },
          '& .MuiStepLabel-root .Mui-completed': {
            color:  cyan[900], // circle color (COMPLETED)
          },}}>
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
              <Typography >{step.description}</Typography>
              <Box   sx={{ minHeight: '100px',}}>
              <img src="./model_scheme.png" alt='illustration' />
              {/* <iframe src="iframe" loading="lazy"></iframe> */}
              </Box>
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