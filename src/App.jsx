import './App.css'
import SideNav from './component/SideNav';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NewProduct from "./component/NewProduct.jsx";
import ListaProducto from "./component/ListaProducto.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" exact element={<SideNav/>}></Route>
              <Route path="/newProduct" exact element={<NewProduct/>}></Route>
              <Route path="/listProducts" exact element={<ListaProducto/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
