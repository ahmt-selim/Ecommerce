import { Grid } from "@mui/material";
import Product from "./Product";
import { IProduct } from "../../model/IProduct";

interface Props{
    products: IProduct[];
}


 //react da state mantığı: Buradaki products listesinin kullanıldığı fonksiyon veya componentlerde bu liste üzerinde değişiklik yapıldığında otomatik olarak ilgili componenti tekrar render eder.
export default function ProductList({products}: Props){

  return(// Product componentine gönderilen props yani parametre, burada kullanılan isim ile component içindeki isim ile aynı olmalıdır.(product)
    <Grid container spacing={2}>

      { products.map((p: IProduct) => (
        
        <Grid key={p.id} size={{ xs: 6, md: 6, lg: 3}}>
          <Product key={p.id} product={p}/>
        </Grid>
      ))}

    </Grid>
    
  );
}