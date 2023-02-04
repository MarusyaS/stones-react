import logo from './logo.svg';
import './App.css';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ReactDOM from 'react-dom';
// import {
//   SearchState,
//   IntegratedFiltering,
// } from '@devexpress/dx-react-grid';
// import {
//   SearchPanel,
// } from '@devexpress/dx-react-grid-material-ui';

import React, {
  useEffect,
  useState
} from "react";

import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridToolbar,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';

export default function GridView() {

  return ( 
  <div className = "App" >
    <MyComponent style={{height: 400}}/>
  </div>
  );
};




function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const columns = [{
      field: 'ID',
      headerName: 'ID',
      width: 70
    },
    {
      field: 'Name',
      headerName: 'Название',
      width: 500
    },
    {
      field: 'ContextType',
      headerName: 'Контекст',
      width: 300
    },
    {
      field: 'site_country',
      headerName: 'Страна',
      width: 130
    },
    {
      field: 'site_region',
      headerName: 'Регион',
      width: 200
    },
    {
      field: 'DigitalDocumentation',
      headerName: 'Задокументировано',
      width: 100
    }
  ];



  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://127.0.0.1:8000/stonelib/inscription")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result);
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

    return ( 
      // console.log(items[1]);
      <div style={{ height: 800, width: '100%' }}>
      <DataGrid 
        getRowId = {(row) => row.ID}
        rows = {items}
        columns = {columns}
        // pageSize={5}
        // rowsPerPageOptions={[5]}
        checkboxSelection 
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
      </div>
    )
  }
}; 

