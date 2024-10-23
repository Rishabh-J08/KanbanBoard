// Dashboard.tsx
import React from 'react';
import { ProjectStats } from './ProjectStats';
import { TeamOverview } from './TeamOverView';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectStats />
        <TeamOverview />
      </div>
    </div>
  );
};