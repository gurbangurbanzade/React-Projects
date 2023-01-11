import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementByAmount,
  decrementByAmount,
} from "../../redux/slice/counterSlice";

const CunterFromInput = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState();
  return (
    <div>
      CunterFromInput
      <input type="text" onChange={(e) => setInputValue(+e.target.value)} />
      <button onClick={() => dispatch(incrementByAmount(inputValue))}>
        IncInput
      </button>
      <button onClick={() => dispatch(decrementByAmount(inputValue))}>
        DecInput
      </button>
    </div>
  );
};

export default CunterFromInput;
