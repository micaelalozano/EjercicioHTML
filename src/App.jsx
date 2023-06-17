import React from "react";
import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Inicio from "./pages/Inicio";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Inicio />
              <ToastContainer />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
