// import { Link } from 'react-router';
import {Homepage} from './homepage';
import {GridView} from './grid_view';
import {SingleView} from './single_view';
import ErrorPage from "./error_page";
import {ResponsiveAppBar} from './navbar';
// import {NoPage} from './NoPage';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

export default function App() {
  return(
    <>
      {/* <header>
        <a href='/'> Home</a>
        <a href='/inscriptions'>Inscriptions</a>
        <a href='/map'>Map</a>

      </header> */}

      <Router>
        <div>
          <ResponsiveAppBar />
          <Routes>
              <Route path='/' element={<Homepage/>} errorElement={<ErrorPage />}/>
              <Route path='/inscriptions' element={<GridView/>}/>
              <Route path='/inscriptions/:ID' element={<SingleView/>}/>
            {/* <Route path='*' element={<NoPage/>}/> */}
          </Routes>
        </div>
      </Router>
    </>
  );

}

