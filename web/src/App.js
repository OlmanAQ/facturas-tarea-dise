import React from 'react';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Productos from './AgregarProducto';
import Venta from './Venta';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Productos/>}></Route>
        <Route path='/venta' element= {<Venta/>}></Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
