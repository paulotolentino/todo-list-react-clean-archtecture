import { ReduxClearAdapter } from "./redux-clear-adapter";
import faker from "faker";

describe("ReduxClearAdapter", () => {
  it("Should calls dispatch with correct values", async () => {
    const mockDispatch = jest.fn();
    const sut = new ReduxClearAdapter(mockDispatch);
    const type = faker.database.column();
    await sut.clear(type);
    expect(mockDispatch).toHaveBeenCalledWith({ type });
  });
});
