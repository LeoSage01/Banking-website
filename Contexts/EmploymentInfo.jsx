import { useState } from "react";
import IMG1 from "../img/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react/prop-types
const EmploymentInfo = ({ handleNext }) => {
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [employerName, setEmployerName] = useState("");
  const [accountType, setAccountType] = useState("");
  const [occupation, setOccupation] = useState("");

  const handleEmploymentStatusChange = (e) => {
    setEmploymentStatus(e.target.value);
  };

  const handleEmployerNameChange = (e) => {
    setEmployerName(e.target.value);
  };

  const handleAccountTypeChange = (e) => {
    setAccountType(e.target.value);
  };

  const handleOccupationChange = (e) => {
    setOccupation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Employment Status:", employmentStatus);
    console.log("Employer's Name:", employerName);
    console.log("Account Type:", accountType);
    console.log("Occupation:", occupation);

    setEmploymentStatus("");
    setEmployerName("");
    setAccountType("");
    setOccupation("");
  };

  const handleNextClick = () => {
    if (!employmentStatus || !occupation || !accountType || !employerName) {
      toast.error("Please fill in all fields.");
      return;
    }

    handleNext();
  };

  return (
    <div className="flex flex-col justify-center items-center w-[85%] pt-5 ">
      <div>
        <ToastContainer position="top-right" />
      </div>
      <div className="flex flex-row  gap-3 relative ">
        
        <div className="flex flex-col  gap-3 ">
          <h3 className="font-bold text-[25px] leading-[30px] text-primary flex justify-center ">
            Sign Up
          </h3>
          <h4 className="font-semi-bold text-black  text-[24px] flex  sm:pl-[0] pl-[2rem] justify-center leading-[29px]">
            Financial and Employment Information
          </h4>
        </div>
      </div>

      <div className=" flex flex-col mt-14 mt-[2rem]  ">
        <form
          onSubmit={handleSubmit}
          className="justify-center flex flex-col items-center gap-5  "
        >
          <div className=" flex md:flex-row flex-col gap-5 ">
            <div className="flex flex-col gap-2 pl-[4rem] lg:pl-[0]  md:pl-[8rem]">
              <label className="font-400 text-[18px] leading-[22px] font-Inter text-primary ">
                Employment Status:
              </label>
              <select
                value={employmentStatus}
                onChange={handleEmploymentStatusChange}
                required
                className="xxl:w-[309px] sm:w-[309px] w-[309px] outline-primary h-[63px] rounded-[8px] border border-primary pl-2 "
              >
                <option value="">Select Employment Status</option>
                <option value="employed">Employed</option>
                <option value="self-employed">Self-Employed</option>
                <option value="unemployed">Unemployed</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 pl-[4rem]">
              <label className="font-400 text-[18px] leading-[22px] text-primary  font-Inter ">
                Occupation:
              </label>
              <input
                type="text"
                value={occupation}
                onChange={handleOccupationChange}
                required
                placeholder="Enter Ocupation"
                className="xxl:w-[309px] sm:w-[309px] w-[309px] outline-primary h-[63px] rounded-[8px] border border-primary pl-2 "
              />
            </div>
          </div>

          <div className=" flex md:flex-row flex-col gap-5 ">
            <div className="flex flex-col gap-2 pl-[4rem] lg:pl-[0]  md:pl-[8rem]">
              <label className="font-400 text-[18px] leading-[22px] text-primary font-Inter ">
                Account Type:
              </label>
              <select
                value={accountType}
                onChange={handleAccountTypeChange}
                required
                className="xxl:w-[309px] sm:w-[309px] w-[309px] outline-primary h-[63px] rounded-[8px] border border-primary   pl-2 "
              >
                <option value="">Select Account Type</option>
                <option value="savings">Savings</option>
                <option value="checking">Checking</option>
                <option value="credit">Credit</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 pl-[4rem]">
              <label className="font-400 text-[18px] leading-[22px] font-Inter text-primary ">
                Employers Name:
              </label>
              <input
                type="text"
                value={employerName}
                onChange={handleEmployerNameChange}
                required
                placeholder="Enter Employers Name"
                className="xxl:w-[309px] sm:w-[309px] w-[309px] outline-primary h-[63px] rounded-[8px] border border-primary pl-2 "
              />
            </div>
          </div>

          <div className="flex justify-center lg:pl-[0rem] pl-[4rem] mt-9">
            <button
              className="hover:animate-bounce lg:w-[400px] lg:h-[63px] w-[200px] h-[63px] pl-[1rem] bg-primary text-white font-600 text-[20px] leading-[24px] rounded-[8px] hover:bg-dark-primary"
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmploymentInfo;
