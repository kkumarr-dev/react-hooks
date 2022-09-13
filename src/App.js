import "./App.css";
import { useEffect, useState } from "react";
import {
  ReactHook,
  ThemeContext,
  Users,
  AuthContext,
  UseReducerHook,
  UseRefHook,
} from "./pages";
export const App = () => {
  const [theme, setTheme] = useState("light");
  const [authStatus, setAuthStatus] = useState(0);
  const [user, setUser] = useState(null);
  useEffect(() => {
    debugger;
  }, [theme]);
  const login = (e) => {
    debugger;
    setAuthStatus(e);
    setUser(e ? "kumar" : "");
  };
  const changeTheme = () => {
    debugger;
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <AuthContext.Provider
      value={{ status: authStatus, login: login, user: user }}
    >
      <ThemeContext.Provider
        value={{
          currentTheme: theme,
          setTheme: changeTheme,
        }}
      >
        <i>
          Hi {user} !
          <a href="#" onClick={changeTheme}>
            <span>Change Theme</span>
          </a>
        </i>
        <ReactHook />
        <UseReducerHook />
        <UseRefHook />
        <Users />
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
};
