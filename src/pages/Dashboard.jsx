import Sidebar from "../components/Sidebar";
import MainDash from "../components/MainDash";
import Transfer from "./Transfer";
import Trans from "../components/Transfers/Trans";


const Dashboard = () => {
    return (
        <div className="h-[100vh] bg-[#ebf2fb] p-4 flex space-x-4">
            {/* <Sidebar /> */}
            {/* <MainDash /> */}
            {/* <Transfer /> */}
            <Trans />
        </div>
    );
}

export default Dashboard;