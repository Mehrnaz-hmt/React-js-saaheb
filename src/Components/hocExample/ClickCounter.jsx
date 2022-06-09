import React, { useState } from "react";
import WithCount from "../hoc/WithCount";

function ClickCounter({ counter, incrementCount }) {
  return (
    <div>
      <h2 onClick={incrementCount}>Clicked {counter} times</h2>
    </div>
  );
}
export default WithCount(ClickCounter, 5);
