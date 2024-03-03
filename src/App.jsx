
import './App.css';
import Forgetpassword from './component/Forgetpassword';
import { Login } from './component/Login';
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
          <Route path= "/login" element={<Login />} />
          <Route path="//reset-password" element={<Forgetpassword />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
