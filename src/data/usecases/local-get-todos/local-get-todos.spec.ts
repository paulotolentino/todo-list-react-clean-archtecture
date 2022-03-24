import { GetValueStumb } from "@/data/test/mock-get-value";
import { LocalGetTodos } from "./local-get-todos";

interface SutTypes {
  sut: LocalGetTodos;
  getValueStumb: GetValueStumb;
}

const makeSut = (): SutTypes => {
  const getValueStumb = new GetValueStumb();
  const sut = new LocalGetTodos(getValueStumb);

  return {
    sut,
    getValueStumb,
  };
};

describe("LocalSaveTodo", () => {
  it("Should calls LocalGetTodos and return empty todo list", async () => {
    const { sut } = makeSut();
    const todos = await sut.get();
    expect(todos).toEqual([]);
  });

  it("Should throw if GetValue threows", async () => {
    const { getValueStumb, sut } = makeSut();
    jest.spyOn(getValueStumb, "get").mockRejectedValueOnce(new Error());
    const promise = sut.get();
    await expect(promise).rejects.toThrow(new Error());
  });
});
