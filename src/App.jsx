import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { Home, Profile, Details } from "./Pages";
import "react-toastify/dist/ReactToastify.css";
import { Navbar, Footer } from "./Components";

const App = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/" />} />
        <Route path="/posts/: id" element={<Details />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
