import ProductList from "./Components/ProductList/ProductList";
import Navbar from "./Components/Navbar/Navbar";
import Wrapper from "./Components/hoc/Wrapper";
import ProductsProvider from "./Components/Providers/ProductsProvider";
import Container from "./App.css";
import Filter from "./Components/Filter/Filter";
import Test from "./Components/Test/Test";
import Search from './Common/Search/Search';
function App() {
  return (
    <div>
      <ProductsProvider>
        <Navbar />
        <Filter />
        <ProductList />
      </ProductsProvider>
    </div>
  );
}
export default Wrapper(App, "Container");
