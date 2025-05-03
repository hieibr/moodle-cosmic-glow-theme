
import React from 'react';
import { Button } from '@/components/ui/button';
import CourseBreadcrumb from '@/components/ui/course-breadcrumb';
import CourseModule, { DiscussionModule, LearningModule } from '@/components/course/CourseModule';
import { ChevronDown } from 'lucide-react';

const ClassicCoursePage = () => {
  const breadcrumbItems = [
    { label: 'Meus cursos', href: '/' },
    { label: 'Cursos', href: '/courses' },
    { label: 'Society and Environment', href: '/course/society' },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-0">
      <CourseBreadcrumb 
        items={breadcrumbItems}
        currentPage="Critical Thinking"
      />
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="moodle-heading">Critical Thinking: Develop your skills</h1>
          <Button variant="outline" className="flex items-center gap-2">
            Turn editing on
          </Button>
        </div>
        
        <CourseModule title="Welcome!" defaultOpen={true}>
          <div className="prose max-w-none">
            <p className="mb-4">What can a man who died over two and a half thousand years ago teach us about coping with modern life? Read on!</p>
            <img 
              src="/lovable-uploads/1f2ccbfe-b32b-43e4-a101-1d89105cd58b.png" 
              alt="Ancient philosopher statue" 
              className="rounded-md mb-4"
              width={400}
            />
          </div>
        </CourseModule>
        
        <div className="flex items-center justify-between mb-3 mt-6">
          <h2 className="text-base font-semibold text-gray-700">About this course</h2>
          <Button variant="ghost" size="sm" className="text-sm text-gray-500 flex items-center">
            Completion
            <ChevronDown className="ml-1 w-4 h-4" />
          </Button>
        </div>
        
        <CourseModule title="Module 1: The historical background">
          <p>Historical content and background information goes here.</p>
        </CourseModule>
        
        <div className="mt-6">
          <CourseModule title="Module 2: Identify and analyse arguments">
            <DiscussionModule title="Module discussion: Speak your mind!">
              <p>Join the discussion about this module's topics.</p>
            </DiscussionModule>
            
            <LearningModule title="Learning materials for this module">
              <ul className="list-disc list-inside space-y-2">
                <li>Reading 1: Introduction to Arguments</li>
                <li>Video: How to Identify Arguments</li>
                <li>Exercise: Argument Analysis</li>
              </ul>
            </LearningModule>
          </CourseModule>
        </div>
      </div>
    </div>
  );
};

export default ClassicCoursePage;
