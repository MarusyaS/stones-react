import './App.css';
import Grid from '@mui/material/Grid';
import API_BASE_URL from './config';

import { Link,} from "react-router-dom";

import React, {
  useEffect,
  useState
} from "react";

import {
  DataGrid,
  GridToolbar,
} from '@mui/x-data-grid';

export function GridView() {
  return ( 
  <div className = "GridView">
    <MyComponent style={{height: 400}} />
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
      width: 70,
      renderCell: (items) => (
        <Link to={`${items.row.ID}`} target="_blank">{items.row.ID}</Link>),

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
    },
    {
      field: "CitDTS",
      headerName: 'Древнетюркский словарь',
    },
  {
    field: "CitVasilev",
    headerName: 'Васильев',
  },
  { 
    field:  "CitBazylhan",
    headerName: 'Базылхан',
  },
  {   field: "CitKormushin",
  headerName: 'Кормушин'
},
{   field: "NameVariations",
headerName: 'Вариации названий',
hide: true,
}
  ];

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(API_BASE_URL + "inscription")
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
      <Grid Container >
        <Grid item >
      {/* <div style={{ height: 800, width: '100%' }}> */}

      <DataGrid 
      localeText={{
        columnsPanelTextFieldLabel: "Поиск по колонкам",
        columnsPanelTextFieldPlaceholder: "Поиск...",
        toolbarColumns: 'Колонки',
        toolbarColumnsLabel: 'Выбрать колонку',
        toolbarFilters: 'Фильтры',
  toolbarFiltersLabel: 'Открыть фильтры',
  toolbarFiltersTooltipHide: 'Скрыть',
  toolbarFiltersTooltipShow: 'Открыть',
  toolbarQuickFilterPlaceholder: 'Поиск...',
  toolbarQuickFilterLabel: 'Поиск',
    // Density selector toolbar button text
    toolbarDensity: 'Плотность',
    toolbarDensityLabel: 'Плотность',
    toolbarDensityCompact: 'Компактный',
    toolbarDensityStandard: 'Стандартный',
    toolbarDensityComfortable: 'Комфортный',
     // Export selector toolbar button text
  toolbarExport: 'Экспорт',
  toolbarExportLabel: 'Экспорт',
  toolbarExportCSV: 'Скачать CSV',
  toolbarExportPrint: 'Печать',
  toolbarExportExcel: 'Скачать Excel',
  filterPanelOperators: 'Условие', // TODO v6: rename to filterPanelOperator
  // filterPanelOperatorAnd: 'И',
  // filterPanelOperatorOr: 'Или',
  filterPanelColumns: 'Колонки',
  filterPanelInputLabel: 'Зачение',
  filterPanelInputPlaceholder: 'Фильтровать по значению...',
  columnsPanelShowAllButton: 'Показать все',
  columnsPanelHideAllButton: 'Скрыть все',

    // Filter operators text
    filterOperatorContains: 'содержит',
    filterOperatorEquals: 'равно',
    filterOperatorStartsWith: 'начинается с',
    filterOperatorEndsWith: 'заканчивается на',
    filterOperatorIs: 'is',
    filterOperatorNot: 'is not',
    filterOperatorAfter: 'is after',
    filterOperatorOnOrAfter: 'is on or after',
    filterOperatorBefore: 'is before',
    filterOperatorOnOrBefore: 'is on or before',
    filterOperatorIsEmpty: 'пусто',
    filterOperatorIsNotEmpty: 'не пусто',
    filterOperatorIsAnyOf: 'что-то из',
    // https://mui.com/x/react-data-grid/filtering/
  // https://github.com/mui/mui-x/blob/cc09f3788d65f9694a0fbc1381681c701b802e47/packages/grid/x-data-grid/src/constants/localeTextConstants.ts
      }}
        autoHeight={true}
        // density='comfortable'
        pageSize={50}
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
      {/* </div> */}
      </Grid>
      </Grid>
   
    )
  }
}; 

