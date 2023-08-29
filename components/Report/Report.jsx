import Sidebar from "../Sidebar";
import FAQ from "./FAQ";

import IMG1 from "../../img/cl.png"
import IMG2 from "../../img/mgs.png"
import IMG3 from "../../img/quess.png"
import IMG4 from "../../img/ml.png"
import { useState } from "react";


const Report = () => {
    const [next, setNext] = useState(0)

    const forFAQ = () => {
        setNext(1)
    }
    
    const handlePrev = () => {
        setNext(0)
    }




    return (
        <div className="h-[100vh] relative bg-[#ebf2fb] text-xs xs:text-base lg:p-4 flex lg:space-x-4">
            <Sidebar />

            {next == 0 &&
                <div className="w-full mx-auto flex flex-col justify-around pt-8 pb-4">
                <div className="text-center mb-6">
                    <h3 className="text-primary font-bold mb-2">Report</h3>
                    <p className="text-gray-500">We are here to assist</p>
                </div>

                <div className="h-[80%] w-full px-4 sm:w-[80%] max-w-[600px] mx-auto flex flex-col space-y-6">
                    <div className="w-full bg-white rounded-md p-4 flex justify-between">
                        <div className="flex space-x-5">
                            <div className="h-7 w-7 xs:h-10 xs:w-10 bg-white my-auto p-2 shadow-sm rounded-full">
                                <img className="" src={IMG1} alt="" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-bold text-primary">Call Us</h4>
                                <p className="text-slate-500">Contact call center</p>
                            </div>
                        </div>
                        <span className="material-symbols-outlined font-bold my-auto text-slate-500">
                            chevron_right
                        </span>
                    </div>

                    <div className="w-full bg-white rounded-md p-4 flex justify-between">
                        <div className="flex space-x-5">
                            <div className="h-7 w-7 xs:h-10 xs:w-10  my-auto p-2 xs:p-3 shadow-sm rounded-full">
                                <img className="h-full" src={IMG2} alt="" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-bold text-primary">Chat with us</h4>
                                <p className="text-slate-500">Contact call center</p>
                            </div>
                        </div>
                        <span className="material-symbols-outlined font-bold my-auto text-slate-500">
                            chevron_right
                        </span>
                    </div>

                    <div className="w-full bg-white rounded-md p-4 flex justify-between" onClick={forFAQ}>
                        <div className="flex space-x-5">
                            <div className="h-7 w-7 xs:h-10 xs:w-10  my-auto p-2 shadow-sm rounded-full">
                                <img className="h-full" src={IMG3} alt="" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-bold text-primary">FAQs</h4>
                                <p className="text-slate-500">Frequently Asked Questions</p>
                            </div>
                        </div>
                        <span className="material-symbols-outlined font-bold my-auto text-slate-500">
                            chevron_right
                        </span>
                    </div>

                    <div className="w-full bg-white rounded-md p-4 flex justify-between">
                        <div className="flex space-x-5">
                            <div className="h-7 w-7 xs:h-10 xs:w-10 my-auto p-2 shadow-sm rounded-full">
                                <img className="h-full" src={IMG4} alt="" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-bold text-primary">Send a mail</h4>
                                <p className="text-slate-500">Automatically opens gmail App</p>
                            </div>
                        </div>
                        <span className="material-symbols-outlined font-bold my-auto text-slate-500">
                            chevron_right
                        </span>
                    </div>
                </div>
            </div >}

            {next == 1 && <FAQ handlePrev={handlePrev}/>}
        </div>
    );
}

export default Report;