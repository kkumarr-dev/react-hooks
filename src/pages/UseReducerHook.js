import { useContext, useReducer } from "react";
import { ThemeContext } from "./ThemeContext";
const reducer = (state, action) => {
  switch (action) {
    case "add":
      return state + 1;
    case "sub":
      return state - 1;
    case "reset":
      return 0;
    default:
      return new Error("error");
  }
};
export const UseReducerHook = () => {
  const init = 0;
  const [count, dispatch] = useReducer(reducer, init);
  const _themeContext = useContext(ThemeContext);
  return (
    <div className={_themeContext.currentTheme}>
      <h4>UseReducerHook</h4>
      <h1>{count}</h1>
      <button onClick={() => dispatch("add")}>+</button>
      <button onClick={() => dispatch("sub")}>-</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
};
