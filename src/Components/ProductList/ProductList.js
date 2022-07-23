import Product from "../Product/Product";
import { useProducts } from "../Providers/ProductsProvider";
import { useProductActions } from "./../Providers/ProductsProvider";

export default function ProductList() {
  const products = useProducts();

  const dispatch = useProductActions();

   
  const renderProduct = (props) => {
    if (products.length === 0)
      return <div className="empty">There is no products in your cart!</div>;

    return products.map((product, index) => {
      return (
        <Product
          key={index}
          product={product}
          onDelete={() => dispatch({type:"remove",id:product.id})}
          onIncrement={() => dispatch({type:"increment",id:product.id})}
          onChange={(e) => dispatch({type:"edit",id:product.id, event:e})}
          onDecrement={() => dispatch({type:"decrement",id:product.id})}
        />
      );
    });
  };
  return (
    <div>
      {!products.length && <div>Go to shopping!</div>}
      {renderProduct()}
    </div>
  );
}
