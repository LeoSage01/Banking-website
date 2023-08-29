import Sidebar from "../components/Sidebar";
import Transfers from "../components/Transfers/Transfers";



const Transfer = () => {

    return (
        <div className="h-[100vh] relative bg-[#F0F4FA] lg:p-4 flex  ">
            <Sidebar />

            <Transfers />
        </div>
    );
}

export default Transfer;