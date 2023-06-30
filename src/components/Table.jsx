const Table = () => {
    const items = [
        {
            id: 1,
            name: "Andrew James",
            company: "Netflix",
            date: "10/06/23",
            time: "3:45:10 PM",
            price: 14.02,
            check: "Completed"
        },
        {
            id: 2,
            name: "Andrew James",
            company: "Netflix",
            date: "10/06/23",
            time: "3:45:10 PM",
            price: 14.02,
            check: "Completed"
        },
        {
            id: 3,
            name: "Andrew James",
            company: "Netflix",
            date: "10/06/23",
            time: "3:45:10 PM",
            price: 14.02,
            check: "Completed"
        },
        {
            id: 4,
            name: "Andrew James",
            company: "Netflix",
            date: "10/06/23",
            time: "3:45:10 PM",
            price: 14.02,
            check: "Completed"
        }
    ]

    return (
        <div className="py-4 px-6">
            <table className="min-w-full">
                <thead>
                    <tr className="flex justify-between text-center mb-2">
                        <th>Transactions</th>
                        <th className="bg-purple-300 text-primary text-xs px-2 py-1 rounded-md">Recents</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr className="text-xs flex justify-between align-middle text-center" key={item.id}>
                            <td className="h-7 w-7 py-3 bg-primary rounded-full"></td>
                            <td className=" py-3 text-slate-500">{item.name}</td>
                            <td className="pl-5 py-3 text-slate-500">{item.company}</td>
                            <td className="pl-5 py-3 text-slate-500">{item.date}</td>
                            <td className="pl-5 py-3 text-slate-500">{item.time}</td>
                            <td className="pl-5 py-3 text-slate-500">${item.price}</td>
                            <td className="pl-5 py-3 text-slate-500">{item.check}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Table;