// import { Link } from 'react-router';
import {Homepage} from './homepage';
import {GridView} from './grid_view';
import {SingleView} from './single_view';
import {Paradata} from './paradata';
import {NewMap} from './map';
import ErrorPage from "./error_page";
import {ResponsiveAppBar} from './navbar';
// import {NoPage} from './NoPage';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

export default function App() {
  return(
    <>

      <Router>
        <div>
          <ResponsiveAppBar />
          <Routes>
              <Route path='/ep_tur/' element={<Homepage/>} errorElement={<ErrorPage />}/>
              <Route path='/ep_tur/inscriptions' element={<GridView/>}/>
              <Route path='/ep_tur/inscriptions/:ID' element={<SingleView/>}/>
              <Route path='/ep_tur/map' element={<NewMap/>}/>
              <Route path='/ep_tur/process' element={<Paradata/>}/>
            {/* <Route path='*' element={<NoPage/>}/> */}
          </Routes>
        </div>
      </Router>
    </>
  );

};

