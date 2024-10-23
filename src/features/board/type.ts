import { User } from "../../types/user";
export interface Board {
    id: string;
    title: string;
    description: string;
    columns: Column[];
    members: User[];
    createdBy: User;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface Column {
    id: string;
    title: string;
    taskIds: string[];
    limit?: number;
  }
  
  export interface TaskDragItem {
    id: string;
    columnId: string;
    index: number;
  }
  