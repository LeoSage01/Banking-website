import { useState } from "react";
import IMG1 from "../../img/success.png"
import Amount from "./Amount";


const AccDetails = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="">
                <p className="mb-1">Bank Name</p>

                <div className="w-full text-slate-500 p-4 bg-white rounded-md shadow-sm flex justify-between"
                    onClick={handleOpen}
                >
                    <p className="my-auto">Choose Bank</p>
                    <span className="material-symbols-outlined font-bold">
                        expand_more
                    </span>
                </div>
                {open ? (
                    <ul className="mt-2 w-full shadow-sm rounded-md rounded-t-none bg-white">
                        <li className="menu-item p-1 hover:bg-[#eceeff] flex justify-between"
                            onClick={handleOpen}>
                            <p className="p-2">CHASE Bank</p>
                        </li>

                        <li className="menu-item p-1 hover:bg-[#eceeff]" onClick={handleOpen}>
                            <p className="p-2">Savings</p>
                        </li>

                        <li className="menu-item p-1 hover:bg-[#eceeff] rounded-b-md" onClick={handleOpen}>
                            <p className="p-2">Bank of America</p>
                        </li>

                    </ul>
                ) : null}


                <div className="mt-4">
                    <p className="mb-1">Reciepient Account Number</p>
                    <input type="number" className="w-full text-sm p-4 outline-none bg-white rounded-md shadow-sm" placeholder="Enter the Account number" />
                </div>

                <div className="text-slate-500 mt-4">
                    <p className="mb-1">Reciepient Account Name</p>
                    <div className="w-full p-4 bg-white rounded-md shadow-sm flex justify-between">
                        <p>Jack O'wells</p>
                        <img className="h-5" src={IMG1} alt="" />
                    </div>
                </div>

                <div className="w-full mt-4 text-white p-4 bg-primary rounded-md flex justify-center hover:cursor-pointer">
                    <p>Proceed</p>
                </div>

                <Amount />

            </div>
    );
}

export default AccDetails;