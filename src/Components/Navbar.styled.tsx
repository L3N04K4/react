import styled from "styled-components";
import { StyledProps } from "../interfaces/IStyledProps";
export const Navigation = styled.nav<StyledProps>`
  color: --text-color;
  height: 100%;
  align-items: center;
  gap: 20px;
  display: ${({displayFlex}) => displayFlex ? displayFlex : 'flex'};
  justify-content: space-around;
  font-size: 20px;
  text-align: center;
  margin-bottom: 5%;
`;