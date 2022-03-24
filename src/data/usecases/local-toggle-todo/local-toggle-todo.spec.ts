import { LocalToggleTodo } from "./local-toggle-todo";
import { ToggleValueMock } from "@/data/test/mock-toggle-value";
import faker from "faker";

interface SutTypes {
  sut: LocalToggleTodo;
  toggleValueMock: ToggleValueMock;
}

const makeSut = (): SutTypes => {
  const toggleValueMock = new ToggleValueMock();
  const sut = new LocalToggleTodo(toggleValueMock);

  return {
    sut,
    toggleValueMock,
  };
};

describe("LocalToggleTodo", () => {
  it("Should call SetValue with correct action", async () => {
    const { sut, toggleValueMock } = makeSut();
    await sut.change({ id: faker.random.uuid() });
    expect(toggleValueMock.action).toBe("TOGGLE_TODO");
  });

  it("Should call SetValue with correct value", async () => {
    const { sut, toggleValueMock } = makeSut();
    const id = faker.random.uuid();
    await sut.change({ id });
    expect(toggleValueMock.value.id).toBe(id);
  });
});
