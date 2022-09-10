import { useState } from "react";
import { UserCourse, User } from "../../types";

export function useStudents() {
  const [students, setStudents] = useState<User[]>([]);
  const [courses, setCourses] = useState<UserCourse>({
    userName: "",
    courses: [],
  });

  const getStudents = async (): Promise<void> => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      throw error;
    }
  };

  const getCourses = async (id: number): Promise<void> => {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}/courses`);
      const data = await response.json();
      setCourses({
        ...courses,
        userName: data.nameUser,
        courses: data.courses,
      });
    } catch (error) {
      throw error;
    }
  };

  const deleteUser = (id: number): void => {
    try {
      fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
      });
      const studentIndex = students.findIndex((student) => student.id === id);
      const updateStudents = [...students];
      updateStudents.splice(studentIndex, 1);
      setStudents(updateStudents);
    } catch (error) {
      throw error;
    }
  };

  return { students, getStudents, courses, getCourses, deleteUser };
}
