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


export function ModelMetadata({ items }) {
    //   const { row } = items.models[0];
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
        'Site' : 'Нахождение',
    };

      return (
        // <Grid item xs="auto" wrap="nowrap"> 
        // <Container maxWidth="sm">
        <Box sx={{ fontWeight: 'bold', textAlign: 'center', position: 'absolute' }}>
        {/* <TableContainer component={Paper}  > */}
        <TableContainer component={Paper} style={{width: 600}}>
          <Table aria-label="collapsible table" size="small">
          <TableRow size="small" >
            <TableCell>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
            <Typography >
                    Метаданные
                  </Typography>
            </TableCell>            
          </TableRow>
    
          <TableRow size="small">
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
              <Collapse in={open}  timeout="auto" unmountOnExit>
                <Box style={{maxWidth: '100vh',}}
        //         sx={{
        // width: 100%,
        // height: 300,}} 
         >
                  <Table size="small" >
                    
                      
                  <TableHead>
    <TableRow>
      {Object.keys(context).filter(key => key && items.models[0][key]).map((key) => (
        <TableCell key={key}>{context[key]}</TableCell>
      ))}
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      {Object.keys(context).filter(key => key && items.models[0][key]).map((key) => (
        <TableCell key={key}>{items.models[0][key]}</TableCell>
      ))}
    </TableRow>
  </TableBody>
                  </Table>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
     </Table> </TableContainer>
</Box>

      );
    }
