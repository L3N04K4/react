import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  ABOUT_ROUTE,
  CONTACTS_ROUTE,
  HOME_ROUTE,
  UNIVERSITY_ROUTE,
  DOWNLOAD_ROUTE,
  CARDS_ROUTE,
} from "../../routes/configs";
import { useAuth } from "../../hooks/useAuth";
import { useCurrentTheme } from "../../hooks/useCurrentTheme";
import { Navigation, Button, ChangeThemeButton } from "../../GlobalStyles";
import ThemeDark from "../Theme/ThemeDark";
import ThemeLight from "../Theme/ThemeLight";

const ChangeThemeIconSvg: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  return <>{isDarkMode ? <ThemeLight /> : <ThemeDark />}</>;
};

export const Navbar: React.FC = () => {
  const { isAuth, setIsAuth } = useAuth();

  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuth(!isAuth);
  };
  const handleLogout = () => {
    setIsAuth(false);
    navigate("/home");
  };
  const { changeTheme, isDarkMode } = useCurrentTheme();

  return (
    <header>
      <Navigation displayFlex="flex">
        <NavLink className={"link"} to={HOME_ROUTE}>
          Главная
        </NavLink>
        <NavLink className={"link"} to={ABOUT_ROUTE}>
          О нас
        </NavLink>
        <NavLink className={"link"} to={CONTACTS_ROUTE}>
          Контакты
        </NavLink>
        <NavLink className={"link"} to={DOWNLOAD_ROUTE}>
          Файл PDF
        </NavLink>
        <NavLink className={"link"} to={CARDS_ROUTE}>
          Карточки
        </NavLink>
        {isAuth && (
          <NavLink className={"link"} to={UNIVERSITY_ROUTE}>
            Университеты
          </NavLink>
        )}
        <Button onClick={isAuth ? handleLogout : handleLogin}>{!isAuth ? "Войти" : "Выйти"}</Button>
        <ChangeThemeButton onClick={() => changeTheme()}>
          <ChangeThemeIconSvg isDarkMode={isDarkMode} />
        </ChangeThemeButton>
      </Navigation>
    </header>
  );
};
