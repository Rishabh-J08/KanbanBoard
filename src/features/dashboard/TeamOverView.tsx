import React from 'react';
import { Card } from '../../components/ui/Card';
import { Avatar } from '../../components/common/Avatar';

export const TeamOverview: React.FC = () => {
  const teamMembers = [
    { id: 1, name: 'John Doe', role: 'Project Manager', tasks: 8 },
    { id: 2, name: 'Jane Smith', role: 'Developer', tasks: 12 },
    { id: 3, name: 'Mike Johnson', role: 'Designer', tasks: 6 },
  ];

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Team Overview</h2>
      <div className="space-y-4">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <Avatar size="sm" alt={''} />
              <div>
                <div className="font-medium">{member.name}</div>
                <div className="text-sm text-gray-600">{member.role}</div>
              </div>
            </div>
            <div className="text-sm">
              <span className="font-medium">{member.tasks}</span> active tasks
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};