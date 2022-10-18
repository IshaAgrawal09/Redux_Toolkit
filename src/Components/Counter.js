import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "../Redux/Reducer";

export function Counter() {
  const count = useSelector((state) => state.counter.value);

  const [select, setSelect] = useState();
  const [val, setVal] = useState();
  const dispatch = useDispatch();

  const perform = () => {
    if (select === "increment") {
      dispatch(incrementByAmount(val));
    } else {
      dispatch(decrementByAmount(val));
    }
    console.log(select);
  };
  return (
    <div>
      <div>{count}</div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>
        <input
          type="number"
          value={val}
          onChange={(event) => setVal(event.target.value)}
        />
        <select value={select} onChange={(e) => setSelect(e.target.value)}>
          <option value="" disabled selected>
            --Select--
          </option>
          <option value="increment">Increment</option>
          <option value="decrement">Decrement</option>
        </select>
        <button onClick={perform}>Perform Action</button>
      </div>
    </div>
  );
}
