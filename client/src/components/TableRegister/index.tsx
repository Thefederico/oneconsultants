import React, { useEffect } from "react";
import { Modal } from "../Modal";
import { CoursesStudents } from "./CoursesStudents";
import { useStudents } from "./useStudents.hook";
import { User, Courses, UserCourse } from "../../types";

export function TableRegister() {
  const [modal, setModal] = React.useState(false);

  const { students, courses, getStudents, getCourses, deleteUser } =
    useStudents();

  const rederStudents = (): JSX.Element[] => {
    return students.map((student: User) => {
      return (
        <tr key={student.id}>
          <td className="px-4 py-2">{student.name}</td>
          <td className="px-4 py-2">{student.email}</td>
          <td className="px-4 py-2">{student.age}</td>
          <td className="px-4 py-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                rederCourse(student.id);
              }}
            >
              Courses
            </button>
          </td>
          <td className="px-4 py-2">
            <button
              className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                deleteUser(student.id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  const rederCourse = (id: number) => {
    getCourses(id);
    setModal((prevstate: boolean) => !prevstate);
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-center text-3xl text-white py-4">
          Table of registers
        </h1>
        <div className="mx-auto py-6">
          <table className="table-auto text-white p-4 py-6">
            <thead>
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Age</th>
              </tr>
            </thead>
            <tbody>
              {students ? (
                rederStudents()
              ) : (
                <tr>
                  <td>Loading...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {modal && (
        <Modal>
          <CoursesStudents
            courses={courses.courses}
            setModal={setModal}
            userName={courses.userName}
          />
        </Modal>
      )}
    </>
  );
}
