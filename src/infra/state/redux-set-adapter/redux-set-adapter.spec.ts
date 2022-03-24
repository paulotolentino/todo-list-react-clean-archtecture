import { ReduxSetAdapter } from "./redux-set-adapter";
import faker from "faker";

describe("ReduxSetAdapter", () => {
  it("Should calls dispatch with correct values", async () => {
    const mockDispatch = jest.fn();
    const sut = new ReduxSetAdapter(mockDispatch);
    const type = faker.database.column();
    const value = faker.random.word();
    await sut.set(value, type);
    expect(mockDispatch).toHaveBeenCalledWith({ type, value });
  });
});
