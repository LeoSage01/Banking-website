import { useState } from "react";
import IMG1 from "../../img/success.png";
import Amount from "./Amount";
import { BiArrowBack } from "react-icons/bi";


const AccDetails = ({ handleNext, handlePrev }) => {
  const [open, setOpen] = useState(false);
  // const [next, setNext] = useState(1)
  const [selectedBank, setSelectedBank] = useState(null);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleBankSelection = (bank) => {
    setSelectedBank(bank);
    setOpen(false);
  };

  return (
    <div className="h-[80%] w-full sm:w-[60%] mx-auto flex flex-col px-6">
      <div className="flex justify-end text-primary  text-xl" onClick={handlePrev}>
        <BiArrowBack/>
      </div>

      <div>
        <div className="text-center mb-6">
          <h3 className="text-primary font-bold mb-2">Funds Transfer</h3>
          <p className="text-gray-500">Transaction History</p>
        </div>

        <p className="mb-1">Bank Name</p>

        <div
          className="w-full text-slate-500 p-4 bg-white rounded-md shadow-sm flex justify-between"
          onClick={handleOpen}
        >
          <p className="my-auto">{selectedBank || "Choose Bank"}</p>
          <span className="material-symbols-outlined font-bold">
            expand_more
          </span>
        </div>
        {open ? (
          <ul className="mt-2 w-full shadow-sm rounded-md rounded-t-none bg-white">
            <li
              className="menu-item p-1 hover:bg-[#eceeff] flex justify-between"
              onClick={() => handleBankSelection("CHASE Bank")}
            >
              <p className="p-2">CHASE Bank</p>
            </li>

            <li
              className="menu-item p-1 hover:bg-[#eceeff]"
              onClick={() => handleBankSelection("Savings")}
            >
              <p className="p-2">Savings</p>
            </li>

            <li
              className="menu-item p-1 hover:bg-[#eceeff] rounded-b-md"
              onClick={() => handleBankSelection("Bank of America")}
            >
              <p className="p-2">Bank of America</p>
            </li>
          </ul>
        ) : null}

        {open ? null : (
          <>
            <div className="mt-4">
              <p className="mb-1">Reciepient Account Number</p>
              <input
                type="number"
                className="w-full text-sm p-4 outline-none bg-white rounded-md shadow-sm"
                placeholder="Enter the Account number"
              />
            </div>
          </>
        )}

        <div className="text-slate-500 mt-4">
          <p className="mb-1">Reciepient Account Name</p>
          <div className="w-full p-4 bg-white rounded-md shadow-sm flex justify-between">
            <p>Jack O'wells</p>
            <img className="h-5" src={IMG1} alt="" />
          </div>
        </div>

        <div
          className="w-full mt-8 text-white p-4 bg-primary rounded-md flex justify-center hover:cursor-pointer"
          onClick={handleNext}
        >
          <p>Proceed</p>
        </div>
      </div>
    </div>
  );
};

export default AccDetails;
