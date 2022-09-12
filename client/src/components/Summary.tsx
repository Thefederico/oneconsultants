import React from "react";
import { useNavigate } from "react-router-dom";
import { DataForm } from "../types";

interface Props {
  name: string;
  email: string;
  age: string;
  values: DataForm;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function Summary({ name, email, age, values, setModal }: Props) {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-900 w-[512px] flex-col justify-around items-center rounded-lg shadow-xl">
      <h1 className="py-8 text-center text-3xl">Summary</h1>
      <table className="mx-auto">
        <tbody>
          <tr>
            <td className="">Name:</td>
            <td>{name}</td>
          </tr>
          <tr className="">
            <td className="py-2">Email:</td>
            <td>{email}</td>
          </tr>
          <tr className="">
            <td className="py-2">Age:</td>
            <td>{age}</td>
          </tr>
          <tr className="">
            <td className="py-2">Name Course:</td>
            <td>{values.nameCourse}</td>
          </tr>
          <tr className="">
            <td className="py-2">Program:</td>
            <td>{values.program}</td>
          </tr>
          <tr className="">
            <td className="py-2">Status:</td>
            <td>{values.status}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex space-x-3 items-center justify-center w-full py-8">
        <button
          className="text-white w-32 h-10 bg-slate-500 rounded-md shadow-lg hover:shadow-none"
          onClick={() => {
            setModal((prevstate) => !prevstate);
          }}
        >
          Add Course
        </button>
        <button
          className="text-white w-32 h-10 bg-slate-500 rounded-md shadow-lg hover:shadow-none"
          onClick={() => {
            navigate("/");
          }}
        >
          Table of registers
        </button>
      </div>
    </div>
  );
}

export { Summary };
