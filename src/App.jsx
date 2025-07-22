import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";
import Room from "./pages/Room";
import EmptyRoom from "./pages/EmptyRoom";
import Profile from "./pages/Profile";
import "./App.css";
import Footer from "./component/layout/Footer";
import About from "./pages/About";
import Login from "./pages/login";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Student />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/room" element={<Room />} />
            <Route path="/empty-room" element={<EmptyRoom />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
