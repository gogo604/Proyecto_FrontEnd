import { useState } from 'react';
import './TaskWidget.css';

interface Task {
  id: string;
  label: string;
  done: boolean;
  subject: string;
}

const INITIAL: Task[] = [
  { id: '1', label: 'Entregar informe de Algoritmos', done: false, subject: 'Algoritmos' },
  { id: '2', label: 'Repasar LCIS para la presentación', done: false, subject: 'Algoritmos' },
  { id: '3', label: 'Ejercicios de Inglés Técnico — Unidad 6', done: true, subject: 'Inglés' },
  { id: '4', label: 'Diagrama UML del proyecto', done: false, subject: 'Ing. de Software' }
];

export function TaskWidget() {
  const [tasks, setTasks] = useState(INITIAL);

  const toggle = (id: string) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const done = tasks.filter((t) => t.done).length;

  return (
    <div className="glass-card task-widget">
      <div className="task-widget-header">
        <h3>Tareas pendientes</h3>
        <span className="task-progress">{done}/{tasks.length}</span>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.done ? 'is-done' : ''}>
            <button className="task-check" onClick={() => toggle(task.id)} aria-label="Marcar tarea">
              {task.done ? '✔' : ''}
            </button>
            <div>
              <p className="task-label">{task.label}</p>
              <span className="task-subject">{task.subject}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
