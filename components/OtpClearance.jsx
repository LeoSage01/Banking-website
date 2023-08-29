import { useState, useRef } from "react";




const OtpClearance = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleOtpChange = (index, value) => {
    if (!Number.isNaN(Number(value))) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;

      setOtp(updatedOtp);

      if (value !== "" && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return(
    <div className="flex flex-col items-center w-[100%]  pt-5 gap-5 ">
      <div className="flex gap-3 flex-col ">
        <h4 className="text-primary flex justify-center font-bold text-[25px] leading-[30px]  ">
          Sign in
        </h4>
        <p className="leading-[26px] text-[22px] font-semi-bold text-ash md:pl-[0rem] xs:pl-[2rem]">
        Enter the <span className="text-black ">OTP Code</span> that was sent to <span   className="text-black md:pr-[0rem] xs:pr-[.5rem] ">08012345678</span>
        <br className=" md:flex xs:hidden  "/>Be careful not to share this code with anyone
        </p>
      </div>
      <div>
      {otp.map((value, index) => (
        <input
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref)}
          className="border border-primary w-[50px] h-[50px] outline-primary rounded px-4 py-2 text-center text-black mx-2"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={value}
          onChange={(e) => handleOtpChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyPress(e, index)}
        />
      ))}
      </div>

      <div className=" mt-[39px] ">
        <button className=" bg-primary w-[300px] h-[53px] rounded-[8px] ">
          <p>Reset</p>
        </button>
      </div>
    </div>
  )
   
};

export default OtpClearance;
