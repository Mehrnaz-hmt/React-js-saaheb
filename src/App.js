import ProductList from "./Components/ProductList/ProductList";
import Navbar from "./Components/Navbar/Navbar";
import Wrapper from "./Components/hoc/Wrapper";
import ProductProvider from "./Components/Providers/ProductsProvider";


function App() {
  return (
    <div>
      <ProductProvider>
        <Navbar />
        <ProductList />
      </ProductProvider>
    </div>
  );
}
export default Wrapper(App, "Container");
