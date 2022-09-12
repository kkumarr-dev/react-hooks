import { createContext } from "react";
export const Themes = {
  light: {
    background: "#FFFFFF",
    color: "#081F48",
    font: "message-box",
    padding: "10px",
    button: {
      padding: "10px",
      color: "red",
      background: "bisque",
      border: "1px",
    },
  },
  dark: {
    background: "#081F48",
    color: "#D4D4D4",
    font: "menu",
    padding: "10px",
    button: {
      padding: "10px",
      color: "red",
      background: "bisque",
      border: "1px",
    },
  },
};
export const ThemeContext = createContext({
  currentTheme: "light",
  themeObject: {},
  setTheme: () => {},
});
