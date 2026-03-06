import React, { useState, useEffect } from 'react';
import useTasks from './features/tasks';
import './styles/theme.css';

const App () => {
  { tasks, addTask, editTask, deleteTask, markTaskAsDone } = useTasks();
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('low');
  const [searchQuery,Query] = useState('');
  const [draggedTask, setDraggedTask] = useState(null);
  const [columns, setColumns] = useState([
    { id: 1, title: 'A Fazer', tasks: [] },
    { id: 2, title: 'Em Curso', tasks: [] },
    { id: 3, title: 'Concluído', tasks: [] },
  ]);

  useEffect(() => {
    const tasksWithColumns =.map((task) => {
      const column = columns.find((c) => c.id === task.columnId);
      { ...task, };
    });
   Columns(
      columns.map((column) => ({
        ...column,
 tasks: tasksWithColumns.filter((task) => task.columnId === column.id),
      }))
    );
  }, [tasks]);

  const handleAddTask = () => {
    const newTask: Task = {
      id: tasks.length + 1,
      title: newTaskTitle,
      description: newTaskDescription,
      priority: newTaskPriority,
      done: false,
      columnId: 1,
    };
    addTask(newTask);
    setNewTaskTitle('');
    setNewTaskDescription('');
    setNewTaskPriority('low');
  };

  const handleEditTask = (id: number, task: Task) => {
    editTask(id, task);
  };

  const handleDeleteTask = (id: number) => {
    deleteTask(id);
  };

  const handleTaskAsDone = (id: number) => {
    markTaskDone(id);
  };

  const handleDragStart = (task: Task) => {
    setDraggedTask);
  };

  const handleDragOver = (column: any) => {
    if (draggedTask) {
      const newTasks = tasks.map((task) =>
        task.id === draggedTask.id ? { ...task, columnId: column.id } : task
      );
      setColumns(
        columns.map((c => ({
          ...c,
          tasks: newTasks.filter((task) => task.columnId === c.id),
        }))
      );
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="kanban-board">
      {.map((column) (
        <div
          key={column.id}
          className="column"
          onDragOver={() => handleDragOver(column)}
        >
          <h2 className="column-header">{column.title}</h2>
          {column.tasks
            .filter((task) =>
              task.title.toLowerCase().includesQuery.toLowerCase())
            )
            .map((task) => (
              <div
                key={task.id}
                className="task"
                draggable
                onDragStart={() => handleDragStart(task)}
              >
                <h3 className="task-header">{task.title}</h3>
                <p>{task.description}</p>
                <div className="priorityicator" />
                {task.priority === 'low' && (
                  <div className="low-priority priority-indicator" />
                )}
                {task.priority === 'medium' && (
                  <div className="medium-priority priority-indicator" />
                )}
                {task === 'high' (
                  <div className="high-priority priority-ind" />
                )}
                <button
                  className="edit-task-button"
                  onClick={() => handleEditTask(task.id, task)}
                >
                  Editar
                </button>
                <button
                  className="delete-task-button"
                  onClick={() => handleDeleteTask(task)}
                >
                  Eliminar
                </button>
                <button
                  className="done-task-button"
                  onClick={() => handleMarkTaskAsDone(task.id)}
                >
                  Marcar como Feito
                </button>
              </>
            ))}
        </div>
      ))}
      <div className="add-task-button" onClick={handleAddTask}>
        Adicionar Tarefa
      </div>
      <input
        type="text"
        className="input"
        placeholder="Procurar tare"
        value={searchQuery}
        onChange={handleSearch}
      />
      <div className="new-task-form">
 <input
          type="text"
          placeholder="Título da tarefa"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descrição da tarefa"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
        <select
          value={newTaskPriority}
          onChange={(e) => setTaskPriority(e.target)}
        >
         option value="lowBaixa</option>
          <option value="medium">Média</option>
          <option value="high">Alta</option>
        </select>
      </div>
    </div>
  );
};

export default App;