
import './App.css';
import Signup from './component/Signup';
import Booking from './pages/Booking';
import Hero from './pages/Hero';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
