import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserCourse } from "../../types";
import { setName, setEmail } from "../../features/students/students.slice";
import { TrashIcon } from "../../assets/TrashIcon";

interface Props {
  courses: UserCourse["courses"];
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserCourse["userData"];
  deleteCourse: (id: number) => void;
}

function CoursesStudents({ courses, setModal, user, deleteCourse }: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const renderCourses = (): JSX.Element[] => {
    return courses.map((course) => (
      <tr key={course.id}>
        <td className="border border-gray-400 px-4 py-2 text-center">
          {course.course_name}
        </td>
        <td className="border border-gray-400 px-4 py-2 text-center">
          {course.program}
        </td>
        <td
          className={`px-4 py-2 border border-gray-400 text-center ${
            course.status === "Approved"
              ? "text-green-400"
              : course.status === "Incomplete"
              ? "text-yellow-400"
              : "text-red-400"
          }`}
        >
          {course.status}
        </td>
        <td className="text-red-600 px-4 py-4">
          <button
            onClick={() => {
              deleteCourse(course.id);
            }}
          >
            <TrashIcon />
          </button>
        </td>
      </tr>
    ));
  };

  const handleModal = (): void => {
    setModal((prevstate: boolean) => !prevstate);
  };

  const handleClick = (): void => {
    dispatch(setName(user.userName));
    dispatch(setEmail(user.userEmail));
    navigate("/add/academic");
    setModal(false);
  };

  return (
    <div className="flex bg-slate-900 w-[512px] h-96 flex-col justify-around items-center rounded-lg shadow-xl">
      <h1 className="text-lg">
        Courses: <span className="text-2xl font-bold">{user.userName}</span>
      </h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Add course
      </button>
      <table className="table-auto text-white p-4 py-6">
        <div className="absolute top-10 right-20">
          <button className="text-3xl hover:text-red-600" onClick={handleModal}>
            X
          </button>
        </div>
        <thead>
          <tr>
            <th className="px-4 py-2">Course</th>
            <th className="px-4 py-2">Program</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {courses ? (
            renderCourses()
          ) : (
            <tr>
              <td className="border border-gray-400 px-4 py-2" colSpan={3}>
                No courses
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export { CoursesStudents };
