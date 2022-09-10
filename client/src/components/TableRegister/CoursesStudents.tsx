import React from "react";
// import {}
import { UserCourse } from "../../types";

interface Props {
  courses: UserCourse["courses"];
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  userName: UserCourse["userName"];
}

function CoursesStudents({ courses, setModal, userName }: Props) {
  const handleModal = () => {
    setModal((prevstate: boolean) => !prevstate);
  };

  return (
    <div className="flex bg-slate-900 w-[512px] h-96 flex-col justify-around items-center rounded-lg shadow-xl">
      <h1>Courses {userName}</h1>
      <table className="table-auto text-white p-4 py-6">
        <div className="absolute top-10 right-20">
          <button className="text-3xl hover:text-red-600" onClick={handleModal}>X</button>
        </div>
        <thead>
          <tr>
            <th className="px-4 py-2">Course</th>
            <th className="px-4 py-2">Program</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => {
            return (
              <tr key={course.id}>
                <td className="px-4 py-2">{course.course_name}</td>
                <td className="px-4 py-2">{course.program}</td>
                <td
                  className={`px-4 py-2 ${
                    course.status === "Approved"
                      ? "text-green-400"
                      : course.status === "Incomplete"
                      ? "text-yellow-400"
                      : "text-red-400"
                  }`}
                >
                  {course.status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export { CoursesStudents };
