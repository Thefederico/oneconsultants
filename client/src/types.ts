export interface User {
  students: any;
  id: number;
  name: string;
  email: string;
  age: string;
}

export interface Courses {
  id: number;
  name: string;
  course_name: string;
  program: string;
  status: string;
}

export interface UserCourse {
  userName: string;
  courses: Courses[];
}

export type CourseStatus = "Approved" | "Incomplete" | "Failed";
