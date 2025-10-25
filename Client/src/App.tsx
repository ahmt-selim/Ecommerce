const products = [
  {id: 1, name: "product 1", price: 1000, isActive: true},
  {id: 2, name: "product 2", price: 1000, isActive: false},
  {id: 3, name: "product 3", price: 1000, isActive: true},
]

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
function ProductList(){
  return(// Product componentine gönderilen props yani parametre, burada kullanılan isim ile component içindeki isim ile aynı olmalıdır.(product)
    <div>
      <h2>ProductList</h2>
      { products.map(p => (
        p.isActive && //Buradaki and operatörü ile p.isActive tru ise şartını ekledik.
        <Product key={p.id} product={p}/>

      ))}

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
