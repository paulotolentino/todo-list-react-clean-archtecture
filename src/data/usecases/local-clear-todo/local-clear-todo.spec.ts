import { ClearValueMock } from "@/data/test/mock-clear-value";
import { LocalClearTodo } from "./local-clear-todo";

interface SutTypes {
  sut: LocalClearTodo;
  clearValueMock: ClearValueMock;
}

const makeSut = (): SutTypes => {
  const clearValueMock = new ClearValueMock();
  const sut = new LocalClearTodo(clearValueMock);

  return {
    sut,
    clearValueMock,
  };
};

describe("LocalClearTodo", () => {
  it("Should call SetValue with correct action", async () => {
    const { sut, clearValueMock } = makeSut();
    await sut.clear();
    expect(clearValueMock.action).toBe("CLEAR_TODO");
  });
});
