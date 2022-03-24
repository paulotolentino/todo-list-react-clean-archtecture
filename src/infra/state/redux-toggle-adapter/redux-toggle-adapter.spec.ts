import { ReduxToggleAdapter } from "./redux-toggle-adapter";
import faker from "faker";

describe("ReduxToggleAdapter", () => {
  it("Should calls dispatch with correct values", async () => {
    const mockDispatch = jest.fn();
    const sut = new ReduxToggleAdapter(mockDispatch);
    const type = faker.database.column();
    const value = faker.random.word();
    await sut.toggle(value, type);
    expect(mockDispatch).toHaveBeenCalledWith({ type, value });
  });
});
