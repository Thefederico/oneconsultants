import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { TableRegister } from "./components/TableRegister";
import { Header } from "./components/Header";
import { DataPersonal } from "./components/DataPersonal";
import { DataAcademic } from "./components/DataAcademic";

function App() {
  return (
    <div className="bg-slate-900 h-screen">
      <div>
        <Toaster />
      </div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<TableRegister />} />
          <Route path="/add" element={<DataPersonal />} />
          <Route path="/add/academic" element={<DataAcademic />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
