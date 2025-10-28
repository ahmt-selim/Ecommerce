import { Card, CardMedia } from "@mui/material";
import { IProduct } from "../model/IProduct";


interface Props{
    product: IProduct
}

export default function Product({product}: Props){
  return(
    <Card>
      <CardMedia sx={{heihgt: 160}} image={`http://localhost:5067/images/${product.imageUrl}`}></CardMedia>
    </Card>
    
  );
}