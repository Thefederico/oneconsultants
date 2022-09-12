import React from "react";
import { CourseStatus } from "../types";

interface Props {
  values: CourseStatus | string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectStatusCourse = ({ values, handleChange }: Props) => (
  <select
    className="border border-gray-400 rounded-md outline-none px-2"
    name="status"
    value={values}
    onChange={handleChange}
  >
    <option value="Incomplete">Incomplete</option>
    <option value="Approved">Approved</option>
    <option value="Failed">Falied</option>
  </select>
);

export { SelectStatusCourse };
