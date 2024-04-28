import { useState } from "react";

export const useCurrentTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("light");

  const changeTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setCurrentTheme(newTheme);
  };
  const isDarkMode = currentTheme === "dark";
  return { currentTheme, setCurrentTheme, changeTheme, isDarkMode };
};