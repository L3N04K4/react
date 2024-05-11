import { render } from "@testing-library/react";
import { About } from "./About";
import { Contacts } from "./Contacts";
import { Home } from "./Home";
import { University } from "./University";

describe("заголовок", () => {
  test("рендер заголовка О нас", () => {
    const { getByText } = render(<About />);
    const heading = getByText(/О нас/i);
    expect(heading).toBeInTheDocument();
  });

  test("рендер заголовка Контакты", () => {
    const { getByText } = render(<Contacts />);
    const heading = getByText(/Контакты/i);
    expect(heading).toBeInTheDocument();
  });

  test("рендер заголовка Главная", () => {
    const { getByText } = render(<Home />);
    const heading = getByText(/Главная/i);
    expect(heading).toBeInTheDocument();
  });

  test("рендер заголовка Университеты", () => {
    const { getByText } = render(<University />);
    const heading = getByText(/Университеты/i);
    expect(heading).toBeInTheDocument();
  });
});
