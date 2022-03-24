import { ReduxGetAdapter } from "./redux-get-adapter";

describe("ReduxGetAdapter", () => {
  it("Should calls ReduxGetAdapter and get initial empty todo list", async () => {
    const sut = new ReduxGetAdapter();
    const todos = await sut.get();
    expect(todos).toEqual([]);
  });
});
