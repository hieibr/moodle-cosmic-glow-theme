
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
  indent?: boolean;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label, indent = false, active = false }) => (
  <NavLink
    to={to}
    className={({ isActive }) => 
      cn(
        'flex items-center py-1.5 px-3 text-sm rounded-md',
        indent ? 'pl-8' : '',
        isActive || active ? 'text-[#1363FB] font-medium' : 'text-gray-700 hover:text-[#1363FB]'
      )}
  >
    {icon}
    <span className="ml-2">{label}</span>
  </NavLink>
);

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <aside 
      className={cn(
        "pb-12 w-64 bg-gray-50 border-r border-gray-200",
        className
      )}
    >
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="px-3 py-4">
          <h2 className="mb-2 px-2 text-base font-semibold tracking-tight text-gray-800">Navegação</h2>
          <div className="space-y-1">
            <NavItem to="/" icon={<Home className="h-4 w-4" />} label="Meus cursos" />
            <div className="pl-8 space-y-1 mt-1">
              <NavItem to="/site-home" icon={<Home className="h-4 w-4" />} label="Site home" indent={true} />
              <NavItem to="/site-pages" icon={<Book className="h-4 w-4" />} label="Site pages" indent={true} />
              <NavItem to="/my-courses" icon={<Book className="h-4 w-4" />} label="Meus cursos" active={true} indent={true} />
              <div className="pl-6 space-y-1">
                <NavItem to="/course/memory" icon={<Book className="h-4 w-4" />} label="Effective Memory Techniques" indent={true} />
                <NavItem to="/course/faiw" icon={<Book className="h-4 w-4" />} label="FAIW" indent={true} />
                <NavItem to="/course/skills" icon={<Book className="h-4 w-4" />} label="IT Skills" indent={true} />
                <NavItem to="/course/pp" icon={<Book className="h-4 w-4" />} label="PP" indent={true} />
                <NavItem to="/course/welcome" icon={<Book className="h-4 w-4" />} label="Welcome" indent={true} />
              </div>
            </div>
          </div>
          
          <Separator className="my-4 bg-gray-200" />
          
          <h2 className="mb-2 px-2 text-base font-semibold tracking-tight text-gray-800">Cursos</h2>
          <div className="space-y-1">
            <NavItem to="/courses" icon={<Book className="h-4 w-4" />} label="Cursos" />
            <div className="pl-8 space-y-1">
              <NavItem to="/course/society" icon={<Book className="h-4 w-4" />} label="Society and Environment" indent={true} />
              <div className="pl-6 space-y-1">
                <NavItem to="/course/ses" icon={<Book className="h-4 w-4" />} label="SES TES" indent={true} />
                <NavItem to="/course/critical" icon={<Book className="h-4 w-4" />} label="Critical thinking" active={true} indent={true} />
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
