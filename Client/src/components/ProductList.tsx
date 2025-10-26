import { IProduct } from "../model/IProduct";
import Product from "./Product";

interface Props{
    products: IProduct[];
    addProduct: () => void;
}


 //react da state mantığı: Buradaki products listesinin kullanıldığı fonksiyon veya componentlerde bu liste üzerinde değişiklik yapıldığında otomatik olarak ilgili componenti tekrar render eder.
export default function ProductList({products, addProduct}: Props){

  return(// Product componentine gönderilen props yani parametre, burada kullanılan isim ile component içindeki isim ile aynı olmalıdır.(product)
    <div>
      <h2>ProductList</h2>
      { products.map((p: IProduct) => (
        p.isActive && //Buradaki and operatörü ile p.isActive tru ise şartını ekledik.
        <Product key={p.id} product={p}/>
      ))}

    <button onClick={addProduct}>Add Product</button>
    </div>
    
  );
}