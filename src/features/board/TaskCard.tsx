import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/common/Badge';
import { Avatar } from '../../components/common/Avatar';
import { Task } from '../../types/task';

interface TaskCardProps {
  task: Task;
  onClick: (task: Task) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onClick }) => {
  return (
    <Card
      className="p-4 cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => onClick(task)}
    >
      <div className="space-y-3">
        <h3 className="font-medium">{task.title}</h3>
        <p className="text-sm text-gray-600">{task.description}</p>
        <div className="flex items-center justify-between">
          <Badge variant={task.priority}>{task.priority}</Badge>
          <Avatar
            src={task.assignee.avatar}
            alt={task.assignee.name}
            size="sm"
          />
        </div>
      </div>
    </Card>
  );
};