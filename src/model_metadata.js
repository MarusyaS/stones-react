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
    //     const context = {
    //     'ID' : 'ID',
    //     'Process' : 'Процесс',
    //     'Camera': 'Камера',
    //     'Lens': 'Объектив',
    //     'FrameCount' : 'Количество снимков',
    //     'Scheme': 'Схема съёмки',
    //     'Date':'Дата съёмки',
    //     'PolygonCount' :'Количество полигонов, млн',
    //     'PolygonCM' : 'Площадь поверхности, кв.см.' 
    // };
      return (
        // <Grid item xs="auto" wrap="nowrap"> 
        // <Container maxWidth="sm">
        <TableContainer component={Paper}  >
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
            <Typography variant="h8" gutterBottom component="div">
                    Метаданные
                  </Typography>
            </TableCell>            
          </TableRow>
    
          <TableRow size="small">
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Box >
                  <Table size="small" >
                    <TableHead>
                      <TableRow size="small">
                        <TableCell  >Процесс</TableCell>
                        <TableCell>Камера</TableCell>
                        <TableCell >Объектив</TableCell>
                        <TableCell align="right">Количество снимков</TableCell>
                        <TableCell align="right">Схема съёмки</TableCell>
                        <TableCell align="right">Дата съёмки</TableCell>
                        <TableCell style={{ width: '10%' }} align="right">Количество полигонов, млн</TableCell>
                        <TableCell style={{ width: '10%' }} align="right">Площадь поверхности, кв.см.</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow  key={items.models[0].ID} >
                          <TableCell component="th" scope="row">
                            {items.models[0].Process}
                          </TableCell>
                          <TableCell>{items.models[0].Camera}</TableCell>
                          <TableCell>{items.models[0].Lens}</TableCell>
                          <TableCell>{items.models[0].FrameCount}</TableCell>
                          <TableCell>{items.models[0].Scheme}</TableCell>
                          <TableCell>{items.models[0].Date}</TableCell>
                          <TableCell style={{ width: '10%' }}>{items.models[0].PolygonCount}</TableCell>
                          <TableCell style={{ width: '10%' }}>{items.models[0].PolygonCM}</TableCell>
    
                        </TableRow>
                
                    </TableBody>
                  </Table>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
     </Table> </TableContainer>
    //  </Container>     {/* </Grid> */}

      );
    }
