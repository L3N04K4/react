import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "./Navbar";

describe("Navbar component", () => {
  it("отображение навигации", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
  });

  it("displays the correct links", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    expect(getByText("Главная")).toBeInTheDocument();
    expect(getByText("О нас")).toBeInTheDocument();
    expect(getByText("Контакты")).toBeInTheDocument();
    expect(getByText("Файл PDF")).toBeInTheDocument();
    expect(getByText("Карточки")).toBeInTheDocument();
  });

  it("проверка входа и выхода", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    fireEvent.click(getByText("Войти"));
    expect(getByText("Выйти")).toBeInTheDocument();

    fireEvent.click(getByText("Выйти"));
    expect(getByText("Войти")).toBeInTheDocument();
  });
});
