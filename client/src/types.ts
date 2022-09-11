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
  user_id: string | number;
}

export interface UserCourse {
  userData: {
    userName: User['name'];
    userEmail: User['email'];
  };
  courses: Courses[];
}

export type CourseStatus = "Approved" | "Incomplete" | "Failed";
