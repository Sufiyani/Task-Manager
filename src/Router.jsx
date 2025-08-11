import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import AddTaskComp from "./pages/add-task";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./components/layout/dashboard";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
           <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="add-task"
          element={
            <ProtectedRoute>
              <AddTaskComp />
            </ProtectedRoute>
          }
        />
       
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
