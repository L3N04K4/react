import { IUniversity } from "../../interfaces/IUniversity";
import { CardStyled, CardTitle, CardText } from "./DynamicPagination.styled";

import { FC } from "react";

export const CardUniversity: FC<{ data: IUniversity }> = ({ data }) => (
  <CardStyled>
    <CardTitle>{data.name}</CardTitle>
    <CardText>{data.country}</CardText>
  </CardStyled>
);
