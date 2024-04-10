import { FaPlus } from "react-icons/fa";

type ProductProps = {
  productId : String;
  photo : String;
  name : String;
  price : Number;
  stock : Number;
  handler : ()=> void;
}



const ProductCard = ({ productId, photo, name, price, stock, handler }:ProductProps) => {
  return (
    <div className="product-card">
      <img src={photo} alt={name}/>
      <p>{name}</p>
      <span>₹{price}</span>
<div>
  <button onClick={()=>handler()}><FaPlus/></button>
</div>
    </div>
  )
}

export default ProductCard