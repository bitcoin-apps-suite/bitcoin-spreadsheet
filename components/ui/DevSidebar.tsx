'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Code,
  GitBranch,
  Bug,
  FileText,
  DollarSign,
  Users,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Zap,
  Package,
  Terminal,
  Activity
} from 'lucide-react';

interface DevSidebarProps {
  onCollapsedChange?: (collapsed: boolean) => void;
}

const DevSidebar: React.FC<DevSidebarProps> = ({ onCollapsedChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('devSidebarCollapsed');
      if (saved) setIsCollapsed(saved === 'true');
    }
  }, []);
  const pathname = usePathname();

  useEffect(() => {
    localStorage.setItem('devSidebarCollapsed', isCollapsed.toString());
    onCollapsedChange?.(isCollapsed);
  }, [isCollapsed, onCollapsedChange]);

  const menuItems: Array<{
    path?: string;
    icon?: any;
    label?: string;
    badge?: string;
    divider?: boolean;
    external?: boolean;
  }> = [
      { path: '/token', icon: DollarSign, label: '$bSheets', badge: 'NEW' },
      { path: '/contracts', icon: FileText, label: 'Contracts', badge: '8' },
      { path: '/tasks', icon: Terminal, label: 'Tasks', badge: '25+' },
      { path: '/contributions', icon: Users, label: 'Contributors', badge: '1' },
      { path: '/docs', icon: BookOpen, label: 'Documentation' },
      { divider: true },
      { path: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet', icon: GitBranch, label: 'GitHub', external: true },
      { path: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/issues', icon: Bug, label: 'Issues', external: true, badge: '12' },
      { path: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/pulls', icon: Code, label: 'Pull Requests', external: true },
      { divider: true },
      { path: '/api', icon: Package, label: 'API Reference' },
      { path: '/changelog', icon: FileText, label: 'Changelog' },
      { path: '/status', icon: Activity, label: 'Status', badge: '🟢' }
    ];

  const stats = {
    totalTokens: '1,000,000,000',
    distributed: '425,000',
    contributors: '1',
    openTasks: '25+'
  };

  return (
    <div
      className={`dev-sidebar ${isCollapsed ? 'collapsed' : ''}`}
    >
      <button
        className="dev-sidebar-toggle-standalone"
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>

      <nav className="dev-sidebar-nav with-padding">
        {menuItems.map((item, index) => {
          if (item.divider) {
            return <div key={index} className="dev-sidebar-divider" />;
          }

          const Icon = item.icon;
          const isActive = pathname === item.path;

          if (item.external) {
            return (
              <a
                key={item.path}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`dev-sidebar-item ${isActive ? 'active' : ''}`}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon size={20} />
                {!isCollapsed && (
                  <>
                    <span className="dev-sidebar-label">{item.label}</span>
                    {item.badge && <span className="dev-sidebar-badge">{item.badge}</span>}
                  </>
                )}
              </a>
            );
          }

          return (
            <Link
              key={item.path}
              href={item.path || '/'}
              className={`dev-sidebar-item ${isActive ? 'active' : ''}`}
              title={isCollapsed ? item.label : undefined}
            >
              <Icon size={20} />
              {!isCollapsed && (
                <>
                  <span className="dev-sidebar-label">{item.label}</span>
                  {item.badge && <span className="dev-sidebar-badge">{item.badge}</span>}
                </>
              )}
            </Link>
          );
        })}
      </nav>

      {!isCollapsed && (
        <div className="dev-sidebar-stats">
          <h4>Token Stats</h4>
          <div className="dev-stat">
            <span className="dev-stat-label">Total Supply</span>
            <span className="dev-stat-value">{stats.totalTokens}</span>
          </div>
          <div className="dev-stat">
            <span className="dev-stat-label">Distributed</span>
            <span className="dev-stat-value">{stats.distributed}</span>
          </div>
          <div className="dev-stat">
            <span className="dev-stat-label">Contributors</span>
            <span className="dev-stat-value">{stats.contributors}</span>
          </div>
          <div className="dev-stat">
            <span className="dev-stat-label">Open Tasks</span>
            <span className="dev-stat-value">{stats.openTasks}</span>
          </div>
        </div>
      )}

      {!isCollapsed && (
        <div className="dev-sidebar-footer">
          <div className="dev-sidebar-cta">
            <p>Start Contributing</p>
            <Link href="/tasks" className="dev-sidebar-cta-button">
              View Tasks
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DevSidebar;
