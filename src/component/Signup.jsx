
import { signInWithGoogle } from '../firebase';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

function Signup() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleSignInWithGoogle = () => {
    signInWithGoogle().then(() => {
      // Redirect to the booking route
      navigate('/booking');
    });
  };

  return (
    <div className="relative bg-gray-900 h-screen">
      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <h1 className="text-3xl text-white font-bold mb-8 text-center">
          Sign in to MediValley Hospital
        </h1>
        <button
          onClick={handleSignInWithGoogle}
          className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline"
        >
          <svg
            className="w-4 h-4 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.004 9.006a4.505 4.505 0 01-3.002 1.508 5.25 5.25 0 01-4.501-4.502.75.75 0 00-1.007 1.009 4.248 4.248 0 01-3.752 1.405H3.75a.75.75 0 00-.75-.75v-.75a.75.75 0 00-.75-.75H.75A.75.75 0 000 6.75v15a.75.75 0 00.75.75h15a.75.75 0 00.75-.75v-15a.75.75 0 00-.75-.75H15ZM4.502 5.251c1.252-1.504 2.754-2.257 4.502-2.257a5.25 5.25 0 014.501 4.502.75.75 0 001.007-1.009c-.835-.904-2.003-1.403-3.251-1.403H7.502a.75.75 0 00-.75.75v.75a.75.75 0 00.75.75h1.502Z"
              fill="currentColor"
            />
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Signup;
