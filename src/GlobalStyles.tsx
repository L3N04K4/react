import { createGlobalStyle, styled } from "styled-components";
import { StyledNavProps } from "../src/interfaces/IStyledNavProps";
import { StyleSheet } from "@react-pdf/renderer";
export const GlobalStyles = createGlobalStyle`
    :root {
        --dark: black;
        --light: white;
        --transition: all .25s;
        --buttonColor: lightgrey;
        --buttonColorDisabled: rgba(211, 211, 211, 0.467); 
    }

    html, body {
        background-color: var(--theme);
        color: var(--text-color);
    }

    *[data-theme=light] {
        transition: var(--transition);
        --theme: var(--light);
        --text-color: var(--dark);
        a {
            color: var(--dark);
        }
        input{
            background: #f5f5f5;
            color: var(--dark);
        }
        button {
            background: var(--buttonColor);
            color: var(--dark);
            &:disabled {
                background: var(--buttonColorDisabled);
            }
        }
        svg path {
            fill: var(--dark);
        }
        thead, tbody, .ant-table-cell {
            background-color: var(--light) !important;
            color: var(--dark) !important;
        }
    }

    *[data-theme=dark] {
        transition: var(--transition);
        --theme: var(--dark);
        --text-color: var(--light);
        a {
            color: var(--light);
        }
        button {
            background: var(--buttonColorDisabled);
            color: var(--light);
            &:disabled {
                background: var(--buttonColor);
            }
        }
        svg path{
            fill: var(--light);
        }
        thead, tbody, .ant-table-cell {
            background-color: var(--dark) !important;
            color: var(--light) !important;
        }
    }
`;
export const Navigation = styled.nav<StyledNavProps>`
  color: --text-color;
  height: 100%;
  align-items: center;
  gap: 20px;
  display: ${({ displayFlex }) => (displayFlex ? displayFlex : "flex")};
  justify-content: space-around;
  font-size: 20px;
  text-align: center;
  margin-bottom: 5%;
`;
export const Button = styled.button`
  width: auto;
  height: 100%;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
`;
export const ChangeThemeButton = styled.button`
  color: --text-color;
  width: 100px;
  height: 52px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
`;
export const CardStyled = styled.div`
  height: max-content;
  background-color: --theme;
  color: --theme-text;
  border: 2px solid;
  border-radius: 10px;
`;
export const CardTitle = styled.h1`
  font-size: 25px;
  height: 90px;
`;
export const CardText = styled.h1`
  font-size: 15px;
  color: --theme-text;
`;
export const PaginationContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;
export const Pagination = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 15px;
`;
export const LoadingText = styled.div`
  text-align: center;
  font-size: 16px;
  margin: 15px 0;
  color: --theme-text;
`;
export const LoadingInView = styled.div`
  height: 200px;
  background-color: --theme-text;
  border-radius: 10px;
  font-weight: bold;
  color: --theme;
`;
export const SiteForm = styled.form`
  color: --text-color;
  display: flex;
  width: 500px;
  margin: 5rem auto;
  flex-direction: column;
  gap: 10px;
`;

export const FormInput = styled.input`
  color: --text-color;
  padding: 0.7rem 1.7rem;
  margin: 5px;
  border-radius: 10px;
`;

export const FormButton = styled.button`
  color: --text-color;
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 5px;
  font-size: 17px;
  &:hover {
    opacity: 0.7;
  }
  &:disabled {
    opacity: 0.2;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "black",
    color: "white",
  },
  section: {
    margin: 5,
    padding: 5,
  },
  picture: {
    width: "150px",
    height: "150px",
    objectFit: "cover",
  },
});
