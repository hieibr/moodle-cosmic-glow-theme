
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Book, MessageCircle } from 'lucide-react';

interface CourseModuleProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const CourseModule: React.FC<CourseModuleProps> = ({ 
  title, 
  icon = <Book className="w-5 h-5 text-[#1363FB]" />, 
  children,
  defaultOpen = false 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="moodle-module">
      <div 
        className="moodle-module-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          {icon}
          <h3 className="font-medium text-gray-700">{title}</h3>
        </div>
        <button className="text-gray-500">
          {isOpen ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="moodle-module-content">
          {children}
        </div>
      )}
    </div>
  );
};

export const DiscussionModule: React.FC<{title: string, children: React.ReactNode}> = ({ title, children }) => (
  <CourseModule title={title} icon={<MessageCircle className="w-5 h-5 text-[#1363FB]" />}>
    {children}
  </CourseModule>
);

export const LearningModule: React.FC<{title: string, children: React.ReactNode}> = ({ title, children }) => (
  <CourseModule title={title} icon={<Book className="w-5 h-5 text-[#1363FB]" />}>
    {children}
  </CourseModule>
);

export default CourseModule;
