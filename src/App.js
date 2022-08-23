// import logo from './logo.svg';
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import CharacterByLocation from "./Components/CharacterByLocation";
import CharactersList from "./Components/CharactersList";
import DetailCharacter from "./Components/DetailCharacter";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route strict exact path="/" element={<CharactersList />} />
        <Route strict exact path="/:id" element={<DetailCharacter />} />
        <Route
          strict
          exact
          path="/location/:id"
          element={<CharacterByLocation />}
        />
        <Route strict exact path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
