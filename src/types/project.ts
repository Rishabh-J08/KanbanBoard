export interface Project {
    id: string;
    name: string;
    description: string;
    ownerId: string;
    teamId: string;
    status: 'active' | 'archived' | 'completed';
    createdAt: Date;
    updatedAt: Date;
}