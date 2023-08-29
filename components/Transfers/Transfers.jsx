import { useState } from "react";
import IMG1 from "../../img/trans1.png";
import IMG2 from "../../img/trans2.png";
import AccDetails from "./AccDetails";
import AccDetailsInt from "./AccDetailsInt";
import Amount from "./Amount";

const Transfers = () => {
  const [next, setNext] = useState(0);

  const forBank = () => {
    setNext(1);
  };

  const forIntBank = () => {
    setNext(2);
  };

  const handleNext = () => {
    if (next == 1) {
      setNext(3);
    } else {
      setNext(next + 1);
    }
  };

  const handlePrev = () => {
    if (next == 2) {
      setNext(0);
    } else {
      setNext(next - 1);
    }
  };

  const reset = () => {
    setNext(0);
  };

  return (
    <div className="w-full mx-auto flex flex-col justify-around pt-8 pb-4 text-xs xs:text-base">
      {next == 0 && (
        <div className="h-[80%] px-4 w-full sm:w-[80%] md:w-[60%] mx-auto flex flex-col space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-primary font-bold mb-2">Funds Transfer</h3>
            <p className="text-gray-500">Transaction History</p>
          </div>

          <div className="w-full bg-white rounded-md p-4 flex justify-between">
            <div className="flex space-x-4">
              <div className="h-8 w-8 xs:h-10 xs:w-10 bg-white my-auto p-2 shadow-sm rounded-full">
                <img className="" src={IMG1} alt="" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-primary">
                  Send to a Noxa Bank User
                </h4>
                <p className="text-slate-500">Charge fee transfer</p>
              </div>
            </div>
            <span className="material-symbols-outlined font-bold my-auto text-slate-500">
              chevron_right
            </span>
          </div>

          <div
            className="w-full bg-white rounded-md p-4 flex justify-between"
            onClick={forBank}
          >
            <div className="flex space-x-5">
              <div className="h-8 w-8 xs:h-10 xs:w-10 bg-purple-600 my-auto p-2 rounded-full">
                <img className="h-full" src={IMG2} alt="" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-primary">
                  Send to a Bank Account
                </h4>
                <p className="text-slate-500">Send to a local Bank account</p>
              </div>
            </div>
            <span className="material-symbols-outlined font-bold my-auto text-slate-500">
              chevron_right
            </span>
          </div>

          <div
            className="w-full] bg-white rounded-md p-4 flex justify-between"
            onClick={forIntBank}
          >
            <div className="flex space-x-5">
              <div className="h-8 w-8 xs:h-10 xs:w-10 bg-black my-auto p-2 rounded-full">
                <img className="h-full" src={IMG2} alt="" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold">International Account</h4>
                <p className="text-slate-500">
                  Send money to your friends quickly
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined font-bold my-auto text-slate-500">
              chevron_right
            </span>
          </div>
        </div>
      )}
      {next == 1 && (
        <AccDetails
          next={next}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      )}
      {next == 2 && (
        <AccDetailsInt
          next={next}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      )}
      {next == 3 && <Amount handlePrev={handlePrev} reset={reset} />}
    </div>
  );
};

export default Transfers;
