import { useState } from 'react';
import { createAccountWithEmailPassword, signUpWithGoogle } from '../firebase';
import { useNavigate } from 'react-router-dom'; 
import { FaGoogle } from 'react-icons/fa'; 

function Signup() {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

   // sign in with email&password
  const handleSignUpWithEmailPassword = () => {
    createAccountWithEmailPassword(email, password)
      .then(() => {
       
        navigate('/login');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // sign in with google
  const handleSignUpWithGoogle = () => {
    signUpWithGoogle()
      .then(() => {
        // Redirect to the login page 
        navigate('/login');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="relative bg-gray-900 h-screen">
      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <h1 className="text-3xl text-white font-bold mb-8 text-center">
          Sign up to MediValley Hospital
        </h1>
        <div className="flex flex-col items-center">
          <input
            type="email"
            placeholder="Email"
            className="w-64 px-4 py-2 mb-4 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-64 px-4 py-2 mb-4 rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleSignUpWithEmailPassword}
            className="w-64 inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline"
          >
            Sign up
          </button>
          <button
            onClick={handleSignUpWithGoogle}
            className="w-64 inline-flex items-center px-4 py-2 mt-2 bg-red-500 hover:bg-red-700 text-white font-bold rounded focus:outline-none focus:shadow-outline"
          >
            <FaGoogle className="mr-2" /> 
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <div className="text-center mt-4">
            <p className="text-gray-400">Already have an account? <span className="text-blue-500 cursor-pointer" onClick={() => navigate('/login')}>Login</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
