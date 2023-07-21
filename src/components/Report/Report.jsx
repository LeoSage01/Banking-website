import Sidebar from "../Sidebar";
import FAQ from "./FAQ";


const Report = () => {
    return (
        <div className="h-[100vh] bg-[#ebf2fb] p-4 flex space-x-4">
            <Sidebar />
            <FAQ />
        </div>
    );
}

export default Report;