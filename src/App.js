// import { useState } from "react";
import React, { Component } from "react";
import ProductList from "./Components/ProductList/ProductList";

export class App extends Component {
  state = {
    count: 0,
  };


  render() {
    return (
      <div className="container" id="title">
        <h1>Shopping App</h1>
        <ProductList />
        {/* <button
          onClick={() => this.clickHandler({ id: 2 })}
          className="product"
        >
          counter : {this.state.count}
        </button> */}
      </div>
    );
  }
}
export default App;


// clickHandler = (newTitle) => {
  // this.setState({
  //   products: [
  //     { title: "React.js", price: "140$" },
  //     { title: newTitle, price: "170$" },
  //     { title: "React.js", price: "180$" },
  //   ],
  // });
// };

// countHandler = (id) => {
//   console.log("count clicked!", id);
//   this.setState({ count: this.state.count + 1 });
// };


// <button
// onClick={() => this.clickHandler({ id: 2 })}
// className="product"
// >
// counter : {this.state.count}
// </button>

// const App = () => {
//   const [products, setProducts] = useState([
//     { title: "React.js", price: "140$" },
//     { title: "NodeJs", price: "170$" },
//     { title: "React.js", price: "180$" },
//   ]);

//   const clickHandler = () => {
//     setProducts([
//       { title: "React.js", price: "240$" },
//       { title: "NodeJs", price: "270$" },
//       { title: "React.js", price: "280$" },
//     ]);
//   };

//   return (
//     <div className="container" id="title">
//       <h1>Shopping App</h1>
//       {products.map((product) => {
//         return <Products name={product.title} price={product.price} />;
//       })}
//       <button onClick={clickHandler}>Change prices</button>
//     </div>
//   );
// };

// import React from "react";
// import Hooks from "./Components/Hooks";
// import HookObject from "./Components/HookObject";

// export default function App() {
//   return (
//     <div>
//       <Products />
//       <Hooks />
//       <HookObject />
//     </div>
//   );
// }
