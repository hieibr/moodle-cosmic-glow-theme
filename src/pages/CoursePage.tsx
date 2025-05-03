
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Book, 
  CalendarDays, 
  FileText, 
  MessageCircle, 
  Users, 
  Video, 
  ClipboardList
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CoursePage = () => {
  const { courseId } = useParams();
  const [activeTab, setActiveTab] = useState("content");
  
  // Mock data for demonstration
  const courseTitle = courseId === "mathematics" 
    ? "Mathematics 101" 
    : courseId === "computer-science" 
    ? "Introduction to Computer Science" 
    : "Physics Fundamentals";
  
  const courseDescription = "This course provides a comprehensive introduction to the fundamental principles and applications of the subject matter.";

  return (
    <div className="container py-6">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-moodle-darkBlue dark:text-white">{courseTitle}</h1>
            <p className="text-moodle-darkGray mt-2 max-w-2xl">{courseDescription}</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Participants
            </Button>
            <Button className="bg-moodle-brightBlue hover:bg-moodle-blue">
              <Video className="mr-2 h-4 w-4" />
              Join Meeting
            </Button>
          </div>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-6 bg-moodle-light dark:bg-moodle-darkBlue/50">
          <TabsTrigger value="content">
            <Book className="mr-2 h-4 w-4" />
            Content
          </TabsTrigger>
          <TabsTrigger value="assignments">
            <ClipboardList className="mr-2 h-4 w-4" />
            Assignments
          </TabsTrigger>
          <TabsTrigger value="resources">
            <FileText className="mr-2 h-4 w-4" />
            Resources
          </TabsTrigger>
          <TabsTrigger value="forum">
            <MessageCircle className="mr-2 h-4 w-4" />
            Forum
          </TabsTrigger>
          <TabsTrigger value="calendar">
            <CalendarDays className="mr-2 h-4 w-4" />
            Calendar
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="content" className="mt-0">
          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Week 1: Introduction</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-moodle-light/50 dark:bg-moodle-darkBlue/20 rounded-lg hover:bg-moodle-light dark:hover:bg-moodle-darkBlue/30 cursor-pointer">
                    <FileText className="h-5 w-5 text-moodle-blue" />
                    <div>
                      <p className="font-medium">Course Syllabus</p>
                      <p className="text-sm text-moodle-darkGray">PDF Document</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-moodle-light/50 dark:bg-moodle-darkBlue/20 rounded-lg hover:bg-moodle-light dark:hover:bg-moodle-darkBlue/30 cursor-pointer">
                    <Video className="h-5 w-5 text-moodle-blue" />
                    <div>
                      <p className="font-medium">Introduction Lecture</p>
                      <p className="text-sm text-moodle-darkGray">Video - 45 minutes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-moodle-light/50 dark:bg-moodle-darkBlue/20 rounded-lg hover:bg-moodle-light dark:hover:bg-moodle-darkBlue/30 cursor-pointer">
                    <ClipboardList className="h-5 w-5 text-moodle-blue" />
                    <div>
                      <p className="font-medium">Initial Assessment</p>
                      <p className="text-sm text-moodle-darkGray">Quiz - Due May 10</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Week 2: Core Concepts</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-moodle-light/50 dark:bg-moodle-darkBlue/20 rounded-lg hover:bg-moodle-light dark:hover:bg-moodle-darkBlue/30 cursor-pointer">
                    <FileText className="h-5 w-5 text-moodle-blue" />
                    <div>
                      <p className="font-medium">Reading Materials</p>
                      <p className="text-sm text-moodle-darkGray">PDF Document</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-moodle-light/50 dark:bg-moodle-darkBlue/20 rounded-lg hover:bg-moodle-light dark:hover:bg-moodle-darkBlue/30 cursor-pointer">
                    <Video className="h-5 w-5 text-moodle-blue" />
                    <div>
                      <p className="font-medium">Core Concepts Lecture</p>
                      <p className="text-sm text-moodle-darkGray">Video - 50 minutes</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="assignments" className="mt-0">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Current Assignments</h3>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">Assignment 1: Fundamentals</h4>
                    <span className="text-sm px-2 py-1 bg-moodle-brightBlue/10 text-moodle-blue rounded">Due: May 15, 2025</span>
                  </div>
                  <p className="text-moodle-darkGray text-sm mt-2">
                    Complete the fundamental exercises and submit your work.
                  </p>
                  <div className="mt-4 flex justify-end">
                    <Button className="bg-moodle-brightBlue hover:bg-moodle-blue">
                      Submit Assignment
                    </Button>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">Quiz 1: Basic Principles</h4>
                    <span className="text-sm px-2 py-1 bg-moodle-brightBlue/10 text-moodle-blue rounded">Due: May 12, 2025</span>
                  </div>
                  <p className="text-moodle-darkGray text-sm mt-2">
                    Complete the online quiz about the basic principles covered in week 1.
                  </p>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" className="mr-3">
                      Preview
                    </Button>
                    <Button className="bg-moodle-brightBlue hover:bg-moodle-blue">
                      Start Quiz
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="resources" className="mt-0">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Course Resources</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border rounded-lg flex items-center gap-3">
                  <FileText className="h-10 w-10 text-moodle-blue p-2 bg-moodle-light rounded-full" />
                  <div>
                    <h4 className="font-medium">Course Textbook</h4>
                    <p className="text-sm text-moodle-darkGray">Complete digital textbook for the course</p>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg flex items-center gap-3">
                  <Video className="h-10 w-10 text-moodle-blue p-2 bg-moodle-light rounded-full" />
                  <div>
                    <h4 className="font-medium">Recorded Lectures</h4>
                    <p className="text-sm text-moodle-darkGray">All recorded lectures for the course</p>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg flex items-center gap-3">
                  <ClipboardList className="h-10 w-10 text-moodle-blue p-2 bg-moodle-light rounded-full" />
                  <div>
                    <h4 className="font-medium">Practice Exercises</h4>
                    <p className="text-sm text-moodle-darkGray">Additional exercises for practice</p>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg flex items-center gap-3">
                  <MessageCircle className="h-10 w-10 text-moodle-blue p-2 bg-moodle-light rounded-full" />
                  <div>
                    <h4 className="font-medium">Discussion Materials</h4>
                    <p className="text-sm text-moodle-darkGray">Topics and materials for discussions</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="forum" className="mt-0">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Course Forum</h3>
              <p className="text-moodle-darkGray mb-6">
                Participate in course discussions, ask questions, and collaborate with peers.
              </p>
              
              <div className="space-y-6">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-moodle-gray flex items-center justify-center text-white">JD</div>
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-xs text-moodle-darkGray">Posted yesterday at 15:30</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Question about Week 1 Assignment</h4>
                    <p className="text-sm text-moodle-darkGray">
                      Could someone explain how to approach problem #3 in the week 1 assignment? I'm having trouble understanding the requirements.
                    </p>
                    <div className="mt-3 flex items-center gap-4">
                      <Button variant="ghost" className="text-xs h-8 px-3">
                        <MessageCircle className="mr-1 h-3 w-3" /> Reply
                      </Button>
                      <span className="text-xs text-moodle-darkGray">3 replies</span>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-moodle-blue flex items-center justify-center text-white">AS</div>
                    <div>
                      <p className="font-medium">Alice Smith</p>
                      <p className="text-xs text-moodle-darkGray">Posted 2 days ago at 09:15</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Study Group for Next Quiz</h4>
                    <p className="text-sm text-moodle-darkGray">
                      Would anyone be interested in forming a study group for the upcoming quiz? We could meet online to review the materials together.
                    </p>
                    <div className="mt-3 flex items-center gap-4">
                      <Button variant="ghost" className="text-xs h-8 px-3">
                        <MessageCircle className="mr-1 h-3 w-3" /> Reply
                      </Button>
                      <span className="text-xs text-moodle-darkGray">7 replies</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="bg-moodle-brightBlue hover:bg-moodle-blue">
                  Start New Discussion
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="calendar" className="mt-0">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Course Calendar</h3>
              <p className="text-moodle-darkGray mb-6">
                Important dates and upcoming events for this course.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4 p-3 border-l-4 border-moodle-brightBlue bg-moodle-light/50 dark:bg-moodle-darkBlue/20 rounded-r-lg">
                  <div className="text-center">
                    <div className="text-xl font-bold text-moodle-blue">10</div>
                    <div className="text-xs text-moodle-darkGray">May</div>
                  </div>
                  <div>
                    <h4 className="font-medium">Initial Assessment Due</h4>
                    <p className="text-sm text-moodle-darkGray">Complete the initial assessment quiz</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-3 border-l-4 border-moodle-blue bg-moodle-light/50 dark:bg-moodle-darkBlue/20 rounded-r-lg">
                  <div className="text-center">
                    <div className="text-xl font-bold text-moodle-blue">12</div>
                    <div className="text-xs text-moodle-darkGray">May</div>
                  </div>
                  <div>
                    <h4 className="font-medium">Quiz 1: Basic Principles</h4>
                    <p className="text-sm text-moodle-darkGray">Online quiz covering week 1 material</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-3 border-l-4 border-moodle-blue bg-moodle-light/50 dark:bg-moodle-darkBlue/20 rounded-r-lg">
                  <div className="text-center">
                    <div className="text-xl font-bold text-moodle-blue">15</div>
                    <div className="text-xs text-moodle-darkGray">May</div>
                  </div>
                  <div>
                    <h4 className="font-medium">Assignment 1 Due</h4>
                    <p className="text-sm text-moodle-darkGray">Submit your work for Assignment 1</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-3 border-l-4 border-moodle-darkGray bg-moodle-light/50 dark:bg-moodle-darkBlue/20 rounded-r-lg">
                  <div className="text-center">
                    <div className="text-xl font-bold text-moodle-blue">17</div>
                    <div className="text-xs text-moodle-darkGray">May</div>
                  </div>
                  <div>
                    <h4 className="font-medium">Live Session: Q&A</h4>
                    <p className="text-sm text-moodle-darkGray">Online Q&A session with the instructor</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CoursePage;
