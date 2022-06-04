import React, { useState, useEffect } from "react";

export default function FunctionalCounter() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);


  useEffect(() => {
    console.log("Document title updating");
    document.title = `clicked : ${count} times `;
  }, [count]);

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
      <button
        style={{ width: "auto", height: "20px",background:"yellow"}}
        onClick={() => setCount(count + 1)}
      >
          counter
      </button>
    </div>
  );
}
