import { render } from "@testing-library/react";
import { CardUniversity } from "./CardUniversity";
import { IUniversity } from "../../interfaces/IUniversity";

describe("CardUniversity component", () => {
  const university: IUniversity = {
    name: "Test University",
    country: "Test Country",
  };

  it("отображение названия и страны универаситета", () => {
    const { getByText } = render(<CardUniversity data={university} />);
    expect(getByText(university.name)).toBeInTheDocument();
    expect(getByText(university.country)).toBeInTheDocument();
  });
});
