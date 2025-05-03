
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Book, Calendar, Gauge, GraduationCap, Home, LayoutDashboard, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

interface SidebarProps {
  className?: string;
}

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) => 
      cn('moodle-nav-item', isActive && 'moodle-nav-item-active')}
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <aside 
      className={cn(
        "pb-12 w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border",
        className
      )}
    >
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="px-3 py-4">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight text-white">Main Navigation</h2>
          <div className="space-y-1">
            <NavItem to="/" icon={<Home className="h-5 w-5" />} label="Home" />
            <NavItem to="/dashboard" icon={<LayoutDashboard className="h-5 w-5" />} label="Dashboard" />
            <NavItem to="/courses" icon={<Book className="h-5 w-5" />} label="My Courses" />
            <NavItem to="/calendar" icon={<Calendar className="h-5 w-5" />} label="Calendar" />
          </div>
          
          <Separator className="my-4 bg-sidebar-border" />
          
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight text-white">Courses</h2>
          <div className="space-y-1">
            <NavItem to="/course/mathematics" icon={<GraduationCap className="h-5 w-5" />} label="Mathematics" />
            <NavItem to="/course/computer-science" icon={<GraduationCap className="h-5 w-5" />} label="Computer Science" />
            <NavItem to="/course/physics" icon={<GraduationCap className="h-5 w-5" />} label="Physics" />
          </div>
          
          <Separator className="my-4 bg-sidebar-border" />
          
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight text-white">Resources</h2>
          <div className="space-y-1">
            <NavItem to="/grades" icon={<Gauge className="h-5 w-5" />} label="Grades" />
            <NavItem to="/participants" icon={<Users className="h-5 w-5" />} label="Participants" />
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
