import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { ThemeContext } from "./ThemeContext";
import { UseFetchData } from "./UseFetchData";

export const Users = () => {
  const userData = UseFetchData(`https://api.github.com/users`);
  const _authContext = useContext(AuthContext);
  const _themeContext = useContext(ThemeContext);

  return (
    <div style={_themeContext.themeObject}>
      {_authContext.status ? (
        userData &&
        userData.map((x) => (
          <div key={x.id}>
            <a href={x.html_url} target="_blank" rel="noreferrer">
              <img src={x.avatar_url} height="100" width="100" alt="#" />
            </a>
            <i> {x.login} </i>
          </div>
        ))
      ) : (
        <>
          <br />
          <span>Please login</span>
          <br />
          <button
            style={
              _themeContext.themeObject ? _themeContext.themeObject.button : {}
            }
            onClick={_authContext.login}
          >
            Login
          </button>
        </>
      )}
    </div>
  );
};
