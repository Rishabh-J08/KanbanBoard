import { useState, useEffect } from 'react';
import { Task } from '../../types/task';

export const useBoard = (boardId: string) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setIsLoading(true);
        // Implement API call to fetch tasks
        // const response = await api.getTasks(boardId);
        // setTasks(response);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, [boardId]);

  const updateTask = async (taskId: string, updates: Partial<Task>) => {
    try {
      // Implement API call to update task
      // const updatedTask = await api.updateTask(taskId, updates);
      setTasks(tasks.map(task => 
        task.id === taskId ? { ...task, ...updates } : task
      ));
    } catch (err) {
      setError(err as Error);
    }
  };

  return {
    tasks,
    isLoading,
    error,
    updateTask,
  };
};