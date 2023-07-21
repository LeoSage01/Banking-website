import { Link } from "react-router-dom"
import IMG1 from "../img/logo.png"
import SignInForm from "./SignInForm"

const SignInMain = () => {
  return (
    <div  className="flex flex-col items-center w-[100%] pt-5 ">
    <div className="flex flex-row  gap-3 justify-center relative ">
    <div className="hover:animate-bounce  absolute md:left-[-40%] sm:left-[-50%] xs:left-[-10%]  ">
    <a href="/">
        <img className='h-4 sm:h-4' src={IMG1} alt="Logo" />
    </a>
    </div>

   <div className="flex flex-col  gap-3 ">
   <h3 className="font-bold text-[25px] leading-[30px] text-primary flex lg:pl-[5rem] xs:pl-[8rem] ">Sign IN</h3>
    <h4 className="font-semi-bold text-black  text-[24px] lg:pl-[3rem] xs:pl-[4rem] leading-[29px]">Welcome Back</h4>
    <p className="text-word text-[20px] leading-[24px] font-500 lg:pl-[0rem] xs:pl-[1rem] ">Dont have an account? <Link to="/signup"><span className=" font-400 text-primary ">sign up</span></Link> </p>
    </div>
   </div>

   <div>
    <SignInForm/>
   </div>
    </div>
  )
}

export default SignInMain