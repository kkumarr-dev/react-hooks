import { useEffect, useState } from "react";
import { ReactHook, ThemeContext, Themes, Users } from "./pages";
import { AuthContext } from "./pages/AuthContext";
import { UseReducerHook } from "./pages/UseReducerHook";
export const App = () => {
  const [theme, setTheme] = useState("light");
  const [themeObject, setThemeObject] = useState(null);
  const [authStatus, setAuthStatus] = useState(0);
  const [user, setUser] = useState(null);
  useEffect(() => {
    debugger;
    setThemeObject(Themes[theme]);
  }, [theme]);
  const login = () => {
    setAuthStatus(true);
    setUser("kumar");
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
          themeObject: themeObject,
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
        <Users />
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
};
