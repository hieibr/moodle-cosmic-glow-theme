
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import CourseCard from "@/components/dashboard/CourseCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bell, 
  Calendar, 
  CheckCircle, 
  Clock, 
  GraduationCap, 
  PlusCircle 
} from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  // Mock data for demonstration
  const courses = [
    {
      id: "mathematics",
      title: "Mathematics 101",
      description: "Introduction to mathematical concepts and theories for beginners.",
      instructor: "Dr. Jane Smith",
      students: 125,
      progress: 65,
      category: "Math",
      lastAccessed: "Yesterday",
      status: "inProgress",
    },
    {
      id: "computer-science",
      title: "Introduction to Computer Science",
      description: "Learn the foundations of computer science and programming.",
      instructor: "Prof. John Davis",
      students: 210,
      progress: 30,
      category: "CS",
      lastAccessed: "2 days ago",
      status: "inProgress",
    },
    {
      id: "physics",
      title: "Physics Fundamentals",
      description: "Explore the fundamental principles of physics and their applications.",
      instructor: "Dr. Robert Wilson",
      students: 98,
      progress: 10,
      category: "Physics",
      lastAccessed: "Today",
      status: "new",
    },
    {
      id: "english",
      title: "English Literature",
      description: "Survey of major works in English literature from various periods.",
      instructor: "Prof. Sarah Johnson",
      students: 145,
      progress: 0,
      category: "Literature",
      status: "new",
    },
    {
      id: "history",
      title: "World History",
      description: "Comprehensive overview of major historical periods and events.",
      instructor: "Dr. Michael Brown",
      students: 87,
      progress: 100,
      category: "History",
      lastAccessed: "1 week ago",
      status: "completed",
    },
    {
      id: "biology",
      title: "Introduction to Biology",
      description: "Foundational principles of biology and life sciences.",
      instructor: "Dr. Elizabeth Green",
      students: 112,
      progress: 100,
      category: "Science",
      lastAccessed: "2 weeks ago",
      status: "completed",
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Quiz: Computer Science Basics",
      course: "Introduction to Computer Science",
      date: "May 10, 2025",
      time: "10:00 AM",
    },
    {
      id: 2,
      title: "Assignment Due: Mathematics Problem Set",
      course: "Mathematics 101",
      date: "May 12, 2025",
      time: "11:59 PM",
    },
    {
      id: 3,
      title: "Live Session: Physics Q&A",
      course: "Physics Fundamentals",
      date: "May 15, 2025",
      time: "2:00 PM",
    }
  ];

  const filteredCourses = activeTab === "all" 
    ? courses 
    : courses.filter(course => course.status === activeTab);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto bg-moodle-light/30 dark:bg-moodle-darkBlue/10">
          <div className="container py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-bold text-moodle-darkBlue dark:text-white">Dashboard</h1>
                <p className="text-moodle-darkGray">Welcome back! Here's what's happening in your courses.</p>
              </div>
              <Button className="bg-moodle-brightBlue hover:bg-moodle-blue">
                <PlusCircle className="mr-2 h-4 w-4" />
                Browse Courses
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-moodle-brightBlue/10 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-moodle-brightBlue" />
                  </div>
                  <div>
                    <p className="text-sm text-moodle-darkGray">Active Courses</p>
                    <p className="text-2xl font-bold">{courses.filter(c => c.status === 'inProgress' || c.status === 'new').length}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-moodle-brightBlue/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-moodle-brightBlue" />
                  </div>
                  <div>
                    <p className="text-sm text-moodle-darkGray">Hours Spent</p>
                    <p className="text-2xl font-bold">24.5</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-moodle-brightBlue/10 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-moodle-brightBlue" />
                  </div>
                  <div>
                    <p className="text-sm text-moodle-darkGray">Completed</p>
                    <p className="text-2xl font-bold">{courses.filter(c => c.status === 'completed').length}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-4">My Courses</h2>
                  <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="mb-6 bg-moodle-light dark:bg-moodle-darkBlue/50">
                      <TabsTrigger value="all">All Courses</TabsTrigger>
                      <TabsTrigger value="inProgress">In Progress</TabsTrigger>
                      <TabsTrigger value="new">New</TabsTrigger>
                      <TabsTrigger value="completed">Completed</TabsTrigger>
                    </TabsList>

                    <TabsContent value={activeTab} className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredCourses.map(course => (
                          <CourseCard key={course.id} {...course} />
                        ))}
                      </div>

                      {filteredCourses.length === 0 && (
                        <div className="text-center py-12">
                          <p className="text-moodle-darkGray">No courses found in this category.</p>
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Upcoming Events</h3>
                      <Link to="/calendar" className="text-sm text-moodle-brightBlue hover:underline">
                        View Calendar
                      </Link>
                    </div>
                    <div className="space-y-4">
                      {upcomingEvents.map(event => (
                        <div key={event.id} className="flex gap-3 items-start">
                          <div className="w-10 h-10 rounded bg-moodle-light flex-shrink-0 flex items-center justify-center">
                            <Calendar className="h-5 w-5 text-moodle-blue" />
                          </div>
                          <div>
                            <p className="font-medium text-sm">{event.title}</p>
                            <p className="text-xs text-moodle-darkGray">{event.course}</p>
                            <p className="text-xs text-moodle-darkGray mt-1">
                              {event.date} • {event.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Notifications</h3>
                      <Link to="/notifications" className="text-sm text-moodle-brightBlue hover:underline">
                        View All
                      </Link>
                    </div>
                    <div className="space-y-4">
                      <div className="flex gap-3 items-start">
                        <div className="w-10 h-10 rounded bg-moodle-light flex-shrink-0 flex items-center justify-center">
                          <Bell className="h-5 w-5 text-moodle-blue" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">New assignment posted</p>
                          <p className="text-xs text-moodle-darkGray">Mathematics 101</p>
                          <p className="text-xs text-moodle-darkGray mt-1">2 hours ago</p>
                        </div>
                      </div>

                      <div className="flex gap-3 items-start">
                        <div className="w-10 h-10 rounded bg-moodle-light flex-shrink-0 flex items-center justify-center">
                          <Bell className="h-5 w-5 text-moodle-blue" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">Grade posted: Quiz 1</p>
                          <p className="text-xs text-moodle-darkGray">Computer Science</p>
                          <p className="text-xs text-moodle-darkGray mt-1">Yesterday</p>
                        </div>
                      </div>

                      <div className="flex gap-3 items-start">
                        <div className="w-10 h-10 rounded bg-moodle-light flex-shrink-0 flex items-center justify-center">
                          <Bell className="h-5 w-5 text-moodle-blue" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">New forum post</p>
                          <p className="text-xs text-moodle-darkGray">Physics Fundamentals</p>
                          <p className="text-xs text-moodle-darkGray mt-1">2 days ago</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
