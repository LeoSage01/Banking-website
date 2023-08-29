import { useState, useRef } from "react";
import Success from "./Success";

const Confirm = ({ handleCancel, succModal }) => {
  const [pin, setPin] = useState(["", "", "", "", ""]);

  const inputRefs = useRef([]);

  const handlePinChange = (index, value) => {
    if (!Number.isNaN(Number(value))) {
      const updatedPin = [...pin];
      updatedPin[index] = value;

      setPin(updatedPin);

      if (value !== "" && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.key === "Backspace" && pin[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <>
      <div className="h-full w-full backdrop-blur-sm absolute top-0 left-0 flex flex-col justify-center px-4">
        <div className="h-[500px] sm:w-[400px] mx-auto py-6 px-8 bg-white flex flex-col justify-evenly rounded-md ">
          <h3 className="text-primary text-center font-bold">Confirm</h3>

          <div className="grid grid-cols-2 gap-6 p-4 ">
            <div className="">
              <p className="text-slate-500">From</p>
              <p className="font-bold">USD Balance</p>
            </div>

            <div className="">
              <p className="text-slate-500 flex justify-end">Transaction Fee</p>
              <p className="font-bold flex justify-end">$0.01</p>
            </div>

            <div className="">
              <p className="text-slate-500">Reciepient</p>
              <p className="font-bold">Jack O'wells</p>
            </div>

            <div className="">
              <p className="text-slate-500 flex justify-end">Amount</p>
              <p className="font-bold flex justify-end">$1200</p>
            </div>

            <div className="">
              <p className="text-slate-500">Description</p>
              <p className="font-bold">For Sneakers</p>
            </div>
          </div>

          <div className="border-dashed border-[1px] border-gray-500"></div>

          <div className="flex flex-col">
            <h4 className="mx-auto text-xs">Please type transaction Pin</h4>

            <div className="mx-auto py-6">
              {pin.map((value, index) => (
                <input
                  key={index}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                  className="border h-[30px] w-[30px] xs:w-[40px] xs:h-[40px] outline-primary rounded-md px-2 py-2 text-center text-black font-bold mx-1 xs:mx-2"
                  type="password"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  value={value}
                  onChange={(e) => handlePinChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyPress(e, index)}
                />
              ))}
            </div>

            <div className="text-xs space-x-6 mx-auto">
              <button
                className="py-2 px-5 text-primary border-solid border-[1px] border-primary  rounded-md"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="py-2 px-5 bg-primary text-white rounded-md"
                onClick={succModal} 
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirm;
