import { useState } from "react";
import IMG1 from "../img/logo.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ContactInfo = ({ handleNext }) => {


  const [email, setEmail] = useState('');
  const [cityRegion, setCityRegion] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCityRegionChange = (e) => {
    setCityRegion(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePostalCodeChange = (e) => {
    setPostalCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    setEmail('');
    setCityRegion('');
    setPhoneNumber('');
    setPostalCode('');
  };

  const handleNextClick = () => {
    if (
      !email ||
      !postalCode ||
      !phoneNumber ||
      !cityRegion
    ) {
      toast.error('Please fill in all fields.');
      return;
    }

    handleNext();
  };

  return (
    // <div className="flex flex-col justify-center items-center w-[85%] pt-10 pb-8">
     <div className="flex flex-col justify-center items-center w-[85%] pt-10 ">
      <div >
        <ToastContainer position="top-right" />
      </div>
      <div className="flex flex-row  gap-3 relative ">
        
        <div className="flex flex-col  gap-3 ">
          <h3 className="font-bold text-[25px] leading-[30px] text-primary flex lg:pl-[7rem] pl-[8rem] ">Sign Up</h3>
          <h4 className="font-semi-bold text-black  text-[24px] lg:pl-[3rem] pl-[4rem] leading-[29px]">Personal Information</h4>
          <p className="text-word text-[20px] leading-[24px] font-500 lg:pl-[0rem] pl-[1rem] ">Already have an account? <Link to="/signin"><span className=" font-400 text-primary ">sign in</span></Link></p>
        </div>
      </div>

      <div className="flex flex-col mt-14  ">
        <form onSubmit={handleSubmit} className=" md:justify-start md:items-start   justify-center flex flex-col items-center gap-5 " >
          <div className="flex flex-col gap-2 md:pl-[0rem] pl-[4rem]">
            <label className="font-400 text-[18px] text-primary leading-[22px] font-Inter ">Email address:</label>
            <input type="email" value={email} onChange={handleEmailChange} required placeholder="Enter your Email Address" className="xxl:w-[787px] sm:w-[587px] w-[309px] h-[63px] rounded-[8px] outline-primary border-2 border-primary pl-2 " />
          </div>
          <div className=" flex sm:flex-row gap-3 flex-col md:pl-[0rem] pl-[4rem] ">
            <div className="flex flex-col gap-2">
              <label className="font-400 text-[18px] leading-[22px] text-primary font-Inter ">City/Region:</label>
              <input type="text" value={cityRegion} onChange={handleCityRegionChange} placeholder="Enter city" required className="xxl:w-[309px] sm:w-[309px] w-[309px] outline-primary h-[63px] rounded-[8px] border border-primary pl-2 " />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-400 text-[18px] leading-[22px] text-primary font-Inter ">Phone Number:</label>
              <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} placeholder="Enter Phone Number" required className="xxl:w-[309px] sm:w-[309px] w-[309px] outline-primary h-[63px] rounded-[8px] border border-primary pl-2 " />
            </div>
          </div>
          <div className="flex flex-col gap-2 md:pl-[0rem] md:pr-[5rem] pl-[4rem]">
            <label className="font-400 text-[18px] leading-[22px] text-primary font-Inter ">Postal Code:</label>
            <input type="text" value={postalCode} onChange={handlePostalCodeChange} placeholder="Enter Code" required className="xxl:w-[509px] sm:w-[509px] w-[309px] h-[63px] rounded-[8px] outline-primary border border-primary pl-2 " />
          </div>



          <div className="flex justify-center lg:pl-[0rem] pl-[4rem] mt-9">
          <button
            className="hover:animate-bounce lg:w-[400px] lg:h-[63px] w-[200px] h-[63px] pl-[1rem] bg-primary text-white text-[20px] text-center rounded-lg mb-4 hover:bg-dark-primary"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>

        </form>
      </div>




    </div>
  )
}

export default ContactInfo