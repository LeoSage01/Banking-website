import { useState } from "react";
import Confirm from "./Confirm";
import Success from "./Success";
import { BiArrowBack } from "react-icons/bi";

const Amount = ({ handleNext, next, handlePrev, reset }) => {
  const [modal, setModal] = useState(false);
  const [succ, setSucc] = useState(false);

  const confirmModal = () => {
    setModal(true);
  };

  const handleCancel = () => {
    setModal(false);
  };

  const succModal = () => {
    setSucc(true);
    setModal(false);
  };

  return (
    <div className="h-[80%] w-full sm:w-[60%] mx-auto flex flex-col px-6">
      <div className="flex justify-end text-primary  text-xl" onClick={handlePrev}>
        <BiArrowBack/>
      </div>

      <div className="w-full h-full md:w-[70%] mx-auto px-4">
        <div className="text-center mb-6">
          <h3 className="text-primary font-bold mb-2">Funds Transfer</h3>
          <p className="text-gray-500">Transaction History</p>
        </div>
        <div className="mb-4">
          <p className="text-lg mb-1">Amount</p>
          <div className=" bg-white flex rounded-md shadow-sm px-4 space-x-4 text-sm">
            <span className="text-slate-500 py-4">USD</span>
            <input
              type="number"
              className="w-full outline-none py-4 pr-0"
              placeholder="Enter Amount"
            />
          </div>
        </div>

        <div className="">
          <div className="mb-1 flex justify-between">
            <p className="text-lg">Remarks</p>
            <p className="text-slate-500">(Optional)</p>
          </div>
          <input
            type="text"
            className="w-full bg-white text-sm outline-none p-4 rounded-md shadow-sm"
            placeholder="Enter your Remarks"
          />
        </div>

        <div
          className="w-full mt-8 text-white p-4 bg-primary rounded-md flex justify-center hover:cursor-pointer"
          onClick={confirmModal}
        >
          <p>PROCEED</p>
        </div>

        {modal && <Confirm handleCancel={handleCancel} succModal={succModal} />}
        {succ && <Success reset={reset}/>}
      </div>
    </div>
  );
};

export default Amount;
