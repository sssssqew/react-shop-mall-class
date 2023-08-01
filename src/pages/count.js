import { useState } from "react";

function Count({ total, onClick }) {
  const [count, setCount] = useState(1);
  return (
    <div className="cartWrap">
      <div className="countBtn">
        <span
          className="plus"
          onClick={() => {
            setCount((prev) => prev - 1);
            onClick(-1);
          }}
        >
          -
        </span>
        <span>{count < 1 ? setCount(1) : count}</span>
        <span
          className="minus"
          onClick={() => {
            setCount((prev) => prev + 1);
            onClick(1);
          }}
        >
          +
        </span>
      </div>
      <div className="cartBtn">
        <span>ADD TO CART</span>
      </div>
    </div>
  );
}
export default Count;
