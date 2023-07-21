import { useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EYE from "../img/carbon_view.png"
import EYEClose from "../img/mdi_hide-outline.png"
import Otp from "../pages/Otp";
import Dashboard from "../pages/Dashboard"
import { useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom"

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$&=])[A-Za-z\d@$&=]{8,}$/;
    const isPasswordValid = passwordRegex.test(e.target.value);
  
    setPassword(e.target.value);
    setIsPasswordValid(isPasswordValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      toast.error('Please fill in all fields.');
      return;
    }

    if (!isPasswordValid) {
      toast.error(
        'Password must include at least 8 characters, including capital letters, small letters, numbers, and special characters.'
      );
      return;
    }

    setIsLoggedIn(true);
  navigate('/dashboard');
    // Perform login logic here
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
    

  const handlePasswordBlur = () => {
    setIsPasswordTouched(true);
  };

  return (
    <div className="flex justify-center  ">
       <div >
              <ToastContainer position="top-right"/>
              </div>
    <form
      className="bg-white  px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded sm:w-[511px] xs:w-[309px] h-[63px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
       
        <div
    className={`relative ${
      isPasswordTouched && !isPasswordValid && password !== '' ? 'invalid-password' : ''
    }`}
  >
    <input
      className={`shadow appearance-none border rounded sm:w-[511px] xs:w-[309px] h-[63px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  pl-2 ${
        isPasswordTouched && !isPasswordValid && password !== '' ? 'border-red-500' : ''
      }`}
      id="password"
      type={showPassword ? 'text' : 'password'}
      required
      placeholder="Enter your password"
      value={password}
      onChange={handlePasswordChange}
      onBlur={handlePasswordBlur}
      autoComplete="current-password"
    />
        <span
        className="absolute right-2 top-[30%] cursor-pointer"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
          <img src={EYE} alt="EYE" className="h-5 w-5" />
        ) : (
          <img src={EYEClose} alt="EYE" className="h-5 w-5" />
        )}
      </span>
       </div>
        
              
       
        </div>
      
      <div className="flex items-center justify-between">
        <button
          className="bg-primary hover:bg-dark-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit" 
        >
          Sign In
        </button>
        <Link to="/otp">
         <a
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="#"
        >
          Forgot Password?
        </a>
        </Link>
       
      </div>
    </form>
    {isLoggedIn && <Dashboard />}
   
  </div>
  )
}

export default SignInForm