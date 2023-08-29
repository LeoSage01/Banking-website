import SettingsContent from "./SettingsContent";

const SettingSideBar = () => {
    return (
        <div className='w-full bg-[#ebf2fb] p-4'>
                <div className="text-center lg:text-left xl:justify-start mb-6 mx-auto pt-4 pb-2">
                    <h3 className="text-black font-bold">Setting</h3>
                </div>


            <div className=" h-[85%] mx-auto bg-white shadow-md rounded-lg overflow-y-scroll">
                <SettingsContent />
            </div>
        </div>
    );
}

export default SettingSideBar;