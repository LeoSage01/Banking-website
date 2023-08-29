import IMG from "../../img/plp.png"
import IMG2 from "../../img/block.png"
import IMG3 from "../../img/blocked.png"
import IMG4 from "../../img/yes.png"
import IMG5 from "../../img/no.png"
import Sidebar from "../Sidebar";
import { useState } from "react"

const BlockCard = () => {
    const [active, setActive] = useState(true)

    const handleClick = () => {
        setActive(false === active ? true : false)
        console.log(active);
    }


    return (

            <div className="bg-white p-4 md:pl-12 pt-6 h-[90%] lg:w-[750px] rounded-lg shadow-md">

                <div className="">
                    <h4 className="pb-2 font-bold">Block virtual card</h4>
                </div>

                <div className="grid grid-col-1 sm:grid-cols-2 p-4 md:pl-5 ">
                    <div className="">
                        <img className="h-36 xs:h-48" src={IMG} alt="" />




                        <div className="lg:pl-4 space-y-6 mt-4">
                            <div className="bg-[#3f3d3d] px-4 py-2 max-w-[300px] text-white flex justify-between rounded-md">
                                <div className="my-auto space-y-1">
                                    <p className="font-bold text-xs">Block card</p>
                                    <p className="text-xs">Temporarily disable card</p>
                                </div>

                                <span className="my-auto" onClick={handleClick}>
                                    {active ?
                                        <img className="h-5" src={IMG2} alt="" />
                                        :
                                        <img className="h-5" src={IMG3} alt="" />
                                    }
                                </span>
                            </div>


                            <div className="bg-[#f8f8f8] px-4 py-6 text-gray-500 flex flex-col rounded-md">
                                <p className="my-auto font-bold mb-4 text-sm">Blocking your card will stop</p>

                                {active ?
                                    <>
                                        <div className="mb-1 flex space-x-1">
                                            <img className="h-3 my-auto" src={IMG4} alt="" />
                                            <p className="text-xs ">Online payments</p>
                                        </div>
                                        <div className="flex space-x-1">
                                            <img className="h-3 my-auto" src={IMG4} alt="" />
                                            <p className="text-xs ">Cardless withdrawals</p>
                                        </div>
                                    </>

                                    :

                                    <>
                                        <div className="mb-1 flex space-x-2">
                                            <img className="h-2 my-auto" src={IMG5} alt="" />
                                            <p className="text-xs ">Online payments</p>
                                        </div>
                                        <div className="flex space-x-2">
                                            <img className="h-2 my-auto" src={IMG5} alt="" />
                                            <p className="text-xs ">Cardless withdrawals</p>
                                        </div>
                                    </>

                                }
                            </div>
                        </div>
                    </div>



                </div>
            </div>

    );
}

export default BlockCard;