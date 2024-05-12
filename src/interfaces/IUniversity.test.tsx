import { IUniversity } from "./IUniversity";

describe("interface", () => {
  it("проверка корректности значений", () => {
    const university: IUniversity = {
      country: "China",
      name: "Hunan University",
    };

    expect(university.country).toBe("China");
    expect(university.name).toBe("Hunan University");
  });
});
