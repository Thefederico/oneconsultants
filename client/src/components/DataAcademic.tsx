import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { DataForm } from "../types";
import { SelectStatusCourse } from "./SelectStatusCourse";
import {
  selectName,
  selectEmail,
  selectAge,
  setNameCourse,
  setProgram,
  setCourseStatus,
} from "../features/students/students.slice";
import { Modal } from "./Modal";
import { Summary } from "./Summary";
import { FetchData } from "../app/api/fetch";

function DataAcademic() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name: string = useSelector(selectName);
  const email: string = useSelector(selectEmail);
  const age: string = useSelector(selectAge);

  if (!name || !email) {
    navigate("/");
  }

  const [values, setValues] = useState<DataForm>({
    nameCourse: "",
    program: "",
    status: "Incomplete",
  });
  const [modal, setModal] = useState(false);
  const [id, setId] = useState<number>(0);

  const handleSubmmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    try {
      e.preventDefault();
      dispatch(setNameCourse(values.nameCourse));
      dispatch(setProgram(values.program));
      dispatch(setCourseStatus(values.status));
      FetchData.post(`/users/${id}/courses`, values);
      toast.success("Course added successfully", {
        style: {
          borderRadius: "10px",
          background: "#0f172a",
          color: "#fff",
        },
        duration: 1500,
      });
    } catch (error) {
      throw error;
    }
  };

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const getStudentId = async (): Promise<void> => {
    try {
      const response = await FetchData.get(`/users/${email}`);
      setId(response.id);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getStudentId();
  }, []);

  return (
    <>
      <div className="flex flex-col w-full py-16">
        <h1 className="text-white text-center text-2xl">
          Data Academic {name}
        </h1>
        <form onSubmit={handleSubmmit}>
          <div className="flex flex-col h-96 items-center justify-around ">
            <div className="flex flex-col w-1/2">
              <label className="text-white py-4">Course</label>
              <input
                className="border border-gray-400 rounded-md outline-none px-2"
                required
                name="nameCourse"
                value={values.nameCourse}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col w-1/2">
              <label className="text-white py-4">Program</label>
              <input
                className="border border-gray-400 rounded-md outline-none px-2"
                required
                name="program"
                value={values.program}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label className="text-white py-4">Status</label>
              <SelectStatusCourse
                values={values.status}
                handleChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="text-white w-32 h-10 bg-slate-500 rounded-md shadow-lg hover:shadow-none"
            >
              Add course
            </button>
          </div>
        </form>
        <button
          className="text-white w-32 h-10 mx-auto bg-slate-500 rounded-md shadow-lg hover:shadow-none"
          onClick={() => setModal((prevstate) => !prevstate)}
        >
          Summary
        </button>
      </div>
      {modal && (
        <Modal>
          <Summary
            name={name}
            email={email}
            age={age}
            values={values}
            setModal={setModal}
          />
        </Modal>
      )}
    </>
  );
}

export { DataAcademic };
