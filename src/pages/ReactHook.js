import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ReactHook = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    document.title = `count clicked ${count} times.`;
  }, [count]);

  useEffect(() => {
    document.title = `count2 clicked ${count2} times.`;
  }, [count2]);
  const _themeContext = useContext(ThemeContext);
  return (
    <div className={_themeContext.currentTheme}>
      <h4>useState,useEffect</h4>
      <button onClick={() => setCount(count + 1)}>Click Here.</button>
      <span>count clicked {count} times.</span>
      <br />
      <button onClick={() => setCount2(count2 + 1)}>Click Here.</button>
      <span>count2 clicked {count2} times.</span>
    </div>
  );
};
