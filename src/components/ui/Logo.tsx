
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'default' | 'small';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', className }) => {
  return (
    <Link to="/" className={cn('flex items-center gap-2', className)}>
      {variant === 'default' ? (
        <img 
          src="/lovable-uploads/263921a7-d95a-4cd2-9a62-312fe4512c05.png" 
          alt="Moodle5 Logo" 
          className="h-10" 
        />
      ) : (
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/263921a7-d95a-4cd2-9a62-312fe4512c05.png" 
            alt="Moodle5 Logo" 
            className="h-8" 
          />
        </div>
      )}
    </Link>
  );
};

export default Logo;
