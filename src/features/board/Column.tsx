import React from 'react';
import { Task } from '../../types/task';
import { TaskCard } from './TaskCard';

interface ColumnProps {
  title: string;
  tasks: Task[];
  onTaskClick: (task: Task) => void;
}

export const Column: React.FC<ColumnProps> = ({ title, tasks, onTaskClick }) => {
  return (
    <div className="w-80 bg-gray-50 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold">{title}</h2>
        <span className="text-sm text-gray-600">{tasks.length}</span>
      </div>
      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onClick={onTaskClick}
          />
        ))}
      </div>
    </div>
  );
};
