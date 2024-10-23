// Import necessary dependencies
import React, { useState } from 'react';
import {
  LayoutDashboard,
  Kanban,
  Users,
  Star,
  ChevronRight,
  ChevronLeft,
  Settings,
  PlusCircle,
  Clock,
  Flag
} from 'lucide-react';

// TypeScript interfaces
interface Project {
  id: string;
  name: string;
  favorite: boolean;
}

interface SidebarProps {
  className?: string;
}

// Sidebar Component
const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  // State for sidebar collapse
  const [isCollapsed, setIsCollapsed] = useState(false);
  // State for favorite projects
  const [favoriteProjects] = useState<Project[]>([
    { id: '1', name: 'Website Redesign', favorite: true },
    { id: '2', name: 'Mobile App', favorite: true },
    { id: '3', name: 'API Integration', favorite: true }
  ]);

  // Navigation items with icons
  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', href: '#' },
    { icon: <Kanban size={20} />, label: 'Boards', href: '#' },
    { icon: <Users size={20} />, label: 'Teams', href: '#' },
    { icon: <Clock size={20} />, label: 'Timeline', href: '#' },
    { icon: <Flag size={20} />, label: 'Backlog', href: '#' }
  ];

  return (
    <div
      className={`${className} relative h-screen bg-white border-r border-gray-200 transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Collapse Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-16 bg-white border border-gray-200 
                 rounded-full p-1.5 hover:bg-gray-50"
      >
        {isCollapsed ? (
          <ChevronRight size={16} />
        ) : (
          <ChevronLeft size={16} />
        )}
      </button>

      {/* Main Navigation */}
      <div className="px-4 py-6">
        <nav className="space-y-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center px-2 py-2.5 text-sm font-medium 
                     text-gray-700 rounded-lg hover:bg-indigo-50 
                     hover:text-indigo-600 group transition-colors"
            >
              <span className="flex-shrink-0">{item.icon}</span>
              {!isCollapsed && (
                <span className="ml-3">{item.label}</span>
              )}
            </a>
          ))}
        </nav>
      </div>

      {/* Favorite Projects Section */}
      {!isCollapsed && (
        <div className="px-4 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-semibold text-gray-500 uppercase">
              Favorite Projects
            </h3>
            <button className="text-gray-400 hover:text-indigo-600">
              <PlusCircle size={16} />
            </button>
          </div>
          <div className="space-y-1">
            {favoriteProjects.map((project) => (
              <a
                key={project.id}
                href={`#project-${project.id}`}
                className="flex items-center px-2 py-1.5 text-sm text-gray-700 
                       rounded-lg hover:bg-indigo-50 hover:text-indigo-600 
                       group transition-colors"
              >
                <Star
                  size={16}
                  className="flex-shrink-0 text-yellow-400"
                  fill="currentColor"
                />
                <span className="ml-3">{project.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Settings Section */}
      <div className="absolute bottom-0 w-full border-t border-gray-200">
        <a
          href="#settings"
          className="flex items-center px-6 py-4 text-sm font-medium 
                 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 
                 transition-colors"
        >
          <Settings size={20} />
          {!isCollapsed && <span className="ml-3">Settings</span>}
        </a>
      </div>
    </div>
  );
};

export default Sidebar;