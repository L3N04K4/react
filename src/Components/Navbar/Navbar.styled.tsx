import styled from "styled-components";
import { StyledNavProps } from "../../interfaces/IStyledNavProps";
export const Navigation = styled.nav<StyledNavProps>`
  color: --text-color;
  height: 100%;
  align-items: center;
  gap: 20px;
  display: ${({ displayflex }) => (displayflex ? displayflex : "flex")};
  justify-content: space-around;
  font-size: 20px;
  text-align: center;
  margin-bottom: 5%;
`;
