// import {
//   Todo,
//   TodoParams,
// } from "domain/usecases/local-save-todo/local-save-todo";
import { GetValueStumb } from "@/data/test/mock-get-value";
import { SetValueMock } from "@/data/test/mock-set-value";
import faker from "faker";
import { LocalSaveTodo } from "./local-save-todo";

// class LocalSaveTodo implements Todo {
//   constructor(private readonly setValue: SetValue) {}

//   async save(params: TodoParams): Promise<void> {
//     return this.setValue.set(params, "SAVE_TODO");
//   }
// }

// interface SetValue {
//   set: (value: any, action: string) => Promise<void>;
// }

// class SetValueMock implements SetValue {
//   value: any;
//   action!: string;

//   async set(value: any, action: string): Promise<void> {
//     this.value = value;
//     this.action = action;
//   }
// }

interface SutTypes {
  sut: LocalSaveTodo;
  setValueMock: SetValueMock;
}

const makeSut = (): SutTypes => {
  const setValueMock = new SetValueMock();
  const getValueStumb = new GetValueStumb();
  const sut = new LocalSaveTodo(setValueMock, getValueStumb);

  return {
    sut,
    setValueMock,
  };
};

describe("LocalSaveTodo", () => {
  it("Should call SetValue with correct action", async () => {
    // const setValueMock = new SetValueMock();
    // const sut = new LocalSaveTodo(setValueMock);
    const { sut, setValueMock } = makeSut();
    await sut.save({ task: faker.random.words(3), id: faker.random.uuid() });
    expect(setValueMock.action).toBe("ADD_TODO");
  });

  it("Should call SetValue with correct value", async () => {
    // const setValueMock = new SetValueMock();
    // const sut = new LocalSaveTodo(setValueMock);
    const { sut, setValueMock } = makeSut();
    const task = faker.random.words(3);
    const id = faker.random.uuid();
    await sut.save({ task, id });
    expect(setValueMock.value).toEqual({ id, task, done: false });
  });

  test("Should throw if SetValue threows", async () => {
    const { setValueMock, sut } = makeSut();
    jest.spyOn(setValueMock, "set").mockRejectedValueOnce(new Error());
    const task = faker.random.words(3);
    const id = faker.random.uuid();
    const promise = sut.save({ task, id });
    await expect(promise).rejects.toThrow(new Error());
  });
});
