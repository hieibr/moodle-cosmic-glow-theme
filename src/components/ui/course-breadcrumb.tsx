
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
    <nav aria-label="breadcrumb" className="moodle-breadcrumb py-3 px-4 bg-[#0B1738] border-b border-[#1363FB]/20">
      <div className="flex flex-wrap items-center text-sm">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <Link 
              to={item.href} 
              className="moodle-breadcrumb-item text-[#3C7AF1] hover:text-[#1363FB] transition-colors"
            >
              {item.label}
            </Link>
            <span className="moodle-breadcrumb-separator mx-2 text-[#9DA2AF]">
              <ChevronRight className="h-3 w-3" />
            </span>
          </React.Fragment>
        ))}
        <span className="text-[#EDEFF2] font-medium">{currentPage}</span>
      </div>
    </nav>
  );
};

export default CourseBreadcrumb;
