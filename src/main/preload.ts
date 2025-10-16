import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  getTodos: () => ipcRenderer.invoke("getTodos"),
  addTodo: (text: string) => ipcRenderer.invoke("addTodo", text),
  toggleTodo: (id: number, done: boolean) => ipcRenderer.invoke("toggleTodo", id, done),
  deleteTodo: (id: number) => ipcRenderer.invoke("deleteTodo", id)
});
