import db from "./db";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export function getTodos(): Todo[] {
  return db
    .prepare("SELECT * FROM todos ORDER BY id DESC")
    .all()
    .map((task: any) => ({
      ...task,
      done: !!task.done,
    })) as Todo[];
}


export function addTodo(text: string): Todo {
  const info = db.prepare("INSERT INTO todos (text) VALUES (?)").run(text);
  return { id: info.lastInsertRowid as number, text, done: false };
}

export function toggleTodo(id: number, done: boolean): void {
  db.prepare("UPDATE todos SET done = ? WHERE id = ?").run(done ? 1 : 0, id);
}

export function deleteTodo(id: number): void {
  db.prepare("DELETE FROM todos WHERE id = ?").run(id);
}
