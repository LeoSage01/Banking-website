import Cards from "../components/Cards";
import Chart from "../components/Chart";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";

const Dashboard = () => {
    return (
        <div className="h-[100vh] bg-slate-300 flex">
            <Sidebar />
            <div className="mx-4 w-screen">
                <div className="flex justify-between mt-4 mb-5 pr-10">
                    <h3 className="font-bold">Dashboard</h3>

                    <input className="pl-12 pr-20 py-1 w-[40%] text-sm rounded-md" type="text" placeholder="Type to search..." />

                    <div className="">
                        <p>Icon</p>
                    </div>
                </div>

                <div className="h-[88%] grid grid-cols-8 space-x-4">
                    <div className="col-span-5 flex flex-col space-y-2">
                        <div className="h-[20%] grid grid-cols-4 space-x-4">
                            <div className="col-span-1 bg-black rounded-xl p-3 flex flex-col justify-between">
                                <div className="h-9 w-9 rounded-full bg-white">
                                    {/* icon */}
                                </div>

                                <p className="text-white font-bold mb-2">Add money</p>
                            </div>

                            <div className="col-span-1 bg-primary text-white rounded-xl p-3 flex flex-col justify-between">
                                <div className="h-8 w-8 rounded-full bg-red-500">
                                    {/* icon */}
                                </div>
                                <div className="space-y-1">
                                    <p className="font-light">Balance</p>
                                    <p className="">$1224.10</p>
                                </div>
                            </div>

                            <div className="col-span-1 bg-white rounded-xl p-3 flex flex-col justify-between">
                                <div className="h-8 w-8 rounded-full bg-red-500">
                                    {/* icon */}
                                </div>
                                <div className="space-y-1">
                                    <p className="font-light">Income</p>
                                    <p className="">$25.21</p>
                                </div>
                            </div>

                            <div className="col-span-1 bg-white rounded-xl p-3 flex flex-col justify-between">
                                <div className="h-8 w-8 rounded-full bg-red-500">
                                    {/* icon */}
                                </div>
                                <div className="space-y-1">
                                    <p className="font-light">Expenses</p>
                                    <p className="">$25.21</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-400 h-[45%] rounded-xl">
                            <Chart />
                        </div>

                        <div className="bg-slate-100 h-[40%] rounded-xl">
                            <Table />
                        </div>
                    </div>

                    <div className="col-span-3 grid grid-rows-4">
                        <div className="bg-slate-100 rounded-xl mb-4 row-span-3">
                            <Cards />
                        </div>

                        <div className="p-4 pt-3 bg-slate-100 row-span-1 flex flex-col justify-between rounded-xl">
                            <div className="space-y-2">
                                <h3 className="">Quick Transfer</h3>

                                <div className="flex space-x-2 mb-2">
                                    <div className="h-8 w-8 rounded-full bg-red-500"></div>
                                    <div className="h-8 w-8 rounded-full bg-red-500"></div>
                                    <div className="h-8 w-8 rounded-full bg-red-500"></div>
                                    <div className="h-8 w-8 rounded-full bg-red-500"></div>
                                </div>
                            </div>

                            <div className="flex flex-row justify-between">
                                <button className="bg-primary py-1 px-3 text-white text-sm rounded-md">Send Money</button>
                                <button className="bg-white py-1 px-3 text-sm rounded-md">Save as Draft</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;