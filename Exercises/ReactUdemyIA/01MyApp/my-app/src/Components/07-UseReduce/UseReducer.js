import React, { useReducer } from "react";
const init = {
  saygac1: 0,
  saygac2: 100,
};
const reduc = (state, action) => {
  switch (action.type) {
    case "artir":
      return { ...state, saygac1: state.saygac1 + action.value };
    case "artir2":
      return { ...state, saygac2: state.saygac2 + action.value };
    case "azalt":
      return { ...state, saygac1: state.saygac1 - action.value };
    case "azalt2":
      return { ...state, saygac2: state.saygac2 - action.value };
    case "reset":
      return { ...state, saygac1: init.saygac1 };
    case "reset2":
      return { ...state, saygac2: init.saygac2 };
  }
};
function UseReducer() {
  //   const [state, dispatch] = useReducer(first, second, third);
  const [saygac, dispatch] = useReducer(reduc, init);
  return (
    <div>
      UseReducer
      <hr />
      <div>1.saygac:-{saygac.saygac1}</div>
      <div>2.saygac:-{saygac.saygac2}</div>
      <button onClick={() => dispatch({ type: "artir", value: 1 })}>
        1-Artir
      </button>
      <button onClick={() => dispatch({ type: "artir2", value: 5 })}>
        2-Artir-5
      </button>
      <button onClick={() => dispatch({ type: "azalt", value: 1 })}>
        1-Azalt
      </button>
      <button onClick={() => dispatch({ type: "azalt2", value: 5 })}>
        2-Azalt-5
      </button>
      <button onClick={() => dispatch({ type: "reset", value: 0 })}>
        1-Reset
      </button>
      <button onClick={() => dispatch({ type: "reset2", value: 0 })}>
        2-Reset
      </button>
    </div>
  );
}

export default UseReducer;
