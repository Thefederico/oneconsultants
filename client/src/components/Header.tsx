import * as React from "react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <div className="w-full h-16 flex pr-10 items-center justify-end text-white bg-slate-800 space-x-3">
      <NavLink to="/add" className="">
        <p className="hover:underline">Add Student</p>
      </NavLink>
      <NavLink to="/" className="">
        <p className="hover:underline">Table register</p>
      </NavLink>
    </div>
  );
}
