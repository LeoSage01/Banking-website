import Sidebar from "../Sidebar";
import SettingSideBar from "./SettingSideBar";
const Settings = () => {
    return (
        <div className="h-[100vh] bg-[#ebf2fb] flex lg:space-x-4 lg:p-4 relative">
            <Sidebar />
            <SettingSideBar />
        </div>
    );
}

export default Settings;