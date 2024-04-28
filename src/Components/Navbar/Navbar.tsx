import React from "react";
import { NavLink,  useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { ABOUT_ROUTE, CONTACTS_ROUTE, HOME_ROUTE, UNIVERSITY_ROUTE, DOWNLOAD_ROUTE } from "../../routes/configs";
import { useAuth } from "../../hooks/useAuth";
import { useCurrentTheme } from "../../hooks/useCurrentTheme";
import { Navigation } from "./Navbar.styled";
import ThemeDark from '../Theme/ThemeDark';
import ThemeLight from '../Theme/ThemeLight';


const Button = styled.button`
    width: auto;
    height: 100%;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
`
const ChangeThemeButton = styled.button`
  color: --text-color;
  width: 100px;
  height: 52px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
`;


const ChangeThemeIconSvg: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
    return (
        
            <>
                {isDarkMode ? <ThemeLight /> : <ThemeDark />}
            </>
        
    );
};

export const Navbar: React.FC = () => {
    const { isAuth, setIsAuth } = useAuth();
    
    const navigate = useNavigate();

    const handleLogin = () => {
        setIsAuth(!isAuth);
    }
    const handleLogout = () => {
        setIsAuth(false);
        navigate("/home");
    }
    const { changeTheme, isDarkMode } = useCurrentTheme();

    return (
            <header>
                <Navigation displayFlex="flex">
                    <NavLink className={'link'} to={HOME_ROUTE}>Главная</NavLink>
                    <NavLink className={'link'} to={ABOUT_ROUTE}>О нас</NavLink>
                    <NavLink className={'link'} to={CONTACTS_ROUTE}>Контакты</NavLink>
                    <NavLink className={'link'} to={DOWNLOAD_ROUTE}>Файл PDF</NavLink>
                    { isAuth && <NavLink className={'link'} to={UNIVERSITY_ROUTE}>Университеты</NavLink> }
                    <Button onClick={isAuth ? handleLogout : handleLogin}>{!isAuth ? 'Войти' : 'Выйти'}</Button>
                    <ChangeThemeButton onClick={() => changeTheme()}>
                    <ChangeThemeIconSvg isDarkMode={isDarkMode} />
                </ChangeThemeButton>
                </Navigation>
            </header>
    )
}