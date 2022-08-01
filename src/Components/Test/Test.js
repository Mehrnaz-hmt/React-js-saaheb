// import React, { useState, useEffect } from "react";

// export default function MyComponent() {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetch("https://restcountries.com/v2/all")
//       .then((res) => res.json())
//       .then((result) => {
//           setIsLoaded(true);
//           setItems(result);
//         },

//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       );
//   }, []);

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <ul>
//         {items.map((item, index) => (
//           <li key={item.numericCode}>
//             {item.name} {item.price}
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }
// import React, { useState, useEffect } from "react";

// export default function Test() {
//   let [country, setCountry] = useState([]);
//   let [error, setError] = useState(null);
//   let [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     fetch("https://restcountries.com/v2/all")
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           setIsLoading(true);
//           setCountry(result);
//         },
//         (error) => {
//           setError(error);
//           setIsLoading(true);
//         }
//       );
//   }, []);
//   if (error) {
//     return <div>Error message is {error.mesage}</div>;
//   } else if (!isLoading) {
//     return <div>Countries is loading...</div>;
//   } else {
//     return (
//       <ul>
//         {country.map((item, index) => (
//           <li key={item.numericCode}>
//             {item.name} {item.price}
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }
