import Sidebar from "../components/Sidebar";
import MainDash from "../components/MainDash";
import Transfer from "./Transfer";
import Trans from "../components/Transfers/AccDetailsInt";
import Confirm from "../components/Transfers/Confirm";
import CreatePin from "../components/Transfers/CreatePin";



const Dashboard = () => {
    return (
            <div className="h-[100vh] w-full bg-[#ebf2fb] lg:p-4 flex lg:space-x-4 relative">
                <Sidebar />
                
                <MainDash />
            </div>

    );
}

export default Dashboard;
