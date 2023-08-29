import { useState, useMemo } from "react";
import IMG1 from "../img/logo.png";
// import { countries } from './countries';
import Select from "react-select";
// import { Link } from 'react-router-dom';
import countryList from "react-select-country-list";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PersonalInfo = ({ handleNext }) => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [secondName, setSecondName] = useState("");

  const handleDateOfBirthChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const changeHandler = (value) => {
    setValue(value);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: "309px",
      minHeight: "63px",
      padding: "4px",
      outline: "#603FEF",
    }),
  };

  const responsiveStyles = {
    control: (provided) => ({
      ...provided,
      "@media (min-width: 901px)": {
        width: "310px",
        height: "63px", // xxl breakpoint
      },
      "@media (max-width: 900px)": {
        width: "513px",
        height: "63px", // sm breakpoint
      },
      "@media (max-width: 671px)": {
        width: "309px",
        height: "63px", // xs breakpoint
      },
    }),
  };

  const mergedStyles = {
    ...customStyles,
    ...responsiveStyles,
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleSecondNameChange = (e) => {
    setSecondName(e.target.value);
  };

  const handleNextClick = () => {
    if (
      !dateOfBirth ||
      !gender ||
      !value ||
      !firstName ||
      !lastName ||
      !secondName
    ) {
      toast.error("Please fill in all fields.");
      return;
    }
    handleNext();
  };

  return (
    <div className="flex flex-col justify-center items-center w-[85%] pt-10 ">
      <div>
        <ToastContainer position="top-right" />
      </div>
      <div className="flex flex-col  gap-3 ">
          <h3 className="font-bold text-[25px] leading-[30px] text-primary flex lg:pl-[7rem] pl-[8rem] ">Sign Up</h3>
          <h4 className="font-semi-bold text-black  text-[24px] lg:pl-[3rem] pl-[4rem] leading-[29px]">Personal Information</h4>
          <p className="text-word text-[20px] leading-[24px] font-500 lg:pl-[0rem] pl-[1rem] ">Already have an account? <Link to="/signin"><span className=" font-400 text-primary ">sign in</span></Link></p>
        </div>

      <div className="flex flex-col mt-14 ">
        <div className="lg:flex lg:flex-row sm:grid sm:grid-cols-2 flex-col items-center lg:pl-[0rem] pl-[3rem] gap-4 ">
          <div>
            <form className="flex flex-col gap-2 ">
              <label className="  text-primary leading-[22px] font-Inter  ">
                First Name
              </label>
              <input
                onChange={handleFirstNameChange}
                type="text"
                placeholder="First Name"
                className="xxl:w-[309px] sm:w-[209px] w-[309px] outline-primary h-[63px] rounded-[8px] border border-primary pl-2 "
              />
            </form>
          </div>

          <div>
            <form className="flex flex-col gap-2 ">
              <label className="  text-primary leading-[22px] font-Inter  ">
                Second Name
              </label>
              <input
                onChange={handleSecondNameChange}
                type="text"
                placeholder="Second Name"
                className="xxl:w-[309px] sm:w-[209px] w-[309px] outline-primary h-[63px] rounded-[8px] border border-primary pl-2 "
              />
            </form>
          </div>

          <div>
            <form className="flex flex-col gap-2 ">
              <label className="  text-primary leading-[22px] font-Inter  ">
                Last Name
              </label>
              <input
                onChange={handleLastNameChange}
                type="text"
                placeholder="Last Name"
                className="xxl:w-[309px] lg:w-[209px] sm:w-[513px] outline-primary w-[309px] h-[63px] rounded-[8px] border border-primary pl-2  "
              />
            </form>
          </div>
        </div>

        <div className="lg:flex lg:flex-row sm:grid sm:grid-cols-2  flex-col items-center lg:pl-[0rem] pl-[3rem] gap-2  mt-5">
          <div>
            <form className="flex flex-col gap-1">
              <label className="  text-primary leading-[22px] font-Inter  ">
                Date Of Birth
              </label>

              <input
                type="date"
                value={dateOfBirth}
                onChange={handleDateOfBirthChange}
                placeholder="Select Date of Birth"
                className="xxl:w-[309px] sm:w-[209px] w-[309px] h-[63px] outline-primary rounded-[8px] border border-primary px-2"
              />
            </form>
          </div>

          <div>
            <form className="flex flex-col gap-2  ">
              <label className=" text-primary leading-[19px] ">Gender</label>
              <select
                value={gender}
                onChange={handleGenderChange}
                className="xxl:w-[309px] sm:w-[209px] w-[309px] h-[63px] outline-primary rounded-[8px] border border-primary px-2"
              >
                <option value="">Click to Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Prefer Not to Say</option>
              </select>
            </form>
          </div>

          <div>
            <form className="flex flex-col gap-1">
              <label className="  text-primary leading-[22px] font-Inter  ">
                Nationality
              </label>
              <Select
                // value={nationality}
                value={value}
                options={options}
                onChange={changeHandler}
                placeholder="Select Country"
                className="border-[1px] border-primary rounded-[8px] "
                // onChange={handleNationalityChange}
                styles={mergedStyles}
              />
            </form>
          </div>
        </div>

        <div className="flex justify-center lg:pl-[0rem] pl-[4rem] mt-9">
          <button
            className="hover:animate-bounce lg:w-[400px] lg:h-[63px] w-[200px] h-[63px] pl-[1rem] bg-primary text-white text-[20px] text-center rounded-lg mb-4 hover:bg-dark-primary"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
