import Sidebar from "../Sidebar";
import AnalyticsSideBar from "./AnalyticsSideBar";

const Analytics = () => {
    return (

        <div className="h-[100vh] bg-[#ebf2fb] lg:p-4 flex relative">
            <Sidebar />
            <AnalyticsSideBar />
        </div>
    );
}

export default Analytics;