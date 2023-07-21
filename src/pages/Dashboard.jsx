import Sidebar from "../components/Sidebar";
import MainDash from "../components/MainDash";
import Transfer from "./Transfer";
import Trans from "../components/Transfers/Trans";
import Confirm from "../components/Transfers/Confirm";
import CreatePin from "../components/Transfers/CreatePin";



const Dashboard = () => {
    return (
        <div className="">
            <div className="h-[100vh] bg-[#ebf2fb] p-4 flex space-x-4 relative">
                <Sidebar />
                <MainDash />
                {/* <Transfer /> */}
                {/* <Trans /> */}

                {/* <Confirm /> */}
                {/* <CreatePin /> */}
            </div>

        </div>
    );
}

export default Dashboard;
