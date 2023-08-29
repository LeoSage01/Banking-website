import IMG1 from "../img/netflix.png";
import IMG2 from "../img/spotify.png";
import IMG3 from "../img/youtube.png";

const Table = () => {
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
            company: "Youtube",
            date: "10/06/23",
            time: "3:45:10 PM",
            price: 14.02,
            status: "Completed",
        },
        {
            id: 4,
            img: IMG3,
            name: "Andrew James",
            company: "Youtube",
            date: "10/06/23",
            time: "3:45:10 PM",
            price: 14.02,
            status: "Completed",
        },
    ];


    return (
        <div className="py-4 px-6 bg-white rounded-xl shadow-md overflow-x-scroll">
            <div className="flex justify-between text-center mb-2">
                <div>Transactions</div>
                <div className="bg-[#ebf2fb] text-primary rounded-md flex space-x-2 py-2 px-4">
                    <p className="text-xs">Recents</p>
                    <span className="material-symbols-outlined text-center text-sm font-extrabold">
                        expand_more
                    </span>
                </div>
            </div>

            <table className="table min-w-full">

                <tbody>
                    {items.map((item) => {
                        let color;
                        if (item.status === "Completed") {
                             color = "green"
                        } else {
                             color = "red"
                        }
                        return (
                            <tr className="text-xs table-row" key={item.id}>
                                <td className="py-2">
                                    <div className="h-6 w-6 rounded-full">
                                        <img className="h-full" src={item.img} alt="" />
                                    </div>
                                </td>
                                <td className="py-2 text-slate-500">{item.name}</td>
                                <td className="pl-5 py-2 text-slate-500">{item.company}</td>
                                <td className="pl-5 py-2 text-slate-500">{item.date}</td>
                                <td className="pl-5 py-2 text-slate-500">{item.time}</td>
                                <td className="pl-5 py-2 text-slate-500">${item.price}</td>
                                <td className={`pl-5 py-2 ${color}`}>{item.status}</td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
