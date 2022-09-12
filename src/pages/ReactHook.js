import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ReactHook = () => {
  debugger;
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
    <div style={_themeContext.themeObject}>
      <h4>ReactHook</h4>
      <button
        style={
          _themeContext.themeObject ? _themeContext.themeObject.button : {}
        }
        onClick={() => setCount(count + 1)}
      >
        Click Here.
      </button>
      <br />
      <span>count clicked {count} times.</span>
      <br />
      <button
        style={
          _themeContext.themeObject ? _themeContext.themeObject.button : {}
        }
        onClick={() => setCount2(count2 + 1)}
      >
        Click Here.
      </button>
      <br />
      <span>count2 clicked {count2} times.</span>
    </div>
  );
};
