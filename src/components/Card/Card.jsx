import { useState } from "react";
import IMG from "../../img/plp.png"
import IMG1 from "../../img/plpp.png"
import Sidebar from "../Sidebar";
import BlockCard from "./BlockCard";
import SetCard from "./SetCard";

const Card = () => {
    const [showDetails, setShowDetails] = useState(false)

    const handleShowDetails = () => {
        setShowDetails(showDetails === false ? true : false)
    }

    const handleHideDetails = () => {
        setShowDetails(false)
    }

    return (
        <div className="h-[100vh] bg-[#ebf2fb] p-4 flex gap-4">
            <Sidebar />

            <div className="h-full pt-5 pl-8 mx-auto">
                <h3 className="mb-5 font-bold">Card</h3>

                <div className="bg-white pl-12 pt-6 h-[90%] w-[60vw] rounded-lg shadow-md">

                    <h4 className="pb-2 font-bold">Card Information</h4>

                    <div className="grid grid-cols-2 pl-5 px-6">
                        <div className="">
                            <img className="h-48" src={IMG} alt="" />


                            <div className="pr-14 space-y-4">

                                {showDetails ?

                                    <div className="py-2 space-y-1 pl-4">
                                        <p className="text-gray-500">16 digit code</p>
                                        <div className="">
                                            <p>4361 2444 0132 1234</p>

                                        </div>

                                        <p className="text-gray-500">CVV</p>
                                        <div className="">
                                            <p>201</p>

                                        </div>
                                        <p className="text-gray-500">Expiry Date</p>
                                        <div className="">
                                            <p>11/22</p>

                                        </div>
                                    </div>


                                    :

                                    <div className="grid grid-cols-2">
                                        <div className=""></div>
                                        <button
                                            onClick={handleShowDetails}
                                            className="bg-black ml-8 my-4 px-2 py-2 rounded-md">
                                            <p className="text-white text-xs text-center">Show details</p>
                                        </button>
                                    </div>
                                }

                                <div className="pl-4 space-y-3">
                                    <div className="bg-[#ebf2fb] px-4 py-2 text-primary flex justify-between rounded-md">
                                        <p className="my-auto ">Manage Card</p>
                                        <span className="material-symbols-outlined my-auto">
                                            chevron_right
                                        </span>
                                    </div>

                                    <div className="bg-black px-4 py-2 text-red-500 flex justify-between rounded-md">
                                        <p className="my-auto">Block Card</p>
                                        <span className="material-symbols-outlined my-auto ">
                                            chevron_right
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {showDetails &&
                        
                            <div className="">
                                <img className="h-48" src={IMG1} alt="" />

                                <div className="grid grid-cols-2 pr-12 mt-6">
                                    <div className=""></div>
                                    <button
                                        onClick={handleHideDetails}
                                        className="bg-black ml-8 my-4 px-2 py-2 rounded-md">
                                        <p className="text-white text-xs text-center">Hide details</p>
                                    </button>
                                </div>
                            </div>

                        }

                    </div>
                </div>

            </div>
        </div>


    );
}

export default Card;