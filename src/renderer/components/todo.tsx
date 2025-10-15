import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from './ui/card'
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import DeleteButton from "./ui/deleteButton";

export default function TodoBox() {
  const [tasks, setTasks] = useState<{ text: string; done: boolean }[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { text: newTask.trim(), done: false }]);
    setNewTask("");
  };

  const toggleTask = (index: number) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
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
              key={index}
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
              <DeleteButton onClick={() => deleteTask(index)}/>
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
