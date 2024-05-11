import { HOME_ROUTE, CONTACTS_ROUTE, ABOUT_ROUTE, UNIVERSITY_ROUTE, DOWNLOAD_ROUTE, CARDS_ROUTE } from "./configs";

describe("Route Constants", () => {
  it("проверка корректности", () => {
    expect(HOME_ROUTE).toBe("home");
    expect(CONTACTS_ROUTE).toBe("contacts");
    expect(ABOUT_ROUTE).toBe("about");
    expect(UNIVERSITY_ROUTE).toBe("university");
    expect(DOWNLOAD_ROUTE).toBe("download");
    expect(CARDS_ROUTE).toBe("cards");
  });
});
