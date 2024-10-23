export interface Task {
    id: string;
    title: string;
    description: string;
    status: 'todo' | 'in-progress' | 'review';
    priority: 'low' | 'medium' | 'high';
    assigneeId?: string;
    prejectId: string;
    labels: string[]
    dueDate?: Date
    createdAt: Date;
    updatedAt: Date;
}