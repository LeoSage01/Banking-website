import IMG from "../../img/plp.png"
import IMG2 from "../../img/block.png"
import IMG3 from "../../img/blocked.png"
import IMG4 from "../../img/yes.png"
import IMG5 from "../../img/no.png"
import Sidebar from "../Sidebar";

const SetCard = () => {


    return (
        <div className="h-[100vh] bg-[#ebf2fb] p-4 flex gap-4 relative">
            <Sidebar />

            <div className="h-full pt-5 pl-8 mx-auto">
                <h3 className="mb-5 font-bold">Card</h3>

                <div className="bg-white pl-12 pt-6 h-[90%] w-[60vw] rounded-lg shadow-md">

                    <div className="">
                        <span>  </span>
                        <h4 className="pb-2 font-bold">Block virtual card</h4>
                    </div>

                    <div className="grid grid-cols-2 pl-3 ">
                        <div className="space-y-8">
                            <img className="h-48" src={IMG} alt="" />

                            <div className="pl-3 pr-10 space-y-6">
                                <div className="bg-[#ebf2fb] px-4 py-2 text-primary flex justify-between rounded-md">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-xs font-semibold">Card PIN</p>
                                        <p className="text-xs">View and Reset this card PIN</p>
                                    </div>
                                    <span className="material-symbols-outlined font-bold my-auto">
                                        chevron_right
                                    </span>
                                </div>

                                <div className="bg-[#ebf2fb] px-4 py-2 text-primary flex justify-between rounded-md">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-xs font-semibold">Set Limit</p>
                                        <p className="text-xs">Transaction limit on this card</p>
                                    </div>
                                    <span className="material-symbols-outlined font-bold my-auto">
                                        chevron_right
                                    </span>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default SetCard;