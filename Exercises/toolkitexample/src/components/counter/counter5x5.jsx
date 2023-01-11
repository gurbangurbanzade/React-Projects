import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement5, increment5 } from "../../redux/slice/counterSlice";
const Counter5x5 = () => {
  const count = useSelector((state) => state.counter.value2);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment5())}
        >
          Increment5x5
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement5())}
        >
          Decrement5x5
        </button>
      </div>
    </div>
  );
};

export default Counter5x5;
