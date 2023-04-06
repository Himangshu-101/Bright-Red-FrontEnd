import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Home, Error, Profile } from "./Pages";
import "react-toastify/dist/ReactToastify.css";
import { Navbar, Footer } from "./Components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/posts/: id" element={<PostDetails />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
