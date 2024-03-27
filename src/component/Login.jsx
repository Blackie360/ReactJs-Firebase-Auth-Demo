import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import { FaGoogle } from 'react-icons/fa'; 

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginWithEmailPassword = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in with email and password
      
        navigate('/booking');
      })
      .catch((error) => {
        // Handle errors here
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        // Signed in with Google
        
        
        navigate('/booking');
      })
      .catch((error) => {
        // Handle errors here
        setError(error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleLoginWithEmailPassword}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type={showPassword ? "text" : "password"} id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            <button type="button" onClick={togglePasswordVisibility} className="absolute top-1/2 right-2 transform -translate-y-1/2">
              {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
            </button>
          </div>
          <div className="flex justify-between">
            <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
          </div>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 mt-4 flex justify-center items-center"
        >
          <FaGoogle className="mr-2" /> Sign in with Google
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <div className="mt-4 text-center">
          <Link to="/reset-password" className="text-blue-500 hover:underline focus:outline-none">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
};
