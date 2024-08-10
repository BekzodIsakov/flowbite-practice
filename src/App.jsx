import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Countries from "./pages/Countries";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Countries />} />
      </Routes>
    </Router>
  );
}

export default App;
