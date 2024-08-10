import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Countries from "./pages/Countries";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Countries />} />
      </Routes>
    </Router>
  );
}

export default App;
