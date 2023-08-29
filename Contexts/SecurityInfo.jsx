import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IMG1 from "../img/logo.png";
import EYE from "../img/carbon_view.png";
import EYEClose from "../img/mdi_hide-outline.png";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SecurityInfo = ({ handleNext }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [securityAnswer, setSecurityAnswer] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [showCreatePassword, setShowCreatePassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isConfirmPasswordTouched, setIsConfirmPasswordTouched] =
    useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$&=])[A-Za-z\d@$&=]{8,}$/;
    const isPasswordValid = passwordRegex.test(e.target.value);

    setIsPasswordValid(isPasswordValid);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setIsConfirmPasswordTouched(true);
  };

  const toggleCreatePasswordVisibility = () => {
    setShowCreatePassword((prevShowCreatePassword) => !prevShowCreatePassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };

  const handleSecurityQuestionChange = (e) => {
    setSecurityQuestion(e.target.value);
    if (securityAnswer && securityQuestion !== e.target.value) {
      setSecurityAnswer("");
    }
  };

  const handleSecurityAnswerChange = (e) => {
    setSecurityAnswer(e.target.value);
  };

  const handleNextClick = () => {
    if (
      username.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === "" ||
      securityQuestion.trim() === "" ||
      securityAnswer.trim() === ""
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (!isPasswordValid) {
      toast.error(
        "Password must include at least 8 characters, including capital letters, small letters, numbers, and special characters."
      );
      return;
    }

    setIsFormValid(true);

    handleNext();
  };

  return (
    <div className="flex flex-col items-center w-[85%] pt-5 pb-8">
      <div className="flex flex-row  gap-3 relative ">
        
        <div className="flex flex-col  gap-3 ">
          <h3 className="font-bold text-[25px] leading-[30px] text-primary flex justify-center ">
            Sign Up
          </h3>
          <h4 className="font-semi-bold text-black  text-[24px] flex  sm:pl-[0] pl-[2rem] justify-center leading-[29px]">
            Security Information
          </h4>
          <p className="text-word text-[20px] leading-[24px] font-500 lg:pl-[0rem] pl-[1rem] ">
            Already have an account?{" "}
            <Link to="/signin">
              <span className=" font-400 text-primary ">sign in</span>
            </Link>
          </p>
        </div>
      </div>

      <div className="flex flex-col mt-14 ">
        <form className="justify-center flex flex-col items-center gap-5  ">
          <div className="flex flex-col gap-2 pl-[4rem] lg:pl-[0]  sm:pl-[8rem]">
            <label className="font-400 text-[18px] text-primary  leading-[22px] font-Inter ">
              Username:
            </label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              required
              placeholder="Enter a Username"
              className="xxl:w-[787px] sm:w-[587px] w-[309px] h-[63px] rounded-[8px] outline-primary border-2 border-primary pl-2 "
            />
          </div>

          <div className=" flex sm:flex-row flex-col gap-5 ">
            <div className="flex flex-col gap-2 pl-[4rem] lg:pl-[0]  sm:pl-[8rem]  ">
              <label className="font-400 text-[18px] text-primary  leading-[22px] font-Inter ">
                Create Password:
              </label>
              <div
                className={`relative ${
                  isPasswordValid ? "" : "invalid-password"
                }`}
              >
                <input
                  type={showCreatePassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  placeholder="Enter a Strong password"
                  className={`xxl:w-[309px] sm:w-[309px] w-[309px] outline-primary h-[63px] rounded-[8px] border ${
                    isConfirmPasswordTouched && !isPasswordValid
                      ? "border-red-500"
                      : "border-primary"
                  } pl-2 `}
                />
                <span
                  className="absolute right-2 top-[30%] cursor-pointer"
                  onClick={toggleCreatePasswordVisibility}
                >
                  {showCreatePassword ? (
                    <img src={EYE} alt="EYE" className="h-5 w-5 " />
                  ) : (
                    <img src={EYEClose} alt="EYE" className="h-5 w-5 " />
                  )}
                </span>
              </div>

              <div>
                <ToastContainer position="top-right" />
              </div>
            </div>

            <div className="flex flex-col gap-2 pl-[4rem] relative ">
              <label className="font-400 text-[18px] text-primary leading-[22px] font-Inter ">
                Re-type Password:
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
                placeholder="Re-enter Password"
                className={`xxl:w-[309px] sm:w-[309px] w-[309px] outline-primary h-[63px] rounded-[8px] border ${
                  isConfirmPasswordTouched && !isPasswordValid
                    ? "border-red-500"
                    : "border-primary"
                } pl-2 `}
              />
              <span
                className="absolute right-2 top-[50%] cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? (
                  <img src={EYE} alt="EYE" className="h-5 w-5 " />
                ) : (
                  <img src={EYEClose} alt="EYEClose" className="h-5 w-5 " />
                )}
              </span>
            </div>
          </div>

          <div className=" flex sm:flex-row flex-col gap-5  ">
            <div className="flex flex-col gap-2 pl-[4rem] lg:pl-[0]  sm:pl-[8rem]">
              <label className="font-400 text-[18px] leading-[22px] text-primary font-Inter ">
                Security Question:
              </label>
              <select
                value={securityQuestion}
                onChange={handleSecurityQuestionChange}
                required
                className="xxl:w-[309px] sm:w-[309px] w-[309px] outline-primary h-[63px] rounded-[8px] border border-primary pl-2"
              >
                <option value="">Select One</option>
                <option value="What is your pet's name?">
                  What is your pets name?
                </option>
                <option value="What is your mother's maiden name?">
                  What is your mothers maiden name?
                </option>
                <option value="What is the name of your first school?">
                  What is the name of your first school?
                </option>
                <option value="What is your favorite color?">
                  What is your favorite color?
                </option>
                <option value="What city were you born in?">
                  What city were you born in?
                </option>
              </select>
            </div>

            <div className="flex flex-col gap-2 pl-[4rem]">
              <label className="font-400 text-[18px] leading-[22px] text-primary font-Inter ">
                Answer Security Question:
              </label>
              <input
                type="text"
                value={securityAnswer}
                onChange={handleSecurityAnswerChange}
                required
                placeholder="A detailed info"
                className="xxl:w-[309px] sm:w-[309px] w-[309px] outline-primary h-[63px] rounded-[8px] border border-primary pl-2 "
              />
            </div>
          </div>

          {isFormValid ? (
            <div>
              <p>Form is valid. Ready to proceed.</p>
            </div>
          ) : (
            <div className="flex justify-center mt-9">
              <Link to="/confirm">
                <button
                  className="hover:animate-bounce lg:w-[400px] lg:h-[63px] w-[200px] h-[63px] pl-[1rem] bg-primary text-white font-600 text-[20px] leading-[24px] text-center rounded-[8px] hover:bg-dark-primary"
                  onClick={handleNextClick}
                >
                  Submit
                </button>
              </Link>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SecurityInfo;
