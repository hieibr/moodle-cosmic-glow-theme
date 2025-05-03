
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface CourseBreadcrumbProps {
  items: BreadcrumbItem[];
  currentPage: string;
}

const CourseBreadcrumb: React.FC<CourseBreadcrumbProps> = ({ items, currentPage }) => {
  return (
    <nav aria-label="breadcrumb" className="moodle-breadcrumb py-3 px-4 bg-gray-50 border-b border-gray-200">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Link to={item.href} className="moodle-breadcrumb-item">
            {item.label}
          </Link>
          <span className="moodle-breadcrumb-separator">
            <ChevronRight className="h-4 w-4" />
          </span>
        </React.Fragment>
      ))}
      <span className="text-gray-700 font-medium">{currentPage}</span>
    </nav>
  );
};

export default CourseBreadcrumb;
