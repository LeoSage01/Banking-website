import Sidebar from "../components/Sidebar";
import IMG1 from "../img/trans1.png"
import IMG2 from "../img/trans2.png"

const Transfer = () => {
    return (
        <div className="w-screen flex flex-col justify-center">
            <div className="mx-auto w-[50%] space-y-6 p-4">
                <h2 className="font-bold text-xl text-center mb-10">Funds Transfer</h2>

                <div className="w-full bg-white rounded-md p-4 flex justify-between">
                    <div className="flex space-x-5">
                        <div className="h-10 w-10 bg-white my-auto p-2 shadow-sm rounded-full">
                            <img className="" src={IMG1} alt="" />
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-bold text-primary">Send to a Noxa Bank User</h4>
                            <p className="text-slate-500">Charge fee transfer</p>
                        </div>
                    </div>
                    <span className="material-symbols-outlined font-bold my-auto text-slate-500">
                        chevron_right
                    </span>
                </div>

                <div className="w-full bg-white rounded-md p-4 flex justify-between">
                    <div className="flex space-x-5">
                        <div className="h-10 w-10 bg-purple-600 my-auto p-2 rounded-full">
                            <img className="h-full" src={IMG2} alt="" />
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-bold text-primary">Send to a Bank Account</h4>
                            <p className="text-slate-500">Send to a local Bank account</p>
                        </div>
                    </div>
                    <span className="material-symbols-outlined font-bold my-auto text-slate-500">
                        chevron_right
                    </span>
                </div>

                <div className="w-full] bg-white rounded-md p-4 flex justify-between">
                    <div className="flex space-x-5">
                        <div className="h-10 w-10 bg-black my-auto p-2 rounded-full">
                            <img src={IMG2} alt="" />
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-bold">International Account</h4>
                            <p className="text-slate-500">Send money to your friends quickly</p>
                        </div>
                    </div>
                    <span className="material-symbols-outlined font-bold my-auto text-slate-500">
                        chevron_right
                    </span>
                </div>

            </div>
        </div>
    );
}

export default Transfer;