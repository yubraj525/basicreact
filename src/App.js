import './App.css';
import Home from './components/screens/Home';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from './components/screens/login';





function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
