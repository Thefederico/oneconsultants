import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setName, setEmail, setAge } from "../features/students/students.slice";

interface DataForm {
  name: string;
  age: string;
  email: string;
}

function DataPersonal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = React.useState<DataForm>({
    name: "",
    age: "",
    email: "",
  });

  const handleSubmmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setName(values.name));
    dispatch(setAge(values.age));
    dispatch(setEmail(values.email));
    fetch("http://localhost:3000/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    setTimeout(() => {
      navigate("/add/academic");
    }, 1000);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <div className="w-full py-16">
      <h1 className="text-white text-center text-2xl">Data Personal</h1>
      <form onSubmit={handleSubmmit}>
        <div className="flex flex-col h-96 items-center justify-around ">
          <div className="flex flex-col w-1/2">
            <label className="text-white py-4">Name</label>
            <input
              className="border border-gray-400 rounded-md outline-none px-2"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col w-1/2">
            <label className="text-white py-4">Age</label>
            <input
              className="border border-gray-400 rounded-md outline-none px-2"
              name="age"
              value={values.age}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="text-white py-4">Email</label>
            <input
              className="border border-gray-400 rounded-md outline-none px-2"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <button className="text-white w-32 h-10 bg-slate-500 rounded-md shadow-lg hover:shadow-none">
            Create student
          </button>
        </div>
      </form>
    </div>
  );
}

export { DataPersonal };
