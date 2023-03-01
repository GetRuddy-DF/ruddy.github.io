import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './router/Home';
import About from './router/About';
import Projects from './router/Projects';
import Contacts from './router/Contacts';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
