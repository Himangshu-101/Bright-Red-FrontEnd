import { Routes, Route } from "react-router-dom";

import { Home, Error, Profile, Details } from "./Pages";

import { Navbar, Footer } from "./Components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/posts/: id" element={<PostDetails />} /> */}
        <Route path="*" element={<Error />} />
        <Route path="/details" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
