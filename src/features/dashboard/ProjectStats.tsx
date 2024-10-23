import React from 'react';
import { Card } from '../../components/ui/Card';

export const ProjectStats: React.FC = () => {
  const stats = [
    { label: 'Total Projects', value: 12 },
    { label: 'In Progress', value: 5 },
    { label: 'Completed', value: 7 },
    { label: 'On Hold', value: 0 },
  ];

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Project Statistics</h2>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </Card>
  );
};