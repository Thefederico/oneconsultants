import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { User, CourseStatus } from "../../types";

const initialState = {
  id: 0,
  name: "",
  age: "",
  email: "",
  nameCourse: "",
  program: "",
  status: "",
};

export const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setAge: (state, action: PayloadAction<string>) => {
      state.age = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setNameCourse: (state, action: PayloadAction<string>) => {
      state.nameCourse = action.payload;
    },
    setProgram: (state, action: PayloadAction<string>) => {
      state.program = action.payload;
    },
    setStatus: (state, action: PayloadAction<CourseStatus>) => {
      state.status = action.payload;
    },
  },
});

export const selectName = (state: User) => state.students.name;
export const selectAge = (state: User) => state.students.age;
export const selectEmail = (state: User) => state.students.email;

export const {
  setAge,
  setEmail,
  setName,
  setNameCourse,
  setProgram,
  setStatus,
} = studentsSlice.actions;
export default studentsSlice.reducer;
