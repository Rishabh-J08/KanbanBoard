import { User} from "../../types/user";
import { Project } from "../../types/project";
import { Task } from "../../types/task";
export interface DashboardStats {
    totalProjects: number;
    activeProjects: number;
    completedProjects: number;
    onHoldProjects: number;
    totalTasks: number;
    overdueTasks: number;
    upcomingDeadlines: Task[];
  }
  
  export interface TeamMemberStats {
    user: User;
    assignedTasks: number;
    completedTasks: number;
    overdueTasks: number;
    currentWorkload: number;
  }
  
  export interface ProjectProgress {
    project: Project;
    completedTasks: number;
    totalTasks: number;
    status: 'on-track' | 'at-risk' | 'behind';
    nextMilestone?: string;
  }