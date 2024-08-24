import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";
import About from "./pages/About";
import Header from "./component/Header";
import FooterComp from "./component/Footer";
import PrivateRoute from "./component/PrivateRoute";
import FourOFour from "./component/FourOFour";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
      <FooterComp />
    </>
  );
}

export default App;
