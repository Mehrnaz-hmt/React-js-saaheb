import Product from "../Product/Product";
import { useProducts } from "../Providers/ProductsProvider";
import { useProductActions } from "./../Providers/ProductsProvider";

export default function ProductList() {
  const products = useProducts();

  const { removeHandler, incrementHandler, changeHandler, decrementHandler } =
    useProductActions();

  const renderProduct = (props) => {
    if (products.length === 0)
      return <div className="empty">There is no products in your cart!</div>;

    return products.map((product, index) => {
      return (
        <Product
          key={index}
          product={product}
          onDelete={() => removeHandler(product.id)}
          onIncrement={() => incrementHandler(product.id)}
          onChange={(e) => changeHandler(e, product.id)}
          onDecrement={() => decrementHandler(product.id)}
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
