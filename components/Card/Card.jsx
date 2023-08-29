import { useState } from "react";
import IMG from "../../img/plp.png"
import IMG1 from "../../img/plpp.png"
import Sidebar from "../Sidebar";
import BlockCard from "./BlockCard";
import SetCard from "./SetCard";

const Card = () => {
    const [showDetails, setShowDetails] = useState(false)
    const [next, setNext] = useState(0)

    const forBlockCard = () => {
        setNext(1)
    }

    const reset = () => {
        setNext(0)
    }

    const handleShowDetails = () => {
        setShowDetails(showDetails === false ? true : false)
    }

    const handleHideDetails = () => {
        setShowDetails(false)
    }

    return (
        <div className="h-[100vh] relative bg-[#ebf2fb] flex lg:p-4 lg:gap-4"> 
            <Sidebar />

            <div className="h-full pt-5 p-4 mx-auto w-full md:w-[750px] flex flex-col ">
                    <h3 className="mb-8 font-bold text-center lg:text-left" onClick={reset}>Card</h3>

                    {(next != 0) ?
                        <span className="absolute right-10 md:right-20" onClick={reset}>x</span>
                        : null}


                {next == 0 &&
                    <div className="bg-white md:pl-12 p-4 pt-6 h-[90%] w-full  overflow-y-auto rounded-lg shadow-md">

                        <h4 className="pb-2 font-bold">Card Information</h4>

                        <div className="grid lg:grid-cols-2 pl-5 px-6">
                            <div className="">
                                <img className="h-36 xs:h-48" src={IMG} alt="" />


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
                                                className="bg-black ml-8 my-4 px-2 py-2 w-[100px] rounded-md">
                                                <p className="text-white text-xs text-center">Show details</p>
                                            </button>
                                        </div>
                                    }

                                    <div className="pl-4 space-y-3 max-w-[350px]">
                                        <div className="bg-[#ebf2fb] px-4 py-2 text-primary flex justify-between rounded-md">
                                            <p className="my-auto ">Manage Card</p>
                                            <span className="material-symbols-outlined my-auto">
                                                chevron_right
                                            </span>
                                        </div>

                                        <div className="bg-black px-4 py-2 text-red-500 flex justify-between rounded-md"
                                            onClick={forBlockCard}
                                        >
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
                                    <img className="h-36 xs:h-48" src={IMG1} alt="" />

                                    <div className="grid grid-cols-2 pr-12 mt-6">
                                        <div className=""></div>
                                        <button
                                            onClick={handleHideDetails}
                                            className="bg-black ml-8 my-4 px-2 py-2 w-[100px] rounded-md">
                                            <p className="text-white text-xs text-center ">Hide details</p>
                                        </button>
                                    </div>
                                </div>

                            }

                        </div>
                    </div>

                }
                {next === 1 && <BlockCard />}
            </div>
        </div>


    );
}

export default Card;