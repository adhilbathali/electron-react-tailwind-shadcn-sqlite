import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import DeleteButton from "./ui/deleteButton";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export default function TodoBox() {
  const [tasks, setTasks] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState("");

  // ✅ load from DB on mount
  useEffect(() => {
    window.api.getTodos().then(setTasks);
  }, []);

  const addTask = async () => {
    if (!newTask.trim()) return;
    await window.api.addTodo(newTask.trim());
    setTasks(await window.api.getTodos());
    setNewTask("");
  };

  const toggleTask = async (index: number) => {
    const task = tasks[index];
    await window.api.toggleTodo(task.id, !task.done);
    setTasks(await window.api.getTodos());
  };

  const deleteTask = async (index: number) => {
    const task = tasks[index];
    await window.api.deleteTodo(task.id);
    setTasks(await window.api.getTodos());
  };

  return (
    <Card className="w-full max-w-md mx-auto p-4 shadow-lg">
      <CardHeader>
        <CardTitle className="text-center text-xl font-semibold">
          📝 To-Do List
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex gap-2 mb-4">
          <Input
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />
          <Button onClick={addTask}>Add</Button>
        </div>

        <div className="space-y-2">
          {tasks.map((task, index) => (
            <div
              key={task.id}
              className="flex items-center justify-between bg-muted rounded-lg px-3 py-2"
            >
              <div className="flex items-center gap-2">
              <Checkbox
                  checked={task.done}
                  onCheckedChange={() => toggleTask(index)}
                />
                <span
                  className={`${
                    task.done ? "line-through text-muted-foreground" : ""
                  }`}
                >
                  {task.text}
                </span>
              </div>
              <DeleteButton onClick={() => deleteTask(index)} />
            </div>
          ))}

          {tasks.length === 0 && (
            <p className="text-center text-muted-foreground">
              No tasks yet. Add one above 👆
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
