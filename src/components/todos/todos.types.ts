import * as t from "io-ts";

export const TodoCodec = t.type({
  userId: t.number,
  id: t.number,
  title: t.string,
  completed: t.boolean,
});

export type Todo = t.TypeOf<typeof TodoCodec>;

export const TodosCodec = t.array(TodoCodec);

export type Todos = t.TypeOf<typeof TodosCodec>;

export type GetUserTodosRequest = {
  userId: string;
};

export type GetUserTodosResponse = Todos;
