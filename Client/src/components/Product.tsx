import { IProduct } from "../model/IProduct";


interface Props{
    product: IProduct
}

export default function Product({product}: Props){
  return(
    <>
    {product.isActive && (//Bu şekilde de and operatörü ile if mantığı ile şart ekleyebiliyoruz.
      <div>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
    </div>
    )}
    
    </>
    
  );
}