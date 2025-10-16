export {};

declare global {
  interface Window {
    api: {
      getTodos: () => Promise<{ id: number; text: string; done: boolean }[]>;
      addTodo: (text: string) => Promise<void>;
      toggleTodo: (id: number, done: boolean) => Promise<void>;
      deleteTodo: (id: number) => Promise<void>;
    };
  }
}
