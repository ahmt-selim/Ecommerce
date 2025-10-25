import { useEffect, useState } from "react";


function App() {

  return (
    <>
      <Header/>
      <ProductList/>
    </>
  )
}
function Header(){
  return(
    <h1>Header</h1>
  );
}
//react da state mantığı: Buradaki products listesinin kullanıldığı fonksiyon veya componentlerde bu liste üzerinde değişiklik yapıldığında otomatik olarak ilgili componenti tekrar render eder.
function ProductList(){
const[products, setProducts] = useState([
  {id: 1, name: "product 1", price: 1000, isActive: true},
  {id: 2, name: "product 2", price: 1000, isActive: false},
  {id: 3, name: "product 3", price: 980, isActive: true}
]);

useEffect(() => {
fetch("http://localhost:5067/api/products")
  .then(response => response.json())
  .then(data => setProducts(data));
}, []);


  function addProduct(){
    setProducts([...products, {id: Date.now(), name: "product 4", price: 1180, isActive: true}]);// 3 nokta ile products içindeki verileri getirir. setProducts ile virgülden sonra eklenen yeni ürünü products'a ekler.
  }
console.log("render...");

  return(// Product componentine gönderilen props yani parametre, burada kullanılan isim ile component içindeki isim ile aynı olmalıdır.(product)
    <div>
      <h2>ProductList</h2>
      { products.map(p => (
        p.isActive && //Buradaki and operatörü ile p.isActive tru ise şartını ekledik.
        <Product key={p.id} product={p}/>
      ))}

    <button onClick={addProduct}>Add Product</button>
    </div>
    
  );
}
function Product(props: any){
  return(
    <>
    {props.product.isActive && (//Bu şekilde de and operatörü ile if mantığı ile şart ekleyebiliyoruz.
      <div>
        <h3>{props.product.name}</h3>
        <p>{props.product.price}</p>
    </div>
    )}
    
    </>
    
  );
}
export default App
