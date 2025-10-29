import { useEffect, useState } from "react";
import { IProduct } from "../model/IProduct";
import Header from "./Header";
import { Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router";


function App() {
const[products, setProducts] = useState<IProduct[]>([]);

useEffect(() => {
fetch("http://localhost:5067/api/products")
  .then(response => response.json())
  .then(data => setProducts(data));
}, []);


  return (
    <>
    <CssBaseline/>
      <Header/>
      <Container>
      <Outlet/>
      </Container>
    </>
  )
}
//<Outlet/> sayfa değişiminde değişen kısım. 
export default App
