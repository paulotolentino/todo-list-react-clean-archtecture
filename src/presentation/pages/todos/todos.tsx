import React, { useEffect } from "react";
import { FC, useState } from "react";
import { TodoModel } from "domain/models/todo-model";
import { GetTodos } from "domain/usecases/get-todos/get-todos";
import { SaveTodo } from "domain/usecases/save-todo/save-todo";
import { ToggleTodo } from "domain/usecases/toggle-todo/toggle-todo";
import { ClearTodo } from "domain/usecases/clear-todo/clear-todo";

interface TodoParams {
  saveTodo: SaveTodo;
  loadTodo: GetTodos;
  toggleTodo: ToggleTodo;
  clearTodo: ClearTodo;
}

const Todos: FC<TodoParams> = ({
  saveTodo,
  loadTodo,
  toggleTodo,
  clearTodo,
}) => {
  const [state, setState] = useState({
    taskError: "",
    isLoading: false,
    task: "",
  });

  const [todos, setTodos] = useState<TodoModel[]>([]);

  const getData = async () => {
    const result = await loadTodo.get();
    setTodos(result);
  };

  useEffect(() => {
    getData();
  }, [loadTodo]);

  const submitForm = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    try {
      if (state.taskError || state.isLoading) {
        return;
      }
      setState({
        ...state,
        isLoading: true,
      });
      const todoToSave = {
        id: state.task,
        task: state.task,
      };
      await saveTodo.save(todoToSave);
      setState({
        taskError: "",
        isLoading: false,
        task: "",
      });

      getData();
    } catch (error: any) {
      setState({
        ...state,
        isLoading: false,
        taskError: error.message,
      });
    }
  };

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      task: event.target.value,
      taskError: "",
    });
  };

  const toggleItem = async (id: string) => {
    toggleTodo.change({ id });

    getData();
  };

  const clearFinished = async () => {
    await clearTodo.clear();

    getData();
  };

  const clearAll = async () => {};

  return (
    <main>
      <form onSubmit={submitForm}>
        <input type="text" value={state.task} onChange={changeInput} />
        <input type="submit" value="Salvar" />
      </form>
      {state.taskError && <span>{state.taskError}</span>}
      <section className="list">
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={todo.done ? "done" : "non-done"}
              onClick={() => toggleItem(todo.id)}
            >
              {todo.task}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <input
          type="button"
          onClick={clearFinished}
          value="Limpar Concluídos"
        />
        <input type="button" onClick={clearAll} value="Limpar Todos" />
      </section>
    </main>
  );
};

export default Todos;
