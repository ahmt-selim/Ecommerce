import { useEffect, useState } from "react";
import { IProduct } from "../model/IProduct";
import Header from "./Header";
import ProductList from "./ProductList";


function App() {
const[products, setProducts] = useState<IProduct[]>([]);

useEffect(() => {
fetch("http://localhost:5067/api/products")
  .then(response => response.json())
  .then(data => setProducts(data));
}, []);


  function addProduct(){
    setProducts([...products, {id: Date.now(), name: "product 4", price: 1180, isActive: true}]);// 3 nokta ile products içindeki verileri getirir. setProducts ile virgülden sonra eklenen yeni ürünü products'a ekler.
  }
  return (
    <>
      <Header products={products}/>
      <ProductList products={products} addProduct={addProduct}/>
    </>
  )
}

export default App
