import { Routes, Route } from "react-router-dom";

import { Register } from "../pages/Register";
import { Listing } from "../pages/Listing";

export const Navgation = () => {
  return (
    <Routes>
      <Route path="/" element={<Register/>} />
      <Route path="/list" element={<Listing/>} />
    </Routes>
  );
};
