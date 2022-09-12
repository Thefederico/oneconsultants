import { useState } from "react";
import toast from "react-hot-toast";
import { UserCourse, User } from "../../types";
import { FetchData } from "../../app/api/fetch";

export function useStudents() {
  const [students, setStudents] = useState<User[]>([]);
  const [courses, setCourses] = useState<UserCourse>({
    userData: {
      userName: "",
      userEmail: "",
    },
    courses: [],
  });

  const getStudents = async (): Promise<void> => {
    try {
      const response = await FetchData.get("/users");
      setStudents(response);
    } catch (error) {
      throw error;
    }
  };

  const getCourses = async (id: number): Promise<void> => {
    try {
      const response = await FetchData.get(`/users/${id}/courses`);
      setCourses({
        ...courses,
        userData: response.userData,
        courses: response.courses,
      });
    } catch (error) {
      throw error;
    }
  };

  const deleteUser = async (id: number): Promise<void> => {
    try {
      const studentIndex = students.findIndex((student) => student.id === id);
      const updateStudents = [...students];
      updateStudents.splice(studentIndex, 1);
      setStudents(updateStudents);
      toast.error("Student deleted", {
        style: {
          borderRadius: "10px",
          background: "#0f172a",
          color: "#fff",
        },
        icon: "🗑️",
      });
      await FetchData.delete(`/users/${id}`);
    } catch (error) {
      throw error;
    }
  };

  const deleteCourse = async (id: number): Promise<void> => {
    try {
      const findIndex = courses.courses.findIndex((course) => course.id === id);
      const updateCourses = [...courses.courses];
      updateCourses.splice(findIndex, 1);
      setCourses({
        ...courses,
        courses: updateCourses,
      });
      toast.error("Course deleted", {
        style: {
          borderRadius: "10px",
          background: "#0f172a",
          color: "#fff",
        },
        icon: "🗑️",
      });
      await FetchData.delete(`/users/courses/${id}`);
    } catch (error) {
      throw error;
    }
  };

  return {
    students,
    getStudents,
    courses,
    getCourses,
    deleteUser,
    deleteCourse,
  };
}
