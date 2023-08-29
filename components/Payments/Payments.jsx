import Sidebar from "../Sidebar";
import IMG1 from "../../img/netflix.png";
import IMG2 from "../../img/spotify.png";
import IMG3 from "../../img/youtube.png";



const Payments = () => {
    const items = [
        {
            id: 1,
            img: IMG1,
            name: "Andrew James",
            company: "Netflix",
            date: "10/06/23",
            time: "3:45:10 PM",
            price: 14.02,
            status: "Completed",
        },
        {
            id: 2,
            img: IMG2,
            name: "Andrew James",
            company: "Spotify",
            date: "10/06/23",
            time: "3:45:10 PM",
            price: 14.02,
            status: "Pending",
        },
        {
            id: 3,
            img: IMG3,
            name: "Andrew James",
            company: "Credit",
            date: "10/06/23",
            time: "3:45:10 PM",
            price: 14.02,
            status: "Completed",
        },
        {
            id: 4,
            img: IMG3,
            name: "Andrew James",
            company: "Debit",
            date: "10/06/23",
            time: "3:45:10 PM",
            price: 14.02,
            status: "Completed",
        },
        {
            id: 5,
            img: IMG3,
            name: "Andrew James",
            company: "Debit",
            date: "10/06/23",
            time: "3:45:10 PM",
            price: 14.02,
            status: "Completed",
        }
    ];


    return (
        <div className="h-[100vh] relative bg-[#ebf2fb] lg:p-4 flex lg:space-x-4">
            <Sidebar />

            <div className="w-full mx-auto flex flex-col justify-around pt-8 pb-4">
                <div className="text-center mb-6">
                    <h3 className="text-primary font-bold mb-2">Payments</h3>
                    <p className="text-gray-500">Transaction History</p>
                </div>


                <div className="h-[500px] pr-4 mx-4 sm:w-[80%] sm:mx-auto overflow-x-scroll  px-8 py-6 flex flex-col justify-around bg-white shadow-md rounded-lg">

                    <div className="">
                        <div className="flex justify-between text-center py-4">
                            <div>Transactions</div>
                            <div className="bg-[#ebf2fb] text-primary rounded-md flex space-x-2 py-2 px-4">
                                <p className="text-xs">Recents</p>
                                <span className="material-symbols-outlined text-center text-sm font-extrabold">
                                    expand_more
                                </span>
                            </div>
                        </div>

                        <table className="table min-w-full ">

                            <tbody>
                                {items.map((item) => {
                                    let color;
                                    if (item.status === "Completed") {
                                        color = "green"
                                    } else {
                                        color = "red"
                                    }
                                    return (
                                        <tr className="text-xs table-row " key={item.id}>
                                            <td className="py-4 px-2">
                                                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full">
                                                    <img className="h-full" src={item.img} alt="" />
                                                </div>
                                            </td>
                                            <td className="py-2 text-slate-500">{item.name}</td>
                                            <td className="pl-5 py-2 text-slate-500">{item.company}</td>
                                            <td className="pl-5 py-2 text-slate-500">{item.date}</td>
                                            <td className="pl-5 py-2 text-slate-500">{item.time}</td>
                                            <td className="pl-5 py-2 text-slate-500">${item.price}</td>
                                            <td className={`pl-5 py-2 ${color} pr-8`}>{item.status}</td>
                                            
                                        </tr>
                                    )
                                }
                                )}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payments;