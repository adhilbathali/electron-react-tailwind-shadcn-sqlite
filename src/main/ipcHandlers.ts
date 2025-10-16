import { ipcMain } from "electron";
import { getTodos, addTodo, toggleTodo, deleteTodo } from "./todoRepo";

ipcMain.handle("getTodos", () => getTodos());
ipcMain.handle("addTodo", (_, text: string) => addTodo(text));
ipcMain.handle("toggleTodo", (_, id: number, done: boolean) => toggleTodo(id, done));
ipcMain.handle("deleteTodo", (_, id: number) => deleteTodo(id));
