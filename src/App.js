import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navabar/Navbar";
import Home from "./components/Home/Home";
import CreateExercise from "./components/CreateExercise/CreateExercise";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create" element={<CreateExercise />} />
        <Route path="/edit/:id" element={<CreateExercise />} />
      </Routes>
    </div>
  );
}

export default App;
