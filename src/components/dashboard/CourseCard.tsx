
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Clock, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  instructor: string;
  students: number;
  progress?: number;
  image?: string;
  category?: string;
  lastAccessed?: string;
  className?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  description,
  instructor,
  students,
  progress = 0,
  image,
  category,
  lastAccessed,
  className,
}) => {
  return (
    <Link to={`/course/${id}`}>
      <Card className={cn('moodle-card moodle-card-hover h-full', className)}>
        <div className="relative h-40 w-full">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full moodle-gradient-blue" />
          )}
          {category && (
            <Badge className="absolute right-2 top-2 bg-moodle-blue hover:bg-moodle-darkBlue">
              {category}
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
          <p className="text-moodle-darkGray text-sm mt-1 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center text-xs text-moodle-darkGray mt-3">
            <Users className="h-3.5 w-3.5 mr-1" />
            <span>{students} students</span>
          </div>
          {progress > 0 && (
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-1.5" />
            </div>
          )}
        </CardContent>
        <CardFooter className="px-4 py-3 bg-moodle-light/50 flex justify-between border-t">
          <div className="text-xs text-moodle-darkBlue">
            <span>Instructor: </span>
            <span className="font-medium">{instructor}</span>
          </div>
          {lastAccessed && (
            <div className="flex items-center text-xs text-moodle-darkGray">
              <Clock className="h-3 w-3 mr-1" />
              <span>{lastAccessed}</span>
            </div>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CourseCard;
