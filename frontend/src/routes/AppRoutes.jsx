import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";

import Dashboard from "../pages/Dashboard/Dashboard";
import Doctors from "../pages/Doctors/Doctors";
import Appointments from "../pages/Appointments/Appointments";
import Profile from "../pages/Profile/Profile";

import HospitalLayout from "../layouts/HospitalLayout/HospitalLayout";

function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route element={<HospitalLayout />}>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/doctors"
            element={<Doctors />}
          />
          <Route
            path="/appointments"
            element={<Appointments />}
            />

            <Route
            path="/profile"
            element={<Profile />}
            />

        </Route>

      </Routes>

    </BrowserRouter>

  );

}

export default AppRoutes;