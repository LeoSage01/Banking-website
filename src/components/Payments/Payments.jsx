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
        <div className="h-[100vh] bg-[#ebf2fb] p-4 flex space-x-4">
            <Sidebar />

            <div className="w-full mx-auto pt-8 pb-4">
                <div className="text-center mb-6">
                    <h3 className="text-primary font-bold mb-2">Payments</h3>
                    <p className="text-gray-500">Transaction History</p>
                </div>


                <div className="h-[200px] px-6">
                    
                </div>
            </div>
        </div>
    );
}

export default Payments;