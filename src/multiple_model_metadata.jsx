import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


export function MultipleModelMetadata({ items }) {
      const [open, setOpen] = React.useState(false);

      const context = {
        'ID' : 'ID',
        'Process' : 'Процесс',
        'Camera': 'Камера',
        'Lens': 'Объектив',
        'FrameCount' : 'Количество снимков',
        'Scheme': 'Схема съёмки',
        'Date':'Дата съёмки',
        'Photographer': 'Полевое документирование',
        'ModelProcesser' : 'Обработка данных',
        'PolygonCountMaster' : 'Количество полигонов мастер модели, млн.',
        'PolygonCountGeneral':'Количество полигонов общей модели, млн.',
        'AreaCM' : 'Площадь поверхности, кв.см.',
        // 'Site' : 'Нахождение',
    };
    console.log('models' + items.models)
    return (

        <>

              <React.Fragment key='multiple_model'>
                <Box sx={{ fontWeight: 'bold', textAlign: 'center', position: 'absolute' }}>
                  <TableContainer component={Paper} style={{ width: 600 }}>
                    <Table aria-label="collapsible table" size="small">
                      <TableRow size="small">
                        <TableCell>
                          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                          </IconButton>
                        </TableCell>
                        <TableCell component="th" scope="row">
                          <Typography>Метаданные</Typography>
                        </TableCell>
                      </TableRow>
    
                      <TableRow size="small">
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
                          <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box style={{ maxWidth: '100vh' }}>
                              <Table size="small">
                                <TableHead>
                                  <TableRow>
                                    {Object.keys(context)
                                      .filter((key) => context[key])
                                      .map((key) => (
                                        <TableCell key={key}>{context[key]}</TableCell>
                                      ))}
                                  </TableRow>
                                </TableHead>


                                <TableBody>

                                {items.models.map((model) => {
                                  if (!model.ID) {
                                    return null;
                                  }
                                  return (
                                    <TableRow key={model.ID}>
                                      {Object.keys(context).map((key) => (
                                        <TableCell key={key}>
                                          {model.hasOwnProperty(key) && model[key] !== null ? model[key] : ""}
                                        </TableCell>
                                      ))}
                                    </TableRow>
                                  );
                                })}
                              </TableBody>
                               

                              </Table>
                            </Box>
                          </Collapse>
                        </TableCell>
                      </TableRow>
                    </Table>
                  </TableContainer>
                </Box>
              </React.Fragment>

   
        </>
      );
    }





    