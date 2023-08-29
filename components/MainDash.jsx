import Table from "../components/Table";
import Cards from "../components/Cards"
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

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'



ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
)

const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];

const options = {
    plugins: {
        legend: false
    },
    scales: {
        x: {
            grid: {
                display: false,

                // drawOnChartArea: false,
            }
        },

        y: {
            min: 0,
            max: 1000,
            ticks: {
                stepSize: 150,
                callback: (value) => {
                    if (value >= 1000) return `$${value / 1000}k - Unlimited`;
                    if (value >= 800) return `$${value}`;
                    if (value >= 400) return `${value} - $800 `;
                    if (value >= 200) return `${value}k - $400`;
                    if (value >= 100) return `${value} - $200`;
                    if (value >= 50) return `${value} - $100 `
                    if (value >= 0) return `${value} - $50 `;
                    return `$${value}`;

                },
            },
            grid: {
                borderDash: [10],


            }
        }
    }

};

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [100, 400, 400, 430, 490, 750, 100, 100, 130, 600, 490, 750, 100, 100, 130, 600, 490, 750, 100, 100, 130, 600, 490, 750, 700, 800, 800],
            backgroundColor: "#2596be",
            borderColor: "#2596be",
            pointBorderColor: "transparent",
            pointBackgroundColor: "transparent",
            pointStyle: "rect",
            pointBorderWidth: 1,
            tension: 0.6,
            fill: true,
            showLine: true,
        },
        {
            label: 'Dataset 2',
            data: [50, 300, 370, 200, 250, 650, 650, 500, 170, 200, 50, 650, 650, 500, 170, 177, 50, 650, 650, 500, 170, 100, 50, 650, 600, 1000, 1000, 940],
            backgroundColor: "#FF5555",
            borderColor: "#FF5555",
            pointBorderColor: "transparent",
            pointBackgroundColor: "transparent",
            pointStyle: "rect",
            pointBorderWidth: 1,
            tension: 0.5,
            fill: true,
            showLine: true,
        }
    ]
}


const MainDash = () => {
    return (
        <div className=" flex justify-center w-full my-auto h-full overflow-scroll p-4 lg:p-0">
            <div>
                <div className="flex justify-between mt-10 lg:mt-0 mb-6 pr-10">
                    <h3 className="font-bold">Dashboard</h3>

                    <div className="relative hidden sm:block w-[40%]">
                        <input className="pl-12 pr-20 py-1 w-full text-sm rounded-md" type="text" placeholder="Type to search..." />
                        <img className="h-5 absolute top-1 left-2" src={IMG6} alt="" />
                    </div>

                    <div className="relative">
                        <img className="h-6" src={IMG5} alt="" />
                        <span className="h-2 w-2 bg-red-500 rounded-full absolute top-0 right-0"></span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-8 lg:space-x-4">
                    <div className=" lg:col-span-5 flex flex-col mb-4 md:mb-0 space-y-2">
                        <div className="md:h-[20%] grid grid-cols-2 sm:grid-cols-4 gap-4">
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

                        {/* Analytics */}
                        <div className="bg-white h-[45%] w-full rounded-xl p-4 shadow-md overflow-scroll">

                            <div className="w-[100%] flex justify-between p-2">
                                <div className="mx-4">
                                    <h2 className="" >Analytics</h2>
                                </div>
                                <div className="flex gap-5">
                                    <div className=" flex gap-2 ">
                                        <div className="w-[11px] h-[11px] rounded-[50px] bg-primary mt-1 "></div>
                                        <p className="text-xs font-normal ">Income</p>
                                    </div>
                                    <div className=" flex gap-2 ">
                                        <div className="w-[11px] h-[11px] rounded-[50px] bg-out mt-1"></div>
                                        <p className="text-xs font-normal ">Outcome</p>
                                    </div>
                                </div>

                                <div className=" flex gap-4 mx-6">
                                    <button className="px-3 py-1 bg-gray-200 rounded-[11px] text-ash  text-xs">Weekly</button>
                                    <button className="px-3 py-1 bg-primary  rounded-[11px] text-fair  text-xs">Monthly</button>
                                    <button className="px-3 py-1 mr-4 bg-gray-200 rounded-[11px] text-ash  text-xs">Yearly</button>
                                </div>
                            </div>
                            <div className="flex w-full px-4">
                                <div className="w-[500px] " >
                                    <Line data={data} options={options}>
                                    </Line>

                                </div>
                            </div>

                        </div>

                        <div className="bg-slate-100 h-[40%] rounded-xl">
                            <Table />
                        </div>
                    </div>

                    <div className=" lg:col-span-3 grid grid-rows-4">
                        <div className="bg-[#f8f8f8] rounded-xl mb-4 row-span-3 shadow-md">
                            <Cards />
                        </div>

                        <div className="p-4 pt-3 mb-4 bg-[#fdfdfd] row-span-1 flex flex-col justify-between rounded-xl shadow-md">
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

                            <div className="flex flex-row justify-between ">
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

export default MainDash;






