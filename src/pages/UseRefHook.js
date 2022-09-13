import { useContext, useRef } from "react";
import { ThemeContext } from "./ThemeContext";

export const UseRefHook = () => {
  const focusPoint = useRef(null);
  const _themeContext = useContext(ThemeContext);
  const onClickHandler = () => {
    focusPoint.current.value = "focused";
    focusPoint.current.focus();
  };
  return (
    <div className={_themeContext.currentTheme}>
      <h4>UseRefHook</h4>
      <input ref={focusPoint} />
      <button onClick={onClickHandler}>Click to focus</button>
    </div>
  );
};
