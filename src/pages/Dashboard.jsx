import Cards from "../components/Cards";
import Chart from "../components/Chart";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import IMG1 from "../img/plus.png"
import IMG2 from "../img/wallet.png"
import IMG3 from "../img/dollar.png"
import IMG4 from "../img/park.png"
import IMG5 from "../img/bell.png"
import IMG6 from "../img/search.png"
import IMG7 from "../img/person1.png"
import IMG8 from "../img/person2.png"
import IMG9 from "../img/person3.png"
import IMG10 from "../img/person4.png"


const Dashboard = () => {
    return (
        <div className="h-[100vh] bg-[#ebf2fb] flex">
            <Sidebar />
            <div className="mx-4 w-screen h-full">
                <div className="flex justify-between mt-4 mb-6 pr-10">
                    <h3 className="font-bold">Dashboard</h3>

                    <div className="relative w-[40%]">
                        <input className="pl-12 pr-20 py-1 w-full text-sm rounded-md" type="text" placeholder="Type to search..." />
                        <img className="h-5 absolute top-1 left-2" src={IMG6} alt="" />
                    </div>

                    <div className="relative">
                        <img className="h-6" src={IMG5} alt="" />
                        <span className="h-2 w-2 bg-red-500 rounded-full absolute top-0 right-0"></span>
                    </div>
                </div>

                <div className="grid grid-cols-8 space-x-4">
                    <div className="col-span-5 flex flex-col space-y-2">
                        <div className="h-[20%] grid grid-cols-4 space-x-4">
                            <div className="col-span-1 bg-black rounded-xl p-3 flex flex-col justify-between">
                                <div className="h-8 w-8 rounded-full flex justify-center p-1 bg-white">
                                    <img className="" src={IMG1} alt="" />
                                </div>

                                <p className="text-white font-bold">Add money</p>
                            </div>

                            <div className="col-span-1 bg-primary text-white rounded-xl p-3 flex flex-col justify-between shadow-md">
                                <div className="h-8 w-8 p-1 rounded-full mb-2 bg-[#5336cf]">
                                    <img className="" src={IMG2} alt="" />
                                </div>
                                <div className="space-y-1">
                                    <p className="font-light">Balance</p>
                                    <p className="">$1224.10</p>
                                </div>
                            </div>

                            <div className="col-span-1 bg-white rounded-xl p-3 flex flex-col justify-between shadow-md">
                                <div className="h-8 w-8 rounded-full mb-2  p-1 bg-[#ebf2fb]">
                                    <img src={IMG3} alt="" />
                                </div>
                                <div className="space-y-1">
                                    <p className="font-light">Income</p>
                                    <p className="">$25.21</p>
                                </div>
                            </div>

                            <div className="col-span-1 bg-white rounded-xl p-3 flex flex-col justify-between shadow-md">
                                <div className="h-8 w-8 rounded-full mb-2 p-1 bg-[#ebf2fb]">
                                    <img src={IMG4} alt="" />
                                </div>
                                <div className="space-y-1">
                                    <p className="font-light">Expenses</p>
                                    <p className="">$25.21</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-400 h-[45%] rounded-xl shadow-md">
                            <Chart />
                        </div>

                        <div className="bg-slate-100 h-[40%] rounded-xl">
                            <Table />
                        </div>
                    </div>

                    <div className="col-span-3 grid grid-rows-4">
                        <div className="bg-[#f8f8f8] rounded-xl mb-4 row-span-3 shadow-md">
                            <Cards />
                        </div>

                        <div className="p-4 pt-3 bg-[#fdfdfd] row-span-1 flex flex-col justify-between rounded-xl shadow-md">
                            <div className="space-y-2">
                                <h3 className="">Quick Transfer</h3>

                                <div className="flex space-x-2 mb-2">
                                    <div className="h-8 w-8 rounded-full">
                                        <img src={IMG7} alt="" />
                                    </div>
                                    <div className="h-8 w-8 rounded-full">
                                        <img src={IMG8} alt="" />
                                    </div>
                                    <div className="h-8 w-8 rounded-full">
                                        <img src={IMG9} alt="" />
                                    </div>
                                    <div className="h-8 w-8 rounded-full">
                                        <img src={IMG10} alt="" />
                                    </div>

                                    <span className="material-symbols-outlined text-[#797676]">
                                        navigate_next
                                    </span>
                                </div>

                            </div>

                            <div className="flex flex-row justify-between">
                                <button className="bg-primary py-1 px-3 text-white text-sm rounded-md shadow-sm">Send Money</button>
                                <button className="bg-white py-1 px-3 text-sm rounded-md shadow-sm">Save as Draft</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;