import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CourseStatus } from "../types";
import { selectName, selectEmail } from "../features/students/students.slice";

interface DataForm {
  nameCourse: string;
  program: string;
  status: CourseStatus;
}

function DataAcademic() {
  const navigate = useNavigate();

  const name: string = useSelector(selectName);
  const email: string = useSelector(selectEmail);

  if (!name || !email) {
    navigate("/");
  }

  const dispatch = useDispatch();

  const [values, setValues] = React.useState<DataForm>({
    nameCourse: "",
    program: "",
    status: "Incomplete",
  });
  const [id, setId] = React.useState<number>(0);

  const handleSubmmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`http://localhost:3000/users/${id}/courses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
  };

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const getStudentID = async () => {
    const response = await fetch(`http://localhost:3000/users/${email}`);
    const data = await response.json();

    setId(data.id);
  };

  useEffect(() => {
    getStudentID();
  }, []);

  return (
    <div className="w-full py-16">
      <h1 className="text-white text-center text-2xl">Data Academic {name}</h1>
      <form onSubmit={handleSubmmit}>
        <div className="flex flex-col h-96 items-center justify-around ">
          <div className="flex flex-col w-1/2">
            <label className="text-white py-4">Course</label>
            <input
              className="border border-gray-400 rounded-md outline-none px-2"
              name="nameCourse"
              value={values.nameCourse}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col w-1/2">
            <label className="text-white py-4">Program</label>
            <input
              className="border border-gray-400 rounded-md outline-none px-2"
              name="program"
              value={values.program}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="text-white py-4">Status</label>
            <select
              className="border border-gray-400 rounded-md outline-none px-2"
              name="status"
              value={values.status}
              onChange={handleChange}
            >
              <option value="Incomplete">Incomplete</option>
              <option value="Approved">Approved</option>
              <option value="Failed">Falied</option>
            </select>
          </div>
          <button className="text-white w-32 h-10 bg-slate-500 rounded-md shadow-lg hover:shadow-none">
            Create student
          </button>
        </div>
      </form>
    </div>
  );
}

export { DataAcademic };
