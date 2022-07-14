import Product from "../Product/Product";
import { useProduct } from "../Providers/ProductsProvider";

export default function ProductList(props) {
  const products = useProduct();
  const { onChange, onDecrement, onIncrement, onRemove } = props;
  const renderProduct = () => {
    if (products.length === 0)
      return <div className="empty">There is no products in your cart!</div>;

    return products.map((product, index) => {
      return (
        <Product
          key={index}
          product={product}
          onDelete={() => onRemove(product.id)}
          onIncrement={() => onIncrement(product.id)}
          onChange={(e) => onChange(e, product.id)}
          onDecrement={() => onDecrement(product.id)}
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
