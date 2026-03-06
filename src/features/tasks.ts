import { useState useEffect } from 'react';

const getTasksFromLocalStorage = (): Task[] => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse) : [];
};

const saveTasksToLocalStorage = (tasks: Task[]) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const useTasks = () => {
  const [tasks, setTasks] = useState(getTasksFromLocalStorage);

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  editTask = (id: number, task: Task) => {
    setTasks(tasks.map((t) => (t.id === id ? task : t)));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const markTaskAsDone = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: true } : t)));
  };

  return { tasks, addTask, editTask, deleteTask,TaskAsDone };
};

export default useTasks;